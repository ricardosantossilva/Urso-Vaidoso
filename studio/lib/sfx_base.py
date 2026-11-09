import numpy as np, soundfile as sf, json
sr=24000
tl=json.load(open("timeline.json")); D=tl["duration"]
L={l["id"]:l for l in tl["lines"]}
out=np.zeros(int(sr*(D+0.5)),dtype=np.float32)
def add(sig,t,g=1.0):
    i=int(t*sr); n=min(len(sig),len(out)-i); out[i:i+n]+=sig[:n]*g
def tone(f,d,shape="sine",vib=0,decay=3.0,att=0.005):
    tt=np.arange(int(sr*d))/sr
    ff=f*(1+vib*np.sin(2*np.pi*5.5*tt))
    ph=2*np.pi*np.cumsum(ff)/sr
    if shape=="sine": s=np.sin(ph)
    elif shape=="saw": s=2*((ph/(2*np.pi))%1)-1
    elif shape=="square": s=np.sign(np.sin(ph))*0.6
    env=np.minimum(1,tt/att)*np.exp(-decay*tt)
    return (s*env).astype(np.float32)
def noise(d,decay=8,lp=0.0):
    n=np.random.randn(int(sr*d)).astype(np.float32)
    if lp>0:
        y=np.zeros_like(n); a=lp
        for i in range(1,len(n)): y[i]=a*y[i-1]+(1-a)*n[i]
        n=y*3
    tt=np.arange(len(n))/sr
    return n*np.exp(-decay*tt)
