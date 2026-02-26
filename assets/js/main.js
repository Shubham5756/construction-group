document.addEventListener('DOMContentLoaded',function(){
  // header sticky class
  const header=document.getElementById('site-header');
  const navToggle=document.getElementById('nav-toggle');
  const nav=document.getElementById('main-nav');
  const yearSpan=document.getElementById('year');
  yearSpan.textContent=new Date().getFullYear();

  // --- Internationalization (English / Marathi) ---
  const translations = {
    en: {
      'nav.home':'Home','nav.about':'About','nav.projects':'Projects','nav.pricing':'Pricing','nav.videos':'Videos','nav.contact':'Contact','nav.cta':'Get Quote',
      'hero.title':'Building Exceptional Spaces. Delivering Lasting Value.','hero.lead':'Premium construction and end-to-end design-build services for residential and commercial projects.','hero.cta1':'Request A Quote','hero.cta2':'View Projects',
      'about.title':'About Our Company','about.text':'We are a full-service construction and design company with over 15 years of experience delivering high-quality homes and commercial spaces. Our focus is workmanship, transparency, and timely delivery.',
      'projects.riverside':'Riverside Residence','projects.urban':'Urban Apartments','projects.lakeview':'Lakeview Villas','projects.completed':'Completed','projects.ongoing':'Ongoing',
      'pricing.title':'Pricing Plans','pricing.lead':'Select a plan or contact us for a custom quote tailored to your needs.','pricing.1bhk.title':'1 BHK','pricing.1bhk.f1':'Consultation','pricing.1bhk.f2':'Basic finishes','pricing.1bhk.f3':'3D layout',
      'pricing.2bhk.title':'2 BHK','pricing.2bhk.f1':'Project management','pricing.2bhk.f2':'Quality finishes','pricing.2bhk.f3':'2 revisions',
      'pricing.3bhk.title':'3 BHK','pricing.3bhk.f1':'Full design & build','pricing.3bhk.f2':'High-end finishes','pricing.3bhk.f3':'Warranty & support','pricing.choose':'Choose',
      'video.title':'Video Gallery','video.lead':'Project walkthroughs and client testimonials.','video.play':'Play video',
      'contact.title':'Contact Us','contact.lead':'Tell us about your project — we\'ll respond within 24 hours.','contact.name':'Full name','contact.email':'Email','contact.phone':'Phone','contact.message':'Message','contact.send':'Send Message',
      'contact.namePlaceholder':'Your full name','contact.emailPlaceholder':'you@example.com','contact.phonePlaceholder':'+1 555 123 4567','contact.messagePlaceholder':'Tell us about your project...',
      'form.sending':'Sending…','form.success':'Thank you — your message has been sent.','form.error.name':'Please provide your name.','form.error.email':'Enter a valid email.','form.error.message':'Message must be at least 10 characters.'
    },
    mr: {
      'nav.home':'मुख्य पृष्ठ','nav.about':'आमच्या विषयी','nav.projects':'प्रकल्प','nav.pricing':'किंमत','nav.videos':'व्हिडिओ','nav.contact':'संपर्क','nav.cta':'कोट मिळवा',
      'hero.title':'उत्कृष्ट जागा बांधणे. शाश्वत मूल्य प्रदान करणे.','hero.lead':'निवासी आणि व्यावसायिक प्रकल्पांसाठी प्रीमियम कन्स्ट्रक्शन आणि डिझाइन-बिल्ड सेवा.','hero.cta1':'कोटेसाठी विनंती','hero.cta2':'प्रकल्प पहा',
      'about.title':'आमच्या कंपनीबद्दल','about.text':'आम्ही एक पूर्ण-सेवा कन्स्ट्रक्शन आणि डिझाइन कंपनी आहोत ज्यांना 15 वर्षांहून अधिक काळातील अनुभव आहे. आमचे लक्ष गुणवत्ता, पारदर्शकता आणि वेळेवर वितरण आहे.',
      'projects.riverside':'रिव्हरसाइड राहणी','projects.urban':'अर्बन अपार्टमेंट','projects.lakeview':'लेकव्ह्यू व्हिला','projects.completed':'पूर्ण झाले','projects.ongoing':'चालू आहे',
      'pricing.title':'किंमत योजना','pricing.lead':'आपल्या गरजेनुसार सानुकूल कोटासाठी योजना निवडा किंवा संपर्क करा.','pricing.1bhk.title':'1 BHK','pricing.1bhk.f1':'सल्लामसलत','pricing.1bhk.f2':'मूळ फिनिश','pricing.1bhk.f3':'3D लेआउट',
      'pricing.2bhk.title':'2 BHK','pricing.2bhk.f1':'प्रकल्प व्यवस्थापन','pricing.2bhk.f2':'उच्च गुणवत्ता फिनिश','pricing.2bhk.f3':'2 सुधारणा',
      'pricing.3bhk.title':'3 BHK','pricing.3bhk.f1':'पूर्ण डिझाइन व बांधकाम','pricing.3bhk.f2':'उच्च दर्जाचे फिनिश','pricing.3bhk.f3':'वॉरंटी व समर्थन','pricing.choose':'निवडा',
      'video.title':'व्हिडिओ गॅलरी','video.lead':'प्रकल्प फेरफटका व ग्राहकांच्या प्रतिक्रिया.','video.play':'प्ले',
      'contact.title':'संपर्क करा','contact.lead':'आपल्या प्रकल्पाबद्दल सांगा — आम्ही 24 तासांत उत्तर देऊ.','contact.name':'पूर्ण नाव','contact.email':'ईमेल','contact.phone':'फोन','contact.message':'संदेश','contact.send':'संदेश पाठवा',
      'contact.namePlaceholder':'आपले पूर्ण नाव','contact.emailPlaceholder':'you@example.com','contact.phonePlaceholder':'+91 98765 43210','contact.messagePlaceholder':'आपल्या प्रकल्पाबद्दल सांगा...',
      'form.sending':'पाठवत आहे…','form.success':'धन्यवाद — तुमचा संदेश पाठवला गेला आहे.','form.error.name':'कृपया आपले नाव द्या.','form.error.email':'वैध ईमेल प्रविष्ट करा.','form.error.message':'संदेश किमान 10 अक्षरे असावा.'
    }
  };

  const langToggle=document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('site-lang') || 'en';

  function applyTranslations(lang){
    document.documentElement.lang = (lang==='mr')? 'mr' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n'); if(!key) return;
      const txt=(translations[lang] && translations[lang][key])? translations[lang][key] : translations['en'][key] || '';
      el.textContent = txt;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key=el.getAttribute('data-i18n-placeholder'); if(!key) return;
      const txt=(translations[lang] && translations[lang][key])? translations[lang][key] : translations['en'][key] || '';
      el.setAttribute('placeholder',txt);
    });
    // update form status messages used by validation
    currentLang = lang;
    if(langToggle) langToggle.textContent = (lang==='mr')? 'EN' : 'मराठी';
    try{ localStorage.setItem('site-lang',lang); }catch(e){/* ignore storage errors */}
  }

  applyTranslations(currentLang);
  if(langToggle) langToggle.addEventListener('click',()=> applyTranslations(currentLang === 'en' ? 'mr' : 'en'));
  let lastScroll = 0;
  window.addEventListener('scroll',function(){
    const y=window.scrollY;
    if(y>60) header.classList.add('header--scrolled'); else header.classList.remove('header--scrolled');
    lastScroll=y;
  },{passive:true});

  // mobile nav toggle
  navToggle.addEventListener('click',function(){
    const open=nav.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded',open?'true':'false');
  });

  // close nav when a link is clicked (mobile)
  document.querySelectorAll('#main-nav a[href^="#"]').forEach(a=>{
    a.addEventListener('click',()=>{
      if(nav.classList.contains('nav-open')){ nav.classList.remove('nav-open'); navToggle.setAttribute('aria-expanded','false'); }
    });
  });

  // close nav when clicking outside
  document.addEventListener('click',function(e){
    if(!nav.contains(e.target) && e.target !== navToggle && nav.classList.contains('nav-open')){
      nav.classList.remove('nav-open'); navToggle.setAttribute('aria-expanded','false');
    }
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target=document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

  // project lightbox
  const modal=document.getElementById('modal');
  const modalBody=document.getElementById('modal-body');
  const modalClose=document.getElementById('modal-close');

  document.querySelectorAll('.project').forEach(p=>{
    p.addEventListener('click',()=>{
      const src=p.getAttribute('data-full');
      openModal(`<img src="${src}" alt="Project image" style="width:100%;height:auto;">`);
    });
    p.addEventListener('keypress',e=>{ if(e.key==='Enter') p.click(); });
  });

  // video cards
  document.querySelectorAll('.video-card').forEach(vc=>{
    vc.addEventListener('click',()=>{
      // prefer data-video attribute; fall back to any inline iframe src if present
      const dataVideo = vc.getAttribute('data-video');
      const inlineIframe = vc.querySelector('iframe');
      const video = dataVideo || (inlineIframe? inlineIframe.src : '');
      if(!video) return; // nothing to play
      // ensure we only append autoplay params once
      const sep = video.indexOf('?') === -1 ? '?' : '&';
      // For YouTube embeds, include the origin param to avoid player configuration errors (e.g. Error 153)
      const isYouTube = /youtube\.com|youtube-nocookie\.com/.test(video);
      const originParam = isYouTube ? `&origin=${encodeURIComponent(location.origin)}` : '';
      const allowAttrs = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      // derive a direct YouTube watch URL for fallback
      let watchUrl = video;
      if(isYouTube){
        const m = video.match(/(?:embed\/|watch\?v=)([A-Za-z0-9_-]{6,})/);
        if(m) watchUrl = `https://www.youtube.com/watch?v=${m[1]}`;
      }
      const modalHtml = `
        <div style="position:relative;padding-top:56.25%">
          <iframe src="${video}${sep}rel=0&showinfo=0&autoplay=1${originParam}" frameborder="0" allow="${allowAttrs}" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%"></iframe>
        </div>
        <div class="video-fallback" style="text-align:center;padding:12px;background:#fff">
          <small>If the video doesn't play, <a href="${watchUrl}" target="_blank" rel="noopener">watch on YouTube</a>.</small>
        </div>
      `;
      openModal(modalHtml);
    });
    // make video cards keyboard accessible (Enter key)
    vc.addEventListener('keypress',e=>{ if(e.key==='Enter' || e.keyCode===13) vc.click(); });
  });

  function openModal(html){
    modalBody.innerHTML=html; modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
  }
  function closeModal(){ modalBody.innerHTML=''; modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
  modalClose.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{ if(e.target===modal) closeModal(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeModal(); });

  // Contact form validation + fake submission (Formspree recommended)
  const form=document.getElementById('contact-form');
  const status=document.getElementById('form-status');

  function showError(field,msg){ const el=document.querySelector(`.error[data-for="${field}"]`); if(el) el.textContent=msg; }
  function clearErrors(){ document.querySelectorAll('.error').forEach(e=>e.textContent=''); }

  form.addEventListener('submit',function(e){
    e.preventDefault(); clearErrors(); status.textContent='';
    const name=form.name.value.trim(); const email=form.email.value.trim(); const phone=form.phone.value.trim(); const message=form.message.value.trim();
    let ok=true;
    if(name.length<2){ showError('name','Please provide your name.'); ok=false; }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ showError('email','Enter a valid email.'); ok=false; }
    if(message.length<10){ showError('message','Message must be at least 10 characters.'); ok=false; }
    if(!ok){ return; }

    // Fake submit: display success and reset. For production, POST to Formspree or similar.
    status.textContent='Sending…';
    setTimeout(()=>{
      status.textContent='Thank you — your message has been sent.'; form.reset();
    },900);
  });
});
