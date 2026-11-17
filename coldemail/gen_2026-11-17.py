import json, re, random
random.seed(1117)
CAL="https://calendly.com/hello-ursovaidoso/chamada-de-15-minutos-com-a-urso-vaidoso"
L=[
("Centro de Fisioterapia de Ponta Delgada","geral@cfpdl.com","cfpdl.com","Ponta Delgada","centro de fisioterapia","u","fisioterapia"),
("Ultimate Fit","geral@ultimatefit.pt","ultimatefit.pt","Ovar","estúdio de treino personalizado","u","ginásio"),
("MediSalud","geral@clinicamedisalud.pt","clinicamedisalud.pt","Ponte de Lima","espaço de saúde e bem-estar","u","clínica"),
("HParrinha","geral@hparrinha.pt","hparrinha.pt","Sines","serviços de eletricidade","u","eletricidade"),
("Tecnosines","geral@tecnosines.pt","tecnosines.pt","Sines","serviços técnicos e de eletricidade","u","eletricidade"),
("Viseton","geral@viseton.pt","viseton.pt","Tondela","engenharia e construção","l","construção"),
("Clínica Baía","geral@clinicabaia.pt","clinicabaia.pt","São Martinho do Porto","medicina dentária em São Martinho do Porto e Peniche","u","clínica dentária"),
("Clínica Dentária Espírito Santo","geral@clinicadentariaespiritosanto.com","clinicadentariaespiritosanto.com","Bombarral","medicina dentária no Bombarral e em Peniche","u","clínica dentária"),
("A Casa é Sua","geral@acasaesua.pt","acasaesua.pt","Ovar","mediação imobiliária","u","imobiliária"),
("FS Imobiliária","geral@fsimobiliaria.pt","fsimobiliaria.pt","Ovar","compra, venda e arrendamento de imóveis","u","imobiliária"),
("HCAR","geral@hcar.pt","hcar.pt","Fafe","comércio de automóveis","u","stand automóvel"),
("Factor 4D","geral@factor4d.com","factor4d.com","Lamego","arquitetura, consultadoria e gestão de obra","u","arquitetura"),
("Médifafe","geral@medifafe.pt","medifafe.pt","Fafe","medicina dentária","u","clínica dentária"),
("Hígia Clinic","geral@higiaclinic.pt","higiaclinic.pt","Ponte de Lima","reabilitação integrada","u","clínica de reabilitação"),
("Clínica Cátia Lopes","geral@clinicacatialopes.pt","clinicacatialopes.pt","Ponte de Lima","clínica médica","u","clínica"),
("Formove","info@formove.pt","formove.pt","Ponte de Lima","fisioterapia, osteopatia e reabilitação","u","fisioterapia"),
("Brisália","info@brisalia.pt","brisalia.pt","Sines","instalações e manutenção","u","instalações e manutenção"),
("Silmadeiras","geral@silmadeiras.pt","silmadeiras.pt","Silves","comércio de madeiras","l","comércio de madeiras"),
("LMS","geral@lms.pt","lms.pt","Sines","distribuição de material elétrico","l","material elétrico"),
("Clínica Saleiro","geral@clinicasaleiro.com","clinicasaleiro.com","Fão","medicina dentária e medicina estética","u","clínica dentária"),
("Boca Alegre","geral@bocaalegre.pt","bocaalegre.pt","Esposende","medicina dentária para adultos e crianças","u","clínica dentária"),
("Policlínica Fonte Sã","geral@policlinicafontesa.pt","policlinicafontesa.pt","Esposende","policlínica e medicina dentária","u","clínica dentária"),
("Restaurante Poda","geral@restaurantepoda.pt","restaurantepoda.pt","Montemor-o-Novo","cozinha de tradição e produtos da época","u","restaurante"),
("Clínica Sra. da Conceição","geral@clinicasradaconceicao.pt","clinicasradaconceicao.pt","Alcobaça","fisioterapia e osteopatia","u","fisioterapia"),
("Clínica Dentária Franco","geral@clinicadentariafranco.pt","clinicadentariafranco.pt","Alcobaça","medicina dentária","u","clínica dentária"),
("FindYourWish","geral@findyourwish.pt","findyourwish.pt","Alcobaça","mediação imobiliária","u","imobiliária"),
("Golden Club","geral@goldenclub.pt","goldenclub.pt","Ílhavo","ginásio e atividade física","u","ginásio"),
("Cliabum","geral@cliabum.pt","cliabum.pt","Ílhavo","medicina dentária","u","clínica dentária"),
("OsteoGab","geral@osteogab.pt","osteogab.pt","Oliveira de Azeméis","osteopatia, saúde e performance","u","osteopatia"),
("Climevet","geral@climevet.pt","climevet.pt","Tomar","clínica veterinária","u","clínica veterinária"),
("Multiuniversus","geral@multiuniversus.com","multiuniversus.com","Benavente","mediação imobiliária","l","imobiliária"),
("CCClínica","geral@ccclinica.com","ccclinica.com","Oliveira de Azeméis","clínica de saúde e fisioterapia","u","clínica"),
]
subjects=["{n}: contabilidade por preço fixo","{n} já tem contabilista?","Contabilidade online para {n}","{n}: contabilidade sem complicações","Uma proposta de contabilidade para {n}"]
OPS={'Centro de Fisioterapia de Ponta Delgada': 'Escrevo ao Centro de Fisioterapia de Ponta Delgada porque trabalhamos com clínicas e centros de saúde de pequena dimensão, incluindo nos Açores.', 'Ultimate Fit': 'Vi o estúdio de treino personalizado da Ultimate Fit em Ovar e decidi escrever diretamente.', 'MediSalud': 'Encontrei a MediSalud, o espaço de saúde e bem-estar em Ponte de Lima, e quis apresentar-nos.', 'HParrinha': 'Vi que a HParrinha faz trabalhos de eletricidade em Sines e arredores.', 'Tecnosines': 'Encontrei a Tecnosines quando procurava empresas técnicas e de eletricidade em Sines.', 'Viseton': 'Vi o trabalho da Viseton em engenharia e construção em Tondela.', 'Clínica Baía': 'Reparei que a Clínica Baía tem consultório de medicina dentária em São Martinho do Porto e em Peniche.', 'Clínica Dentária Espírito Santo': 'Encontrei a Clínica Dentária Espírito Santo, com consulta no Bombarral e em Peniche.', 'A Casa é Sua': 'Vi a A Casa é Sua, imobiliária em Ovar, e decidi escrever diretamente.', 'FS Imobiliária': 'Encontrei a FS Imobiliária quando procurava agências de mediação em Ovar.', 'HCAR': 'Vi o stand da HCAR em Fafe e quis apresentar-nos em poucas linhas.', 'Factor 4D': 'Reparei no trabalho da Factor 4D em arquitetura e gestão de obra, em Lamego.', 'Médifafe': 'Encontrei a Médifafe, clínica de medicina dentária no centro de Fafe.', 'Hígia Clinic': 'Vi que a Hígia Clinic faz reabilitação integrada em Ponte de Lima.', 'Clínica Cátia Lopes': 'Encontrei a Clínica Cátia Lopes quando procurava clínicas médicas em Ponte de Lima.', 'Formove': 'Vi o trabalho da Formove em fisioterapia, osteopatia e reabilitação em Ponte de Lima.', 'Brisália': 'Encontrei a Brisália, de instalações e manutenção em Sines, e decidi escrever.', 'Silmadeiras': 'Vi que a Silmadeiras trabalha no comércio de madeiras em Silves há mais de trinta anos.', 'LMS': 'Encontrei a LMS, distribuidora de material elétrico em Sines.', 'Clínica Saleiro': 'Reparei na Clínica Saleiro, de medicina dentária e estética, em Fão.', 'Boca Alegre': 'Vi que a Boca Alegre cuida de sorrisos de adultos e crianças em Esposende.', 'Policlínica Fonte Sã': 'Encontrei a Policlínica Fonte Sã quando procurava clínicas dentárias em Esposende.', 'Restaurante Poda': 'Vi o Restaurante Poda, em Montemor-o-Novo, e a aposta em produtos da época.', 'Clínica Sra. da Conceição': 'Encontrei a Clínica Sra. da Conceição, de fisioterapia e osteopatia em Alcobaça.', 'Clínica Dentária Franco': 'Vi a Clínica Dentária Franco, em Alcobaça, e decidi escrever diretamente.', 'FindYourWish': 'Encontrei a FindYourWish quando procurava imobiliárias em Alcobaça.', 'Golden Club': 'Vi o Golden Club, ginásio em Ílhavo, e quis apresentar-nos.', 'Cliabum': 'Encontrei a Cliabum, clínica de medicina dentária em Ílhavo.', 'OsteoGab': 'Vi o trabalho da OsteoGab em osteopatia e performance em Oliveira de Azeméis.', 'Climevet': 'Encontrei a Climevet, clínica veterinária em Tomar, e decidi escrever.', 'Multiuniversus': 'Vi a Multiuniversus, imobiliária no concelho de Benavente.', 'CCClínica': 'Encontrei a CCClínica quando procurava clínicas em Oliveira de Azeméis.'}
openers=[
"Vi que a {n} trabalha em {a} em {t} e decidi escrever diretamente.",
"Encontrei a {n} quando procurava negócios de {a} em {t}.",
"Escrevo porque a {n} é uma referência local em {a} em {t}.",
"Reparei no trabalho da {n} na área de {a}, em {t}.",
"Contacto a {n} porque trabalhamos com pequenos negócios como o vosso, de {a}, na zona de {t}.",
]
who=["Somos a Urso Vaidoso, sociedade de contabilidade registada na Ordem dos Contabilistas Certificados. Tudo online: documentos por foto, email ou WhatsApp, resposta num dia útil.",
"A Urso Vaidoso é uma sociedade de contabilidade registada na Ordem dos Contabilistas Certificados, 100% online, com documentos por foto, email ou WhatsApp e resposta num dia útil."]
offer_l=["Para sociedades temos o Plano Crescimento, 69 EUR por mês + IVA, com contabilidade organizada, IVA, IRC, IES e salários incluídos, a preço fixo.",
"O Plano Crescimento custa 69 EUR por mês + IVA e inclui contabilidade organizada, IVA, IRC, IES e salários, sempre a preço fixo."]
offer_u=["Para sociedades, o Plano Crescimento custa 69 EUR por mês + IVA, preço fixo, com contabilidade organizada, IVA, IRC, IES e salários; em nome individual, o Plano Essencial custa 29 EUR por mês + IVA.",
"Uma sociedade fica no Plano Crescimento, 69 EUR por mês + IVA a preço fixo, com contabilidade organizada, IVA, IRC, IES e salários; em nome individual, o Plano Essencial custa 29 EUR por mês + IVA."]
setup=["Setup gratuito com compromisso de 12 meses; se já têm contabilista, tratamos nós da mudança.",
"O setup é gratuito com 12 meses de compromisso, e a mudança de contabilista fica do nosso lado."]
cta=["Se fizer sentido, marque 15 minutos aqui: "+CAL+" ou responda a este email.",
"Pode marcar uma chamada de 15 minutos em "+CAL+" ou simplesmente responder."]
greet=["Bom dia,","Olá, bom dia,","Bom dia,"]
sig="Com os melhores cumprimentos,\nUrso Vaidoso\nhello@ursovaidoso.com · ursovaidoso.com\n\nSe não quiser receber mais emails nossos, basta responder com a palavra remover."
out=[]
for i,(n,e,d,t,a,form,sector) in enumerate(L):
    subj=subjects[i%len(subjects)].format(n=n)
    op=OPS[n]
    body="\n\n".join([greet[i%3].format(n=n),op+" "+who[i%2],(offer_l if form=="l" else offer_u)[i%2]+" "+setup[(i//2)%2],cta[i%2],sig])
    words=len(re.findall(r"\S+",body))
    out.append(dict(name=n,email=e,domain=d,town=t,activity=a,sector=sector,pool="B",plan="Crescimento",subject=subj,body=body,words=words,source="Google search + business website"))
bad=[]
for o in out:
    b=o["body"]
    if o["words"]>=140 or "hello@ursovaidoso.com" not in b or CAL not in b or "remover" not in b or re.search("[–—]",b+o["subject"]) or re.search(r"melhor |mais barato|número 1",b.replace("melhores cumprimentos",""),re.I):
        bad.append(o["name"])
print("bad",bad, "words", min(o["words"] for o in out), max(o["words"] for o in out))
json.dump(out,open("emails_2026-11-17.json","w"),ensure_ascii=False,indent=1)
print(out[0]["subject"]);print(out[0]["body"])
