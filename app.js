// Wait for DOM before initializing — needed for standalone files
document.addEventListener('DOMContentLoaded', function() {

  // ---------- i18n ----------
  var I18N = {
    en: {
      badge: 'Peptide Reconstitution Tool',
      title: 'Peptide Dose Calculator',
      subtitle: 'Calculate the exact draw volume for your reconstituted peptide.',
      peptide: 'Peptide',
      optional: '(optional)',
      selectPeptide: '— Select peptide —',
      step1: 'Total Vial Amount',
      step2: 'Bacteriostatic Water',
      step2spray: 'NaCl (Saline)',
      step3: 'Desired Dose',
      modeSyringe: 'Syringe',
      modeSpray: 'Nose Spray',
      step4: 'Syringe Type',
      step4spray: 'Spray Volume',
      step5: 'Syringe Volume',
      sprayPerPump: 'ml per pump',
      enterMlPerPump: 'ml per pump',
      enterMlCap: 'ml (e.g. 0.3, 0.5, 1.0)',
      sprayResult: '{n} sprays',
      sprayOnDevice: '{n} sprays of {ml} ml each',
      warnSprayOverdose: 'One spray ({s} ml) exceeds the required dose volume ({v} ml). Use a spray device with a smaller volume per pump.',
      units: 'units',
      enterMg: 'Enter mg',
      enterIU: 'Enter IU',
      enterMl: 'Enter ml',
      enterDose: 'Enter dose',
      enterUnits: 'Enter units',
      enterUnitsPerMl: 'Units/ml (e.g. 40, 100)',
      empty: 'Select all values to calculate your dose',
      legendRecommended: 'Recommended for selected peptide',
      drawTo: 'Draw to',
      onSyringe: 'on a {t} · {c} ml ({u}u) syringe',
      concentration: 'Concentration',
      dosesPerVial: 'Doses per vial',
      perDose: '{n} {u} per dose',
      concentrationIU: '{c} IU/ml',
      concentrationIUmg: '≈ {m} mg/ml (1 IU = 0.333 mg)',
      copyResult: 'Copy result',
      reset: 'Reset',
      copied: 'Copied to clipboard',
      errorOverflow: 'Dose exceeds the {c} ml ({n}u) syringe capacity. Use a larger syringe or split into multiple injections.',
      warnTooSmall: 'Draw volume is under 1 unit — measurement accuracy may be poor. Consider increasing your reconstitution volume.',
      disclaimerTitle: 'Disclaimer:',
      disclaimer: "This calculator is intended for informational and educational purposes only. It does not constitute medical advice or a prescription. Always follow your healthcare provider's instructions and consult a qualified professional before administering any peptide or medication.",
      defaultsApplied: 'Common defaults applied for {p}. Adjust as needed.',
      copyHeading: '{p} dose calculation:',
      copyVial: 'Vial: {v} mg in {w} ml BAC water',
      copyConc: 'Concentration: {c} mg/ml',
      copyDose: 'Dose: {d} {u} ({m} mg)',
      copyDraw: 'Draw: {u} units ({ml} ml) on {s}u {t} syringe',
      copyDoses: 'Doses per vial: {n}',
      peptideName: 'Peptide',
      other: 'Other'
    },
    de: {
      badge: 'Peptid-Rekonstitutions-Tool',
      title: 'Peptid-Dosis-Rechner',
      subtitle: 'Berechne das exakte Aufziehvolumen für dein rekonstituiertes Peptid.',
      peptide: 'Peptid',
      optional: '(optional)',
      selectPeptide: '— Peptid auswählen —',
      step1: 'Gesamte Vialmenge',
      step2: 'Bakteriostatisches Wasser',
      step2spray: 'NaCl (Kochsalzlösung)',
      step3: 'Gewünschte Dosis',
      modeSyringe: 'Spritze',
      modeSpray: 'Nasenspray',
      step4: 'Spritzentyp',
      step4spray: 'Sprühvolumen',
      step5: 'Spritzenvolumen',
      sprayPerPump: 'ml pro Sprühstoß',
      enterMlPerPump: 'ml pro Sprühstoß',
      enterMlCap: 'ml (z.B. 0,3, 0,5, 1,0)',
      sprayResult: '{n} Sprühstöße',
      sprayOnDevice: '{n} Sprühstöße à {ml} ml',
      warnSprayOverdose: 'Ein Sprühstoß ({s} ml) übersteigt das benötigte Dosisvolumen ({v} ml). Verwende ein Spray mit kleinerem Volumen pro Sprühstoß.',
      units: 'Einheiten',
      enterMg: 'mg eingeben',
      enterIU: 'IE eingeben',
      enterMl: 'ml eingeben',
      enterDose: 'Dosis eingeben',
      enterUnits: 'Einheiten eingeben',
      enterUnitsPerMl: 'Einheiten/ml (z.B. 40, 100)',
      empty: 'Wähle alle Werte, um deine Dosis zu berechnen',
      legendRecommended: 'Empfohlen für ausgewähltes Peptid',
      drawTo: 'Aufziehen auf',
      onSyringe: 'auf einer {t} · {c} ml ({u}u) Spritze',
      concentration: 'Konzentration',
      dosesPerVial: 'Dosen pro Vial',
      perDose: '{n} {u} pro Dosis',
      concentrationIU: '{c} IE/ml',
      concentrationIUmg: '≈ {m} mg/ml (1 IE = 0,333 mg)',
      copyResult: 'Ergebnis kopieren',
      reset: 'Zurücksetzen',
      copied: 'In Zwischenablage kopiert',
      errorOverflow: 'Dosis überschreitet die {c} ml ({n}u) Spritzenkapazität. Verwende eine größere Spritze oder teile auf mehrere Injektionen auf.',
      warnTooSmall: 'Aufziehvolumen liegt unter 1 Einheit — Messgenauigkeit kann schlecht sein. Erhöhe ggf. das Rekonstitutionsvolumen.',
      disclaimerTitle: 'Haftungsausschluss:',
      disclaimer: 'Dieser Rechner dient ausschließlich zu Informations- und Bildungszwecken. Er stellt keine medizinische Beratung oder Verschreibung dar. Befolge stets die Anweisungen deines medizinischen Fachpersonals und konsultiere eine qualifizierte Fachkraft, bevor du ein Peptid oder Medikament verabreichst.',
      defaultsApplied: 'Übliche Standardwerte für {p} angewendet. Bei Bedarf anpassen.',
      copyHeading: '{p} Dosisberechnung:',
      copyVial: 'Vial: {v} mg in {w} ml BAC-Wasser',
      copyConc: 'Konzentration: {c} mg/ml',
      copyDose: 'Dosis: {d} {u} ({m} mg)',
      copyDraw: 'Aufziehen: {u} Einheiten ({ml} ml) auf {s}u {t} Spritze',
      copyDoses: 'Dosen pro Vial: {n}',
      peptideName: 'Peptid',
      other: 'Andere'
    }
  };

  var lang = 'de';
  function t(key, vars) {
    vars = vars || {};
    var s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    Object.keys(vars).forEach(function(k) {
      s = s.replace('{' + k + '}', vars[k]);
    });
    return s;
  }

  function applyTranslations() {
    document.documentElement.lang = lang;
    var i18nEls = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < i18nEls.length; i++) {
      var key = i18nEls[i].getAttribute('data-i18n');
      i18nEls[i].textContent = t(key);
    }
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < phEls.length; j++) {
      var phKey = phEls[j].getAttribute('data-i18n-placeholder');
      phEls[j].placeholder = t(phKey);
    }
  }

  // ---------- Data ----------
  var VIAL_PRESETS = [5, 10, 15, 20, 30, 50];
  var VIAL_PRESETS_IU = [4, 8, 10, 12, 16, 24, 36];
  var WATER_PRESETS = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0];
  var DOSE_PRESETS_MCG = [100, 200, 250, 500, 750, 1000];
  var DOSE_PRESETS_MG = [0.5, 1, 2, 2.5, 5];
  var DOSE_PRESETS_IU = [0.5, 1, 1.5, 2, 2.5, 3, 4];
  var SYRINGE_PRESETS = [40, 100];
  var CAPACITY_PRESETS = [0.3, 0.5, 1.0];
  var SPRAY_PRESETS = [0.1, 0.12, 0.14];

  // ---------- State ----------
  var STORAGE_KEY = 'peptide-calc-v6';
  var state = {
    peptide: '',
    vial: null,
    water: null,
    dose: null,
    doseUnit: 'mg',
    syringe: null,
    syringeType: 100,
    capacity: null,
    mode: 'syringe',
    sprayVolume: null,
    lang: 'de',
    autoApplied: false
  };

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        Object.keys(saved).forEach(function(k) { state[k] = saved[k]; });
      }
    } catch (e) {}
    lang = state.lang || 'de';
  }
  function saveState() {
    state.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  function getRecommended() {
    return state.peptide && PEPTIDE_DEFAULTS[state.peptide] ? PEPTIDE_DEFAULTS[state.peptide] : null;
  }
  function isRecommendedVial(v) { var r = getRecommended(); return r && r.vial === v; }
  function isRecommendedWater(v) { var r = getRecommended(); return r && r.water === v; }
  function isRecommendedDose(v) {
    var r = getRecommended();
    if (!r) return false;
    if (r.doseUnit === state.doseUnit) return r.dose === v;
    if (r.doseUnit === 'iu' || state.doseUnit === 'iu') return false;
    var converted = r.doseUnit === 'mg' && state.doseUnit === 'mcg' ? r.dose * 1000
                  : r.doseUnit === 'mcg' && state.doseUnit === 'mg' ? r.dose / 1000
                  : r.dose;
    return Math.abs(converted - v) < 1e-9;
  }
  function isRecommendedSyringe(v) { var r = getRecommended(); return r && r.syringe === v; }

  // ---------- Pill builders ----------
  function buildPills(containerId, presets, formatter, currentVal, onClick, isRecommended, includeOther) {
    if (includeOther === undefined) includeOther = true;
    var c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = '';
    presets.forEach(function(v) {
      var b = document.createElement('button');
      var recommended = isRecommended ? isRecommended(v) : false;
      var cls = 'pill';
      if (currentVal === v) cls += ' active';
      if (recommended) cls += ' recommended';
      b.className = cls;
      b.type = 'button';
      b.textContent = formatter(v);
      if (recommended) b.title = lang === 'de' ? 'Empfohlen' : 'Recommended';
      b.addEventListener('click', function() { onClick(v); });
      c.appendChild(b);
    });
    if (includeOther) {
      var isCustom = currentVal !== null && currentVal !== undefined && presets.indexOf(currentVal) === -1;
      var ob = document.createElement('button');
      ob.className = 'pill' + (isCustom ? ' active' : '');
      ob.type = 'button';
      ob.textContent = t('other');
      ob.addEventListener('click', function() { onClick('custom'); });
      c.appendChild(ob);
    }
  }

  function renderVialPills() {
    var isIU = state.doseUnit === 'iu';
    var presets = isIU ? VIAL_PRESETS_IU : VIAL_PRESETS;
    var unit = isIU ? 'IU' : 'mg';
    buildPills('vial-pills', presets, function(v) { return v + unit; }, state.vial, function(v) {
      if (v === 'custom') {
        document.getElementById('vial-custom').style.display = 'flex';
        document.getElementById('vial-input').focus();
      } else {
        state.vial = v;
        document.getElementById('vial-custom').style.display = 'none';
        document.getElementById('vial-input').value = '';
        update();
      }
    }, isRecommendedVial);
    var vialSuffix = document.getElementById('vial-unit-suffix');
    if (vialSuffix) vialSuffix.textContent = unit;
    var vialInput = document.getElementById('vial-input');
    if (vialInput) vialInput.placeholder = isIU ? t('enterIU') : t('enterMg');
    // Update vial unit toggle active state
    var vialUnitBtns = document.querySelectorAll('[data-vial-unit]');
    for (var vi = 0; vi < vialUnitBtns.length; vi++) {
      var btnUnit = vialUnitBtns[vi].getAttribute('data-vial-unit');
      var isActive = isIU ? btnUnit === 'iu' : btnUnit === 'mg';
      if (isActive) {
        vialUnitBtns[vi].classList.add('active');
      } else {
        vialUnitBtns[vi].classList.remove('active');
      }
    }
  }

  function renderWaterPills() {
    buildPills('water-pills', WATER_PRESETS, function(v) { return v.toFixed(1) + 'ml'; }, state.water, function(v) {
      if (v === 'custom') {
        document.getElementById('water-custom').style.display = 'flex';
        document.getElementById('water-input').focus();
      } else {
        state.water = v;
        document.getElementById('water-custom').style.display = 'none';
        document.getElementById('water-input').value = '';
        update();
      }
    }, isRecommendedWater);
  }

  function renderDosePills() {
    var presets = state.doseUnit === 'mcg' ? DOSE_PRESETS_MCG : state.doseUnit === 'iu' ? DOSE_PRESETS_IU : DOSE_PRESETS_MG;
    var unit = state.doseUnit === 'iu' ? 'IU' : state.doseUnit;
    buildPills('dose-pills', presets, function(v) { return v + unit; }, state.dose, function(v) {
      if (v === 'custom') {
        document.getElementById('dose-custom').style.display = 'flex';
        document.getElementById('dose-input').focus();
      } else {
        state.dose = v;
        document.getElementById('dose-custom').style.display = 'none';
        document.getElementById('dose-input').value = '';
        update();
      }
    }, isRecommendedDose);
    document.getElementById('dose-unit-suffix').textContent = unit;
    var unitBtns = document.querySelectorAll('[data-unit]');
    for (var i = 0; i < unitBtns.length; i++) {
      if (unitBtns[i].getAttribute('data-unit') === state.doseUnit) {
        unitBtns[i].classList.add('active');
      } else {
        unitBtns[i].classList.remove('active');
      }
    }
  }

  function renderSyringePills() {
    buildPills('syringe-pills', SYRINGE_PRESETS, function(v) { return 'U' + v; }, state.syringe, function(v) {
      if (v === 'custom') {
        document.getElementById('syringe-custom').style.display = 'flex';
        document.getElementById('syringe-input').focus();
      } else {
        state.syringe = v;
        state.syringeType = v;
        document.getElementById('syringe-custom').style.display = 'none';
        document.getElementById('syringe-input').value = '';
        update();
      }
    }, isRecommendedSyringe, true);
  }

  function renderSprayPills() {
    buildPills('spray-pills', SPRAY_PRESETS, function(v) { return v + ' ml'; }, state.sprayVolume, function(v) {
      if (v === 'custom') {
        document.getElementById('spray-custom').style.display = 'flex';
        document.getElementById('spray-input').focus();
      } else {
        state.sprayVolume = v;
        document.getElementById('spray-custom').style.display = 'none';
        document.getElementById('spray-input').value = '';
        update();
      }
    }, null, true);
  }

  function renderCapacityPills() {
    var st = state.syringeType || 100;
    buildPills('capacity-pills', CAPACITY_PRESETS, function(v) {
      return v.toFixed(1) + ' ml · ' + Math.round(v * st) + 'u';
    }, state.capacity, function(v) {
      if (v === 'custom') {
        document.getElementById('capacity-custom').style.display = 'flex';
        document.getElementById('capacity-input').focus();
      } else {
        state.capacity = v;
        document.getElementById('capacity-custom').style.display = 'none';
        document.getElementById('capacity-input').value = '';
        update();
      }
    }, null, true);
  }

  function renderStep4() {
    var isSyringe = state.mode === 'syringe';
    document.getElementById('step4-syringe').style.display = isSyringe ? 'block' : 'none';
    document.getElementById('step4-spray').style.display = isSyringe ? 'none' : 'block';
    document.getElementById('step4-icon-syringe').style.display = isSyringe ? '' : 'none';
    document.getElementById('step4-icon-spray').style.display = isSyringe ? 'none' : '';
    // Capacity step only applies to syringe mode
    document.getElementById('step-5').style.display = isSyringe ? '' : 'none';
    if (isSyringe) {
      renderSyringePills();
      renderCapacityPills();
    } else {
      renderSprayPills();
    }
    // Update mode toggle
    var modeBtns = document.querySelectorAll('[data-mode]');
    for (var m = 0; m < modeBtns.length; m++) {
      if (modeBtns[m].getAttribute('data-mode') === state.mode) {
        modeBtns[m].classList.add('active');
      } else {
        modeBtns[m].classList.remove('active');
      }
    }
  }

  function renderPeptideSelect() {
    var sel = document.getElementById('peptide-select');
    sel.innerHTML = '';
    var emptyOpt = document.createElement('option');
    emptyOpt.value = '';
    emptyOpt.textContent = t('selectPeptide');
    sel.appendChild(emptyOpt);
    var keys = Object.keys(PEPTIDE_DEFAULTS).sort();
    keys.forEach(function(p) {
      var opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      sel.appendChild(opt);
    });
    sel.value = state.peptide;
  }

  function renderPeptideInfo() {
    var info = document.getElementById('peptide-info');
    var txt = document.getElementById('peptide-info-text');
    if (state.peptide && state.autoApplied) {
      info.style.display = 'flex';
      txt.textContent = t('defaultsApplied', { p: state.peptide });
    } else {
      info.style.display = 'none';
    }
  }

  // ---------- Calculation ----------
  function calculate() {
    if (state.vial == null || state.water == null || state.dose == null) return null;
    if (state.vial <= 0 || state.water <= 0 || state.dose <= 0) return null;

    if (state.mode === 'syringe') {
      if (state.syringe == null) return null;
      if (state.capacity == null || state.capacity <= 0) return null;
    } else {
      if (state.sprayVolume == null || state.sprayVolume <= 0) return null;
    }

    var doseMg = state.doseUnit === 'mcg' ? state.dose / 1000 : state.dose;
    var concentration = state.vial / state.water;
    var volumeMl = doseMg / concentration;
    var syringeType = state.syringeType || 100;
    var unitsToDraw = volumeMl * syringeType;
    var maxUnits = (state.capacity || 1) * syringeType; // syringe capacity expressed in units
    var totalDoses = state.vial / doseMg;
    var spraysNeeded = state.sprayVolume ? volumeMl / state.sprayVolume : null;

    return { concentration: concentration, volumeMl: volumeMl, unitsToDraw: unitsToDraw, maxUnits: maxUnits, totalDoses: totalDoses, doseMg: doseMg, spraysNeeded: spraysNeeded };
  }

  function updateStepStatus() {
    document.getElementById('step-1').classList.toggle('complete', state.vial != null && state.vial > 0);
    document.getElementById('step-2').classList.toggle('complete', state.water != null && state.water > 0);
    document.getElementById('step-3').classList.toggle('complete', state.dose != null && state.dose > 0);

    var step4Complete = state.mode === 'syringe'
      ? state.syringe != null
      : state.sprayVolume != null && state.sprayVolume > 0;
    document.getElementById('step-4').classList.toggle('complete', step4Complete);
    document.getElementById('step-5').classList.toggle('complete', state.capacity != null && state.capacity > 0);

    var vialUnit = state.doseUnit === 'iu' ? 'IU' : 'mg';
    var doseUnitLabel = state.doseUnit === 'iu' ? 'IU' : state.doseUnit;
    document.getElementById('hint-1').textContent = state.vial != null ? state.vial + ' ' + vialUnit : vialUnit;
    document.getElementById('hint-2').textContent = state.water != null ? state.water + ' ml' : 'ml';
    document.getElementById('hint-3').textContent = state.dose != null ? formatNum(state.dose) + ' ' + doseUnitLabel : '';
    document.getElementById('hint-4').textContent = state.mode === 'syringe'
      ? (state.syringe != null ? 'U' + state.syringe : '')
      : (state.sprayVolume != null ? state.sprayVolume + ' ml' : '');
    document.getElementById('hint-5').textContent = state.capacity != null ? state.capacity + ' ml' : 'ml';

    // Update step 2 title based on mode
    var step2Title = document.querySelector('#step-2 .step-title');
    if (step2Title) step2Title.textContent = t(state.mode === 'syringe' ? 'step2' : 'step2spray');

    // Update step 4 title based on mode
    var step4Title = document.querySelector('#step-4 .step-title');
    if (step4Title) step4Title.textContent = t(state.mode === 'syringe' ? 'step4' : 'step4spray');
  }

  function formatNum(n, max) {
    if (max === undefined) max = 4;
    if (n == null || isNaN(n)) return '—';
    if (n === 0) return '0';
    if (Math.abs(n) < 0.001) return n.toExponential(2);
    var fixed = n.toFixed(max);
    return parseFloat(fixed).toString();
  }

  function syringeSvg(fillFraction, capacityUnits, drawUnits) {
    var f = Math.max(0, Math.min(1, fillFraction));
    var overflow = fillFraction > 1;

    // Vertical syringe: needle points UP, plunger/thumb at BOTTOM.
    // Fluid fills from the top (needle end) downward to the plunger.
    var W = 150, H = 490;
    var cx = 75; // horizontal center

    var barrelW = 46;
    var barrelX = cx - barrelW / 2; // = 52
    var barrelY = 68;
    var barrelH = 300;
    var barrelEndY = barrelY + barrelH; // = 368

    var fillH = Math.min(barrelH, barrelH * f);
    var plungerY = barrelY + fillH; // where rubber stopper sits

    var fillColor = overflow ? '#f87171' : '#22d3ee';
    var fillColor2 = overflow ? '#fca5a5' : '#a78bfa';

    // Scale ticks: 0 at top (needle end), max at bottom (plunger end)
    var majorTicks = capacityUnits === 20 ? 4 : capacityUnits === 30 ? 6 : capacityUnits === 40 ? 8 : capacityUnits === 50 ? 5 : 10;
    var minorPerMajor = 5;
    var totalMinor = majorTicks * minorPerMajor;

    var tickMarks = '', tickLabels = '';
    for (var i = 0; i <= totalMinor; i++) {
      var ty = barrelY + (i / totalMinor) * barrelH;
      var isMajor = i % minorPerMajor === 0;
      var tickLen = isMajor ? 9 : 5;
      var opacity = isMajor ? 0.85 : 0.45;
      var tickX = barrelX + barrelW;
      tickMarks += '<line x1="' + tickX + '" y1="' + ty + '" x2="' + (tickX + tickLen) + '" y2="' + ty + '" stroke="rgba(232,236,244,' + opacity + ')" stroke-width="' + (isMajor ? 1.2 : 0.8) + '"/>';
      if (isMajor) {
        var labelVal = Math.round((i / totalMinor) * capacityUnits);
        tickLabels += '<text x="' + (tickX + 13) + '" y="' + (ty + 4) + '" fill="rgba(232,236,244,0.65)" font-size="10" text-anchor="start" font-weight="500" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + labelVal + '</text>';
      }
    }

    // Indicator: horizontal dashed line at plunger position, label on left
    var indicator = '';
    if (f > 0) {
      var indX1 = barrelX - 12, indX2 = barrelX + barrelW + 16;
      indicator =
        '<line x1="' + indX1 + '" y1="' + plungerY + '" x2="' + indX2 + '" y2="' + plungerY + '" stroke="' + fillColor + '" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.85"/>' +
        '<rect x="' + (barrelX - 40) + '" y="' + (plungerY - 10) + '" width="32" height="18" rx="4" fill="' + fillColor + '" opacity="0.18"/>' +
        '<text x="' + (barrelX - 25) + '" y="' + (plungerY + 3) + '" fill="' + fillColor + '" font-size="11" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + formatNum(drawUnits, 1) + 'u</text>';
    }

    // Hub (between needle and barrel)
    var hubY = barrelY - 24;
    var hubH = 24;
    // Needle
    var needleTipY = 2;

    // Below barrel
    var flangeY = barrelEndY + 2;
    var flangeH = 8;
    var flangeW = barrelW + 28;
    var flangeX = cx - flangeW / 2;
    var rodY = flangeY + flangeH;
    var rodH = 66;
    var thumbCY = rodY + rodH + 16;

    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="fillGrad" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="' + fillColor + '" stop-opacity="0.5"/>' +
          '<stop offset="50%" stop-color="' + fillColor2 + '" stop-opacity="0.9"/>' +
          '<stop offset="100%" stop-color="' + fillColor + '" stop-opacity="0.5"/>' +
        '</linearGradient>' +
        '<linearGradient id="barrelGlass" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.02)"/>' +
          '<stop offset="15%" stop-color="rgba(255,255,255,0.13)"/>' +
          '<stop offset="50%" stop-color="rgba(255,255,255,0.04)"/>' +
          '<stop offset="85%" stop-color="rgba(255,255,255,0.13)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>' +
        '</linearGradient>' +
        '<linearGradient id="plungerHead" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#1a1f2e"/>' +
          '<stop offset="50%" stop-color="#2a3142"/>' +
          '<stop offset="100%" stop-color="#1a1f2e"/>' +
        '</linearGradient>' +
      '</defs>' +
      // Needle (pointing up)
      '<line x1="' + cx + '" y1="' + needleTipY + '" x2="' + cx + '" y2="' + hubY + '" stroke="rgba(232,236,244,0.5)" stroke-width="2.5" stroke-linecap="round"/>' +
      '<line x1="' + cx + '" y1="' + needleTipY + '" x2="' + cx + '" y2="' + hubY + '" stroke="rgba(255,255,255,0.7)" stroke-width="1"/>' +
      // Needle bevel at tip
      '<line x1="' + (cx - 1.5) + '" y1="' + (needleTipY + 3) + '" x2="' + (cx + 1.5) + '" y2="' + needleTipY + '" stroke="rgba(232,236,244,0.8)" stroke-width="1.2" stroke-linecap="round"/>' +
      // Hub
      '<rect x="' + (cx - 14) + '" y="' + hubY + '" width="28" height="' + hubH + '" fill="rgba(255,255,255,0.14)" stroke="rgba(255,255,255,0.25)" stroke-width="1" rx="1"/>' +
      // Barrel glass shell
      '<rect x="' + barrelX + '" y="' + barrelY + '" width="' + barrelW + '" height="' + barrelH + '" fill="url(#barrelGlass)" stroke="rgba(255,255,255,0.22)" stroke-width="1" rx="3"/>' +
      // Left edge shadow
      '<rect x="' + (barrelX + 1) + '" y="' + (barrelY + 1) + '" width="2" height="' + (barrelH - 2) + '" fill="rgba(0,0,0,0.25)" rx="1"/>' +
      // Fluid (fills from needle/top down to plunger)
      (fillH > 2 ? '<rect class="fill-rect" x="' + (barrelX + 2) + '" y="' + (barrelY + 1) + '" width="' + (barrelW - 4) + '" height="' + Math.max(0, fillH - 2) + '" fill="url(#fillGrad)" rx="2"/>' : '') +
      // Fluid shine stripe
      (f > 0 ? '<rect x="' + (barrelX + 3) + '" y="' + (barrelY + 2) + '" width="2" height="' + Math.max(0, fillH - 5) + '" fill="rgba(255,255,255,0.35)" rx="1"/>' : '') +
      // Plunger head (rubber stopper) at fluid bottom
      '<rect x="' + (barrelX + 2) + '" y="' + (plungerY - 5) + '" width="' + (barrelW - 4) + '" height="10" fill="url(#plungerHead)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8" rx="1.5"/>' +
      '<line x1="' + (barrelX + 6) + '" y1="' + (plungerY - 2) + '" x2="' + (barrelX + barrelW - 6) + '" y2="' + (plungerY - 2) + '" stroke="rgba(255,255,255,0.15)" stroke-width="0.6"/>' +
      '<line x1="' + (barrelX + 6) + '" y1="' + (plungerY + 2) + '" x2="' + (barrelX + barrelW - 6) + '" y2="' + (plungerY + 2) + '" stroke="rgba(0,0,0,0.3)" stroke-width="0.6"/>' +
      tickMarks + tickLabels + indicator +
      // Finger flange (horizontal wings at bottom of barrel)
      '<rect x="' + flangeX + '" y="' + flangeY + '" width="' + flangeW + '" height="' + flangeH + '" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>' +
      // Plunger rod
      '<rect x="' + (cx - 3) + '" y="' + rodY + '" width="6" height="' + rodH + '" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.15)" stroke-width="0.5"/>' +
      '<rect x="' + (cx - 10) + '" y="' + rodY + '" width="2" height="' + rodH + '" fill="rgba(255,255,255,0.06)"/>' +
      '<rect x="' + (cx + 8) + '" y="' + rodY + '" width="2" height="' + rodH + '" fill="rgba(255,255,255,0.06)"/>' +
      // Thumb pad
      '<ellipse cx="' + cx + '" cy="' + thumbCY + '" rx="22" ry="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
      '<ellipse cx="' + cx + '" cy="' + thumbCY + '" rx="22" ry="14" fill="url(#barrelGlass)"/>' +
      // Capacity label (shown when syringe is empty)
      '<text x="' + cx + '" y="' + (H - 6) + '" fill="rgba(139,149,173,0.5)" font-size="10" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="' + (f > 0 ? 0 : 0.9) + '">' + capacityUnits + 'u</text>' +
    '</svg>';
  }

  function sprayBottleSvg(spraysNeeded) {
    var W = 150, H = 490;
    var cx = 75;
    var sprays = spraysNeeded != null ? Math.ceil(spraysNeeded) : 0;
    var sprayLabel = sprays > 0 ? sprays : '';

    // Nasal spray: upward-pointing nozzle, finger rests, wide bottle
    // bw = bottle half-width
    var bw = 30;
    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(34,211,238,0.08)"/>' +
          '<stop offset="30%" stop-color="rgba(167,139,250,0.18)"/>' +
          '<stop offset="70%" stop-color="rgba(167,139,250,0.18)"/>' +
          '<stop offset="100%" stop-color="rgba(34,211,238,0.08)"/>' +
        '</linearGradient>' +
        '<linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.35"/>' +
          '<stop offset="50%" stop-color="#a78bfa" stop-opacity="0.6"/>' +
          '<stop offset="100%" stop-color="#22d3ee" stop-opacity="0.35"/>' +
        '</linearGradient>' +
        '<linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.2)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.06)"/>' +
        '</linearGradient>' +
        '<radialGradient id="mistGrad" cx="50%" cy="50%" r="50%">' +
          '<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.5"/>' +
          '<stop offset="50%" stop-color="#a78bfa" stop-opacity="0.15"/>' +
          '<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>' +
        '</radialGradient>' +
      '</defs>' +
      // ── Upward mist cloud ──
      (sprays > 0 ?
        '<ellipse cx="' + cx + '" cy="28" rx="28" ry="32" fill="url(#mistGrad)" opacity="0.65"/>' +
        '<circle cx="' + (cx - 10) + '" cy="20" r="2.2" fill="#22d3ee" opacity="0.45"/>' +
        '<circle cx="' + (cx + 12) + '" cy="16" r="2" fill="#a78bfa" opacity="0.4"/>' +
        '<circle cx="' + (cx + 3) + '" cy="8" r="2.5" fill="#22d3ee" opacity="0.35"/>' +
        '<circle cx="' + (cx - 14) + '" cy="34" r="1.5" fill="#a78bfa" opacity="0.3"/>' +
        '<circle cx="' + (cx + 16) + '" cy="28" r="1.8" fill="#22d3ee" opacity="0.3"/>' +
        '<circle cx="' + (cx - 6) + '" cy="6" r="1.5" fill="#a78bfa" opacity="0.25"/>' +
        '<circle cx="' + (cx + 8) + '" cy="2" r="1.2" fill="#22d3ee" opacity="0.2"/>'
      : '') +
      // ── Nozzle tip (points upward) ──
      '<ellipse cx="' + cx + '" cy="56" rx="6" ry="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.28)" stroke-width="0.8"/>' +
      '<ellipse cx="' + cx + '" cy="54" rx="2.5" ry="1.8" fill="rgba(34,211,238,0.3)"/>' +
      // Nozzle stem
      '<rect x="' + (cx - 5) + '" y="56" width="10" height="18" rx="3" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>' +
      // ── Actuator (press-down part) ──
      '<rect x="' + (cx - 20) + '" y="73" width="40" height="22" rx="5" fill="url(#capGrad)" stroke="rgba(255,255,255,0.28)" stroke-width="1"/>' +
      '<line x1="' + (cx - 14) + '" y1="79" x2="' + (cx + 14) + '" y2="79" stroke="rgba(255,255,255,0.1)" stroke-width="0.6"/>' +
      '<line x1="' + (cx - 14) + '" y1="84" x2="' + (cx + 14) + '" y2="84" stroke="rgba(255,255,255,0.1)" stroke-width="0.6"/>' +
      '<line x1="' + (cx - 14) + '" y1="89" x2="' + (cx + 14) + '" y2="89" stroke="rgba(255,255,255,0.1)" stroke-width="0.6"/>' +
      // ── Pump stem ──
      '<rect x="' + (cx - 6) + '" y="95" width="12" height="22" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>' +
      // ── Finger rests (wings on sides) ──
      '<path d="M' + (cx - 36) + ' 117 Q' + (cx - 36) + ' 111 ' + (cx - 22) + ' 111 L' + (cx + 22) + ' 111 Q' + (cx + 36) + ' 111 ' + (cx + 36) + ' 117 L' + (cx + 36) + ' 126 Q' + (cx + 36) + ' 131 ' + (cx + 22) + ' 131 L' + (cx - 22) + ' 131 Q' + (cx - 36) + ' 131 ' + (cx - 36) + ' 126 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>' +
      '<ellipse cx="' + (cx - 27) + '" cy="121" rx="6" ry="5" fill="rgba(0,0,0,0.12)"/>' +
      '<ellipse cx="' + (cx + 27) + '" cy="121" rx="6" ry="5" fill="rgba(0,0,0,0.12)"/>' +
      // ── Collar / threading ──
      '<rect x="' + (cx - 16) + '" y="131" width="32" height="12" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" stroke-width="0.8"/>' +
      '<line x1="' + (cx - 13) + '" y1="136" x2="' + (cx + 13) + '" y2="136" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>' +
      '<line x1="' + (cx - 13) + '" y1="139" x2="' + (cx + 13) + '" y2="139" stroke="rgba(255,255,255,0.12)" stroke-width="0.5"/>' +
      // ── Bottle body (wider, tapers from collar to body) ──
      '<path d="M' + (cx - 16) + ' 143 L' + (cx - bw) + ' 180 L' + (cx - bw) + ' 390 Q' + (cx - bw) + ' 410 ' + (cx - 14) + ' 410 L' + (cx + 14) + ' 410 Q' + (cx + bw) + ' 410 ' + (cx + bw) + ' 390 L' + (cx + bw) + ' 180 L' + (cx + 16) + ' 143 Z" fill="url(#bottleGrad)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>' +
      // Glass highlight (left edge)
      '<path d="M' + (cx - bw + 3) + ' 185 L' + (cx - bw + 3) + ' 385 Q' + (cx - bw + 3) + ' 405 ' + (cx - 12) + ' 405" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>' +
      // Right edge highlight
      '<line x1="' + (cx + bw - 4) + '" y1="190" x2="' + (cx + bw - 4) + '" y2="330" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>' +
      // ── Liquid inside ──
      '<path d="M' + (cx - bw + 2) + ' 240 L' + (cx - bw + 2) + ' 388 Q' + (cx - bw + 2) + ' 408 ' + (cx - 13) + ' 408 L' + (cx + 13) + ' 408 Q' + (cx + bw - 2) + ' 408 ' + (cx + bw - 2) + ' 388 L' + (cx + bw - 2) + ' 240 Z" fill="url(#liquidGrad)"/>' +
      '<line x1="' + (cx - bw + 4) + '" y1="240" x2="' + (cx + bw - 4) + '" y2="240" stroke="rgba(255,255,255,0.35)" stroke-width="1"/>' +
      // ── Spray count badge ──
      (sprays > 0 ?
        '<rect x="' + (cx - 20) + '" y="305" width="40" height="38" rx="9" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.4)" stroke-width="1"/>' +
        '<text x="' + cx + '" y="330" fill="#22d3ee" font-size="24" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + sprayLabel + '</text>' +
        '<text x="' + cx + '" y="360" fill="rgba(232,236,244,0.5)" font-size="9" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + (lang === 'de' ? 'Sprühstöße' : 'sprays') + '</text>'
      : '') +
    '</svg>';
  }

  function renderResult() {
    var result = calculate();
    var card = document.getElementById('result-card');
    var content = document.getElementById('result-content');

    if (!result) {
      card.classList.remove('ready');
      content.innerHTML =
        '<div class="result-empty">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>' +
          '</svg>' +
          '<div>' + t('empty') + '</div>' +
        '</div>';
      return;
    }

    card.classList.add('ready');

    var concentration = result.concentration;
    var volumeMl = result.volumeMl;
    var unitsToDraw = result.unitsToDraw;
    var totalDoses = result.totalDoses;
    var isSpray = state.mode === 'spray';

    var alertHtml = '';
    if (isSpray) {
      // Warn if one spray already exceeds the needed volume
      if (state.sprayVolume > volumeMl) {
        alertHtml = '<div class="alert warn">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
          '<div>' + t('warnSprayOverdose', { s: formatNum(state.sprayVolume, 3), v: formatNum(volumeMl, 4) }) + '</div>' +
          '</div>';
      }
    } else {
      var fillFraction = unitsToDraw / result.maxUnits;
      var overflow = unitsToDraw > result.maxUnits;
      var tooSmall = unitsToDraw < 1;
      if (overflow) {
        alertHtml = '<div class="alert error">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
          '<div>' + t('errorOverflow', { c: formatNum(state.capacity, 2), n: formatNum(result.maxUnits, 1) }) + '</div>' +
          '</div>';
      } else if (tooSmall) {
        alertHtml = '<div class="alert warn">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
          '<div>' + t('warnTooSmall') + '</div>' +
          '</div>';
      }
    }

    // Primary result: syringe shows units, spray shows spray count
    var primaryLabel, primaryValue, primaryUnit, primarySub, vizHtml;
    if (isSpray) {
      var sprays = result.spraysNeeded;
      var spraysRounded = Math.ceil(sprays);
      primaryLabel = t('step4spray');
      primaryValue = formatNum(spraysRounded, 0);
      primaryUnit = lang === 'de' ? 'Sprühstöße' : 'sprays';
      primarySub = t('sprayOnDevice', { n: formatNum(sprays, 2), ml: formatNum(state.sprayVolume, 2) });
      vizHtml = sprayBottleSvg(sprays);
    } else {
      primaryLabel = t('drawTo');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = '≈ ' + formatNum(volumeMl, 4) + ' ml ' + t('onSyringe', { t: 'U' + state.syringeType, c: formatNum(state.capacity, 2), u: formatNum(result.maxUnits, 1) });
      vizHtml = syringeSvg(fillFraction, result.maxUnits, unitsToDraw);
    }

    content.innerHTML =
      '<div class="result-layout">' +
        '<div class="result-info">' +
          '<div class="primary-result">' +
            '<div class="label">' + primaryLabel + '</div>' +
            '<div class="value">' + primaryValue + '<span class="unit-label">' + primaryUnit + '</span></div>' +
            '<div class="sub">' + primarySub + '</div>' +
          '</div>' +
          '<div class="stats-grid">' +
            '<div class="stat">' +
              '<div class="stat-label">' + t('concentration') + '</div>' +
              (state.doseUnit === 'iu'
                ? '<div class="stat-value">' + formatNum(concentration, 3) + ' <span style="font-size:12px;color:var(--text-dim)">IU/ml</span></div>' +
                  '<div class="stat-sub">≈ ' + formatNum(concentration / 3, 3) + ' mg/ml</div>'
                : '<div class="stat-value">' + formatNum(concentration, 3) + ' <span style="font-size:12px;color:var(--text-dim)">mg/ml</span></div>' +
                  '<div class="stat-sub">' + formatNum(concentration * 1000, 1) + ' mcg/ml</div>'
              ) +
            '</div>' +
            '<div class="stat">' +
              '<div class="stat-label">' + t('dosesPerVial') + '</div>' +
              '<div class="stat-value">' + formatNum(totalDoses, 1) + '</div>' +
              '<div class="stat-sub">' + t('perDose', { n: formatNum(state.doseUnit === 'iu' ? state.dose : result.doseMg, 4), u: state.doseUnit === 'iu' ? 'IU' : 'mg' }) + '</div>' +
            '</div>' +
          '</div>' +
          alertHtml +
          '<div class="actions">' +
            '<button class="btn" id="reset-btn" type="button">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' +
              t('reset') +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="result-syringe">' + vizHtml + '</div>' +
      '</div>';

    document.getElementById('reset-btn').addEventListener('click', function() {
      state.peptide = '';
      state.vial = null;
      state.water = null;
      state.dose = null;
      state.doseUnit = 'mg';
      state.syringe = null;
      state.syringeType = 100;
      state.capacity = null;
      state.sprayVolume = null;
      state.autoApplied = false;
      saveState();
      document.getElementById('peptide-select').value = '';
      document.getElementById('vial-custom').style.display = 'none';
      document.getElementById('water-custom').style.display = 'none';
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('syringe-custom').style.display = 'none';
      document.getElementById('capacity-custom').style.display = 'none';
      document.getElementById('spray-custom').style.display = 'none';
      document.getElementById('vial-input').value = '';
      document.getElementById('water-input').value = '';
      document.getElementById('dose-input').value = '';
      document.getElementById('syringe-input').value = '';
      document.getElementById('capacity-input').value = '';
      document.getElementById('spray-input').value = '';
      renderAll();
    });
  }

  function update() {
    saveState();
    updateStepStatus();
    renderResult();
    renderVialPills();
    renderWaterPills();
    renderDosePills();
    renderStep4();
    renderPeptideInfo();
  }

  function renderAll() {
    applyTranslations();
    var langBtns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < langBtns.length; i++) {
      if (langBtns[i].getAttribute('data-lang') === lang) {
        langBtns[i].classList.add('active');
      } else {
        langBtns[i].classList.remove('active');
      }
    }
    renderPeptideSelect();
    renderVialPills();
    renderWaterPills();
    renderDosePills();
    renderStep4();
    updateStepStatus();
    renderPeptideInfo();
    renderResult();
  }

  // ---------- Event listeners ----------
  document.getElementById('peptide-select').addEventListener('change', function(e) {
    state.peptide = e.target.value;
    if (state.peptide && PEPTIDE_DEFAULTS[state.peptide]) {
      var d = PEPTIDE_DEFAULTS[state.peptide];
      state.vial = d.vial;
      state.water = d.water;
      state.dose = d.dose;
      state.doseUnit = d.doseUnit;
      state.syringe = d.syringe;
      state.syringeType = d.syringe;
      state.autoApplied = true;
      document.getElementById('vial-custom').style.display = 'none';
      document.getElementById('water-custom').style.display = 'none';
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('syringe-custom').style.display = 'none';
      document.getElementById('vial-input').value = '';
      document.getElementById('water-input').value = '';
      document.getElementById('dose-input').value = '';
      document.getElementById('syringe-input').value = '';
    } else {
      state.autoApplied = false;
    }
    update();
  });

  function parseLocaleFloat(str) {
    if (!str) return NaN;
    return parseFloat(str.replace(',', '.'));
  }

  // Filter inputs to only allow digits, dot, and comma
  function filterNumericInput(e) {
    var clean = e.target.value.replace(/[^0-9.,]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
  }
  document.getElementById('vial-input').addEventListener('input', filterNumericInput);
  document.getElementById('water-input').addEventListener('input', filterNumericInput);
  document.getElementById('dose-input').addEventListener('input', filterNumericInput);
  document.getElementById('syringe-input').addEventListener('input', function(e) {
    var clean = e.target.value.replace(/[^0-9]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
  });

  document.getElementById('vial-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.vial = isNaN(v) ? null : v;
    state.autoApplied = false;
    update();
  });
  document.getElementById('water-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.water = isNaN(v) ? null : v;
    state.autoApplied = false;
    update();
  });
  document.getElementById('dose-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.dose = isNaN(v) ? null : v;
    state.autoApplied = false;
    update();
  });
  document.getElementById('syringe-input').addEventListener('input', function(e) {
    var v = parseInt(e.target.value, 10);
    state.syringe = isNaN(v) || v <= 0 ? null : v;
    state.syringeType = state.syringe;
    state.autoApplied = false;
    update();
  });
  document.getElementById('capacity-input').addEventListener('input', filterNumericInput);
  document.getElementById('capacity-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.capacity = isNaN(v) || v <= 0 ? null : v;
    state.autoApplied = false;
    update();
  });

  var unitToggleBtns = document.querySelectorAll('.unit-toggle-btn');
  for (var u = 0; u < unitToggleBtns.length; u++) {
    unitToggleBtns[u].addEventListener('click', function() {
      var newUnit = this.getAttribute('data-unit');
      if (!newUnit) return; // skip non-dose toggle buttons
      if (newUnit === state.doseUnit) return;
      var crossingIU = (newUnit === 'iu') !== (state.doseUnit === 'iu');
      if (crossingIU) {
        state.dose = null;
        state.vial = null;
        document.getElementById('vial-custom').style.display = 'none';
        document.getElementById('vial-input').value = '';
      } else if (state.dose !== null) {
        if (newUnit === 'mg' && state.doseUnit === 'mcg') {
          state.dose = state.dose / 1000;
        } else if (newUnit === 'mcg' && state.doseUnit === 'mg') {
          state.dose = state.dose * 1000;
        }
      }
      state.doseUnit = newUnit;
      state.autoApplied = false;
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('dose-input').value = '';
      renderDosePills();
      update();
    });
  }

  // Vial unit toggle (syncs with dose unit toggle)
  var vialUnitBtns = document.querySelectorAll('[data-vial-unit]');
  for (var vu = 0; vu < vialUnitBtns.length; vu++) {
    vialUnitBtns[vu].addEventListener('click', function() {
      var newVialUnit = this.getAttribute('data-vial-unit');
      var isCurrentlyIU = state.doseUnit === 'iu';
      var wantIU = newVialUnit === 'iu';
      if (wantIU === isCurrentlyIU) return;
      // Sync dose unit: IU ↔ mg
      state.dose = null;
      state.vial = null;
      state.doseUnit = wantIU ? 'iu' : 'mg';
      state.autoApplied = false;
      document.getElementById('vial-custom').style.display = 'none';
      document.getElementById('vial-input').value = '';
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('dose-input').value = '';
      renderDosePills();
      update();
    });
  }

  // Mode toggle (syringe / spray)
  var modeBtns = document.querySelectorAll('[data-mode]');
  for (var mb = 0; mb < modeBtns.length; mb++) {
    modeBtns[mb].addEventListener('click', function() {
      var newMode = this.getAttribute('data-mode');
      if (newMode === state.mode) return;
      state.mode = newMode;
      state.autoApplied = false;
      update();
    });
  }

  // Spray input
  document.getElementById('spray-input').addEventListener('input', filterNumericInput);
  document.getElementById('spray-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.sprayVolume = isNaN(v) || v <= 0 ? null : v;
    state.autoApplied = false;
    update();
  });

  var langButtons = document.querySelectorAll('.lang-btn');
  for (var l = 0; l < langButtons.length; l++) {
    langButtons[l].addEventListener('click', function() {
      lang = this.getAttribute('data-lang');
      saveState();
      renderAll();
    });
  }

  // ---------- Init ----------
  loadState();

  var vialPresets = state.doseUnit === 'iu' ? VIAL_PRESETS_IU : VIAL_PRESETS;
  if (state.vial != null && vialPresets.indexOf(state.vial) === -1) {
    document.getElementById('vial-custom').style.display = 'flex';
    document.getElementById('vial-input').value = state.vial;
  }
  if (state.water != null && WATER_PRESETS.indexOf(state.water) === -1) {
    document.getElementById('water-custom').style.display = 'flex';
    document.getElementById('water-input').value = state.water;
  }
  var dosePresets = state.doseUnit === 'mcg' ? DOSE_PRESETS_MCG : state.doseUnit === 'iu' ? DOSE_PRESETS_IU : DOSE_PRESETS_MG;
  if (state.dose != null && dosePresets.indexOf(state.dose) === -1) {
    document.getElementById('dose-custom').style.display = 'flex';
    document.getElementById('dose-input').value = state.dose;
  }
  if (state.syringe != null && SYRINGE_PRESETS.indexOf(state.syringe) === -1) {
    document.getElementById('syringe-custom').style.display = 'flex';
    document.getElementById('syringe-input').value = state.syringe;
  }
  if (state.capacity != null && CAPACITY_PRESETS.indexOf(state.capacity) === -1) {
    document.getElementById('capacity-custom').style.display = 'flex';
    document.getElementById('capacity-input').value = state.capacity;
  }
  if (state.sprayVolume != null && SPRAY_PRESETS.indexOf(state.sprayVolume) === -1) {
    document.getElementById('spray-custom').style.display = 'flex';
    document.getElementById('spray-input').value = state.sprayVolume;
  }

  renderAll();
});
