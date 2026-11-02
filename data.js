/* ===== Projektdaten: hier pflegen ===== */
const INSTALL_DATE = new Date('2026-11-24T07:30:00');

const TIMELINE = [
  {s:'done', when:'02.09.2026', what:'Beratung & Auftrag', desc:'Angebot angenommen'},
  {s:'done', when:'18.09.2026', what:'Vor-Ort-Termin', desc:'Aufstellort und Heizraum geprüft'},
  {s:'done', when:'07.10.2026', what:'Heizlast & Planung', desc:'Raumweise Berechnung fertig'},
  {s:'done', when:'31.10.2026', what:'Förderzusage', desc:'KfW-Zusage liegt vor'},
  {s:'now',  when:'bis 20.11.2026', what:'Ihre Vorbereitungen', desc:'Siehe Checkliste'},
  {s:'next', when:'23.11.2026', what:'Materiallieferung', desc:'Abstellort Carport'},
  {s:'next', when:'24.–26.11.2026', what:'Installation', desc:'3 Tage, Heizung kurz aus'},
  {s:'next', when:'26.11.2026', what:'Inbetriebnahme', desc:'Mit Einweisung für Sie'},
];

const ROOMS = [
  // name, Stockwerk, m², °C, benötigte Heizlast W, vorhandene Leistung bei 55 °C (W) oder 'FBH'
  ['Wohnzimmer','EG',38.5,20,3980,4200],
  ['Küche','EG',14.2,20,1260,'FBH'],
  ['Esszimmer','EG',16.8,20,1640,'FBH'],
  ['Arbeitszimmer','EG',12.4,20,1380,1520],
  ['Flur','EG',9.6,20,900,980],
  ['Gäste-WC','EG',3.1,20,330,410],
  ['Schlafzimmer','1. OG',18.6,20,2354,1500],
  ['Kinderzimmer','1. OG',13.4,20,1500,935],
  ['Kinderzimmer 2','1. OG',12.8,20,1420,1480],
  ['Bad','1. OG',10.2,24,1460,'FBH'],
  ['Flur','1. OG',8.3,20,680,760],
  ['Hobbyraum','KG',7.5,20,806,880],
];

const PEOPLE = {
  sb:{name:'Sarah Brandt', role:'Projektleitung · Ihre erste Ansprechpartnerin', init:'SB', color:'#132c52', tel:'+49 561 123456-12', mail:'s.brandt@muster-energie.de', lead:true},
  dk:{name:'Dennis Karpfen', role:'Technische Planung · Fragen zu Heizlast und Auslegung', init:'DK', color:'#4a3b78', tel:'+49 561 123456-22', mail:'d.karpfen@muster-energie.de'},
  my:{name:'Murat Yilmaz', role:'Montageleiter · Installation vor Ort', init:'MY', color:'#2d5a3d', tel:'+49 561 123456-30', mail:'m.yilmaz@muster-energie.de'},
  lh:{name:'Lena Hoffmann', role:'Förderung & Rechnungen', init:'LH', color:'#7a4a12', tel:'+49 561 123456-41', mail:'foerderung@muster-energie.de'},
  ks:{name:'Kundenservice', role:'Mo–Fr 8–18 Uhr', init:'KS', color:'#5b6577', tel:'+49 561 123456-0', mail:'service@muster-energie.de'},
};

const UPDATES = [
  {d:'02.11.2026', by:'Sarah Brandt', t:'Ihre Planung ist fertig', x:'Heizlastberechnung und Auslegung sind jetzt hier für Sie hinterlegt.'},
  {d:'31.10.2026', by:'Lena Hoffmann', t:'Förderzusage der KfW ist da', x:'Zugesagt sind 50 % der förderfähigen Kosten. Die Auszahlung beantragen wir nach der Inbetriebnahme mit Ihnen.'},
  {d:'24.10.2026', by:'Sarah Brandt', t:'Installationstermin bestätigt', x:'24. bis 26.11.2026, Beginn jeweils 7:30 Uhr.'},
];

const CHECKLIST = [
  {id:'tank', t:'Entsorgung der Öltanks klären', due:'09.11.2026', who:'Sie entscheiden',
   d:'Den alten Ölkessel samt Leitungen bauen wir bei der Installation aus und entsorgen ihn, das ist im Preis enthalten. Die Öltanks nicht: Sie müssen vorher von einem Fachbetrieb abgepumpt, gereinigt und abtransportiert werden. Bitte wählen Sie:',
   choice:[
     {v:'wir', b:'Das soll Muster Energie organisieren', s:'Unser Partnerbetrieb kommt vor dem 20.11. Festpreis 790 € für bis zu 3 Kunststofftanks inkl. Restöl-Absaugung, Abrechnung über uns.'},
     {v:'selbst', b:'Wir kümmern uns selbst', s:'Bitte beauftragen Sie einen zertifizierten Fachbetrieb und schreiben Sie uns den Termin. Tanks müssen bis 20.11. raus sein.'}
   ]},
  {id:'hk', t:'Über den Heizkörpertausch entscheiden', due:'13.11.2026', who:'Sie', d:'Optional für Schlafzimmer und Kinderzimmer. Nur bei Bestellung bis 13.11. direkt am Installationstag möglich.', link:['#heizkoerper','Zum Heizkörpertausch']},
  {id:'graben', t:'Graben zur Außeneinheit ausheben', due:'20.11.2026', who:'Sie oder ein Gartenbauer', d:'Länge ca. 2 m, Tiefe 60–70 cm, Breite 20 cm. Verlauf siehe Skizze in Kapitel 1.', link:['#termin','Zur Skizze']},
  {id:'baum', t:'Baum und Pflanzen am Aufstellort entfernen', due:'20.11.2026', who:'Sie', d:'Fläche von ca. 1,50 × 1,00 m frei machen, damit wir das Fundament setzen können.'},
  {id:'oeltank', t:'Öltanks sind abgebaut', due:'20.11.2026', who:'Partnerbetrieb oder Sie', d:'Je nach Ihrer Wahl oben. Der Heizungsraum muss für die neue Anlage frei sein.'},
  {id:'wasch', t:'Waschmaschine und Trockner aus dem Heizraum räumen', due:'23.11.2026', who:'Sie', d:'Vorübergehend reicht ein anderer Kellerraum. Wo sie danach wieder stehen können, zeigt Ihnen Murat Yilmaz am ersten Tag.'},
  {id:'gang', t:'Gang zum Heizungsraum freiräumen', due:'23.11.2026', who:'Sie', d:'Mindestens 1 m breit, damit wir die Altanlage raus- und die neue Anlage reinbringen können.'},
  {id:'carport', t:'Carport für die Lieferung frei halten', due:'23.11.2026', who:'Sie', d:'Die Spedition stellt dort 2 Paletten ab (ca. 2 × 1,2 m). Sie müssen nicht zu Hause sein.'},
];

const QA_SEED = [
  {id:'s1', d:'29.10.2026', q:'Müssen wir an den Installationstagen zu Hause sein?', a:{p:'my', d:'29.10.2026', x:'Am ersten Tag um 7:30 Uhr bitte ja, damit wir kurz alles gemeinsam ansehen. Danach reicht es, wenn wir in den Keller kommen. Am dritten Tag nachmittags machen wir die Einweisung, dafür planen Sie bitte eine Stunde ein.'}},
  {id:'s2', d:'27.10.2026', q:'Wie laut ist die Außeneinheit nachts? Das Schlafzimmer unserer Nachbarn liegt auf dieser Seite.', a:{p:'sb', d:'27.10.2026', x:'Im Nachtmodus sind es etwa 35 dB(A) in 3 m Abstand, ungefähr so laut wie Flüstern. Den Abstand zum Nachbargrundstück haben wir geprüft, die Grenzwerte der TA Lärm werden eingehalten.'}},
  {id:'s3', d:'21.10.2026', q:'Bleibt die Fußbodenheizung im Bad und in der Küche erhalten?', a:{p:'sb', d:'22.10.2026', x:'Ja. Die Fußbodenheizung bleibt und läuft mit der Wärmepumpe sogar besonders effizient, weil sie mit niedriger Temperatur auskommt.'}},
];

/* ===== Hilfsfunktionen ===== */
const $ = s => document.querySelector(s);
const fmt = (n, d=0) => n.toLocaleString('de-DE',{minimumFractionDigits:d, maximumFractionDigits:d});
const store = {
  get(k, fb){ try{ const v = localStorage.getItem('wpaeb_'+k); return v ? JSON.parse(v) : fb; }catch(e){ return fb; } },
  set(k, v){ try{ localStorage.setItem('wpaeb_'+k, JSON.stringify(v)); }catch(e){} }
};
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove('show'),3200); }

const today = () => new Date().toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'});
const nowTime = () => new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit'});

/* ===== Demo-Speicher (nur dieser Browser) =====
   questions: eigene Kundenfragen  [{id,d,q}]
   answers:   Antworten des Teams  {id:{p,d,x}}
   typing:    {id,p} während jemand antwortet
   extraUpdates: vom Team gepostete Neuigkeiten [{d,by,t,x}]
   demoAuto:  automatische Antwort im Demo-Modus (true/false) */
const demo = {
  questions(){ return store.get('questions', []); },
  answers(){ return store.get('answers', {}); },
  answer(id, p, x){ const a=demo.answers(); a[id]={p, d:today(), x}; store.set('answers', a); store.set('typing', null); },
  allQuestions(){
    const ans=demo.answers();
    return [...demo.questions().slice().reverse().map(q=>({...q, a:ans[q.id]||null})), ...QA_SEED];
  },
  updates(){ return [...store.get('extraUpdates', []).slice().reverse(), ...UPDATES]; },
  auto(){ return store.get('demoAuto', true) !== false; },
  reset(){ try{ Object.keys(localStorage).filter(k=>k.startsWith('wpaeb_')).forEach(k=>localStorage.removeItem(k)); }catch(e){} }
};

/* Vorformulierte Antworten für den Demo-Modus */
const AUTO_ANSWERS = [
  [/heizk(ö|oe)rper/i, 'sb', 'Sehr gern! Ich habe den Tausch für Schlafzimmer und Kinderzimmer vorgemerkt. Die Auftragsbestätigung über 2 × 1.500 € bekommen Sie heute per E-Mail, getauscht wird direkt am Installationstag.'],
  [/laut|lärm|geräusch|db/i, 'dk', 'Im Nachtmodus liegt die Außeneinheit bei etwa 35 dB(A) in 3 m Abstand. Das ist ungefähr so leise wie Flüstern. Die Grenzwerte zum Nachbargrundstück haben wir bei der Planung geprüft.'],
  [/förder|foerder|kfw|zuschuss|bafa/i, 'lh', 'Ihre KfW-Zusage über 50 % liegt vor. Nach der Inbetriebnahme schicken wir Ihnen die Bestätigung für den Verwendungsnachweis, die Auszahlung kommt dann meist innerhalb von 4 bis 8 Wochen.'],
  [/(ö|oe)l|tank/i, 'sb', 'Wenn Sie möchten, organisieren wir das komplett über unseren Partnerbetrieb: Festpreis 790 €, Termin vor dem 20.11. Wählen Sie dazu einfach in Ihrer Checkliste „Das soll Muster Energie organisieren“.'],
  [/kosten|preis|strom|tarif|verbrauch|kwh/i, 'dk', 'Gute Frage! Unsere Schätzung geht von 21 °C und 0,28 €/kWh aus. Im Rechner bei Kapitel 3 können Sie Ihre eigenen Werte einstellen. Ein Wärmepumpentarif lohnt sich bei Ihnen auf jeden Fall, ich schicke Ihnen gern zwei Angebote.'],
  [/graben|garten|erde|pflanz|baum|fundament/i, 'my', 'Den Graben bitte ca. 2 m lang, 60–70 cm tief und 20 cm breit, so wie in der Skizze. Wenn Sie unsicher sind, schicken Sie mir gern ein Foto, ich schaue drüber.'],
  [/termin|wann|uhr|zeit|datum|zu hause/i, 'my', 'Wir starten am 24.11. um 7:30 Uhr. Am ersten Morgen sollte kurz jemand da sein, danach brauchen wir nur Zugang zum Keller. Ich rufe Sie am Freitag davor noch einmal an.'],
];
function autoAnswerFor(q){
  for (const [re,p,x] of AUTO_ANSWERS) if (re.test(q)) return {p,x};
  return {p:'sb', x:'Danke für Ihre Frage! Ich kläre das kurz mit dem Team und melde mich heute noch bei Ihnen, auf Wunsch auch telefonisch.'};
}
