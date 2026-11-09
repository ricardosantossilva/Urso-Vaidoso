import json, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
import os; T = os.environ.get("TTS_DIR", os.path.expanduser("~/.cache/urso-tts")) + "/"
k = Kokoro(T+"kokoro.onnx", T+"voices.bin")
V = {"B": ("am_michael", 1.05), "G": ("af_heart", 1.08)}
lines = [
 ("news",   "B", "Did you see? A famous chip CEO admitted he cheated on his wife.", ["Viste?", "Um CEO famoso dos chips admitiu que pulou a cerca."], 0.3),
 ("ouch",   "G", "Ouch. If that happened here, he'd need a new house.", ["Ui.", "Se fosse cá, ia precisar de casa nova."], 0.35),
 ("buy",    "B", "So he buys another one. He's a billionaire.", ["Então compra outra.", "É bilionário."], 0.3),
 ("tax",    "G", "Buying a house in Portugal? Zero point eight percent stamp duty. Plus IMT.", ["Comprar casa em Portugal?", "0,8% de Imposto do Selo.", "Mais IMT."], 0.3),
 ("split",  "G", "And in a divorce, whoever keeps the shared house pays zero point eight percent on what goes beyond their half.", ["E num divórcio, quem fica com a casa do casal...", "paga 0,8% sobre o que passa da sua metade."], 0.4),
 ("loyal",  "B", "Good thing I'm loyal.", ["Ainda bem que sou fiel."], 0.3),
 ("broke",  "G", "And broke.", ["E teso."], 0.7),
 ("cta",    "G", "Buying, selling, or splitting a house? Urso Vaidoso does the math. From twenty-nine euros a month.", ["Comprar, vender ou partilhar casa?", "A Urso Vaidoso faz as contas.", "Desde 29 euros por mês + IVA."], 0.35),
 ("end",    "B", "Vanity is having your books in order.", ["Vaidade é ter as contas em dia."], 1.0),
]
sr = 24000; pieces=[np.zeros(int(sr*0.4),np.float32)]; tl=[]; t=0.4
for lid, spk, en, pt, gap in lines:
    v, sp = V[spk]
    s, sr = k.create(en, voice=v, speed=sp, lang="en-us"); s=s.astype(np.float32)
    a=np.abs(s); idx=np.where(a>0.01)[0]; s=s[max(0,idx[0]-200): idx[-1]+400]
    d=len(s)/sr; hop=sr//30
    env=[float(np.sqrt(np.mean(s[i:i+hop]**2))) for i in range(0,len(s),hop)]
    w=[len(c) for c in pt]; tot=sum(w); acc=0; ch=[]
    for c,ww in zip(pt,w): ch.append({"text":c,"start":t+d*acc/tot,"end":t+d*(acc+ww)/tot}); acc+=ww
    tl.append({"id":lid,"spk":spk,"start":t,"end":t+d,"gap":gap,"env":env,"subs":ch})
    pieces += [s, np.zeros(int(sr*gap),np.float32)]; t += d+gap
sf.write("voice.wav", np.concatenate(pieces), sr)
json.dump({"duration":t,"lines":tl}, open("timeline.json","w"))
for l in tl: print(l["id"], l["spk"], round(l["start"],2), round(l["end"],2))
print("total", round(t,2))
