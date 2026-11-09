import numpy as np, soundfile as sf, json
exec(open('sfx_base.py').read())
L={l["id"]:l for l in tl["lines"]}
def whoosh(t,g=0.3):
    ww=noise(0.5,decay=5,lp=0.85); ww*=np.sin(np.linspace(0,np.pi,len(ww))); add(ww,t,g)
for k in ["buy","cta"]: whoosh(L[k]["start"]-0.2)
n=L["news"]["subs"][1]["start"]
for i,f in enumerate([880,1175,880,1175]): add(tone(f,0.12,"square",decay=10),n+i*0.13,0.06)
for c in L["tax"]["subs"][1:]: add(tone(1046,0.3,decay=10)+tone(1568,0.3,decay=10),c["start"],0.1)
for c in L["split"]["subs"]: add(tone(1318,0.3,decay=10),c["start"],0.08)
add(tone(1568,0.6,decay=5)+tone(2093,0.6,decay=5),L["loyal"]["start"]+0.2,0.08)
b=L["broke"]["start"]; add(tone(110,0.5,"square",decay=2)+tone(116,0.5,"square",decay=2),b+0.05,0.12)
for j,f in enumerate([392,370,349,330]): add(tone(f,0.25 if j<3 else 0.7,"saw",decay=3)*0.5,b+0.6+j*0.22,0.1)
cp=L["cta"]["subs"][2]["start"]; add(tone(523.3,0.2,"square",decay=6),cp,0.1); add(tone(783.9,0.5,"square",decay=4),cp+0.18,0.1)
en=L["end"]["start"]; add(tone(523.3,0.25,"square",decay=6),en+0.1,0.1); add(tone(783.9,0.6,"square",decay=4),en+0.32,0.1)
v,_=sf.read("voice.wav",dtype="float32")
mix=out.copy(); mix[:len(v)]+=v
mix=mix/max(1.0,np.max(np.abs(mix))*1.05); sf.write("mix.wav",mix,sr); print("ok",len(mix)/sr)
