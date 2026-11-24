---
title: "Arabian Peninsula after 1971"
subtitle: "Settlement Gazetteer: Metropolises, Oil Towns and Highland Centres, 1971-2026"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: modern_arabian_peninsula_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_modern_arabian_peninsula_spatial.png"
hero_caption: "Spatial distribution of 289 catalogued settlements across 72 sub-regions in Saudi Arabia, Yemen, Oman, Kuwait, Bahrain, Qatar and the United Arab Emirates, 1971AD to 2026AD."
hero_label: "fig:hero-settlements-modern-arabian-peninsula"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This settlement gazetteer compiles longitudinal population series for 289 urban centres, industrial new towns, coastal ports and oasis municipalities across the Arabian Peninsula from 1971AD to 2026AD. Selected out of 298 evaluated candidates after consolidating nine proximate suburbs into their parent metropolitan cores, the ledger spans all seven sovereign states in the domain: Saudi Arabia (99 sites), Oman (62 sites), Yemen (60 sites), Qatar (25 sites), the United Arab Emirates (21 sites), Kuwait (12 sites) and Bahrain (10 sites). Harmonised against official enumerations from GASTAT, CSO Yemen, NCSI Oman, FCSA UAE, PSA Qatar, iGA Bahrain and CSB Kuwait within geoBoundaries administrative frames, the urban hierarchy exhibits a steep Zipf rank-size slope ($\alpha = 1{,}426$, $R^2 = 0{,}946$). Eleven metropolitan nodes exceed 900k inhabitants by 2025AD—led by Ar-Riyāḍ (7,46M), Jiddah (4M), Dubayy (3,75M), Makkah (2,57M), Ṣan'ā' (2,29M) and Abū Ẓaby (1,84M)—reflecting intense concentration along desalinated coastal corridors, petrochemical terminals and highland capital basins.

<figure class="crd-figure-block" id="fig:hero-settlements-modern-arabian-peninsula">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-arabian-peninsula-settlements/fig1_modern_arabian_peninsula_spatial.png" alt="fig:hero-settlements-modern-arabian-peninsula" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 289 catalogued settlements across 72 sub-regions in Saudi Arabia, Yemen, Oman, Kuwait, Bahrain, Qatar and the United Arab Emirates, 1971AD to 2026AD.</figcaption>
</figure>

# Background

Prior to the mid-twentieth century, permanent towns across the Arabian Peninsula were constrained tightly by local groundwater, seasonal flood irrigation and shallow maritime anchorages. Oasis capitals such as Ar-Riyāḍ, Buraydah, Al-Hufūf and Al-'Ayn depended on date-palm gardens fed by springs or subterranean *aflaj* conduits, Red Sea and Indian Ocean ports such as Jiddah, 'Adan, Al-Ḥudaydah and Maṭraḥ handled pilgrimage traffic and regional coastal trade, while fortified pearling towns from Kuwait Bay to Dubayy rarely held more than a few tens of thousands of residents. Inside the monsoon-watered south-western mountains, Ṣan'ā', Ta'izz, Ibb and Dhamār functioned as compact highland market and administrative seats serving densely terraced agrarian valleys [@Arabia2022Saudi].

Following British military withdrawal from the Gulf in 1971AD and the oil-price surge of 1973–1974, sovereign state revenues transformed urban scale across every sub-region except interior Yemen [@Wagle2024Labor; @Dito2013Arab]. Desalination plants decoupled coastal megacities from scarce aquifers, six-lane expressways linked Najd and the Hijaz to Gulf industrial complexes such as Al-Jubaīl and Yanbu', and temporary migrant recruitment under the *kafala* sponsorship system filled construction, hospital, port and service sectors across Saudi Arabia, the Emirates, Qatar, Kuwait, Bahrain and Oman [@Valenta2017Comparativ; @Hameed2021India; @AlNawafleh2015Managing]. Across Yemen, by contrast, urban growth reflected high natural increase, the abrupt repatriation of roughly 800k workers from Saudi Arabia and Kuwait during the 1990–1991 Gulf crisis and wartime displacement into Ṣan'ā', 'Adan, Ibb and Ma'rib after 2015 [@VERWIMP2007Child].

# Methodology

Every settlement in this gazetteer derives directly from national statistical bureau census publications rather than secondary global compilations. Saudi urban populations follow GASTAT censuses (1974, 1992, 2004, 2010 and 2022) [@Arabia2022Saudi; @Arabia2023Correction]; Yemeni localities follow CSO censuses (1975, 1986, 1988, 1994 and 2004) supplemented by post-2004 sub-national growth trajectories; Omani towns follow NCSI enumerations (1993, 2003, 2010 and 2020); Emirati cities follow FCSA censuses (1968 through 2020 and 2023 emirate totals); Qatari municipalities follow PSA counts (1970 through 2020); Bahraini centres follow iGA registers (1941 through 2020 and 2024); and Kuwaiti districts follow CSB censuses (1957 through 2021).

To prevent twentieth-century industrial towns from casting phantom populations backward prior to construction, the gazetteer enforces explicit foundation years where documented: Al-Jubaīl enters at 1975AD and Badr in Saudi Arabia at 1982AD, while earlier modern foundations—Ad-Dammām (1923AD), Al-Aḥmadī (1946AD), Ḥawallī (1906AD), Al-Jahrā' (1850AD), Al-Bayḍā' (1840AD), Al-Wakrah (1828AD), Al-Muḥarraq (1810AD), Khamīs Mushaīṭ (1760AD) and Ṣalālah (1200AD)—carry unbroken series across 1971AD to 2025AD. Every entry holds WGS84 coordinates matched against geoBoundaries administrative polygons [@Runfola2020GeoBoundaries] and undergoes 2 km proximity deduplication in the source ledger, consolidating nine subordinate suburbs—such as Masqaṭ adjacent to Maṭraḥ, Madīnat 'Īsā near Al-Manāmah and Aḍ-Ḍ'āyan north of Ad-Dawḥah—into their primary urban cores. Within HANDBOOK, these 289 settlement nodes anchor metric-isotropic radial distance fields and two-cell urban mask buffers inside non-stationary Matérn ($\nu = 3/2$) spatial interpolation, preserving rural oasis populations alongside strictly mass-conserving pycnophylactic census disaggregation across 66.308 continental unit-year checks [@Runfola2020GeoBoundaries].

# Testing and Validation

Source-ledger accounting reconciles all 298 evaluated settlement candidates without discrepancy: 289 primary urban centres are retained and nine proximate suburban units are consolidated within 2 km buffers. All 289 retained sites carry positive continuous series across 1971AD to 2025AD (save 1975AD-founded Al-Jubaīl and 1982AD-founded Badr), with zero missing coordinates and zero unverified spatial orphans.

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-arabian-peninsula-settlements/fig4_modern_arabian_peninsula_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Log-log rank-size curve across all 289 catalogued settlements (left) and the twelve highest-peaking urban centres in 2025AD (right).</figcaption>
</figure>

Figure 2 displays the rank-size regression across all 289 catalogued settlements alongside the twelve highest-peaking cities in 2025AD. Because $n = 289$ exceeds minimum sample requirements more than tenfold, the fitted Zipf slope ($\alpha = 1{,}426$, $R^2 = 0{,}946$) captures genuine structural concentration: unlike polycentric agrarian societies where medium-sized market towns form a flat plateau, hydrocarbon revenue and international labour recruitment funnelled residents disproportionately into capital metropolises, port gateways and industrial enclaves.

# Results

## Jurisdiction Summary across Seven States

Table 1 summarises site counts, territorial shares, earliest and latest active years, median peak sizes and maximum urban peaks across all seven sovereign jurisdictions. Saudi Arabia contributes roughly a third of all catalogued sites (99, or 34,3%) and holds both the highest maximum peak (Ar-Riyāḍ at 7,46M) and the second-highest national median (94,8k). Kuwait displays the highest median peak population (309,8k across 12 dense conurbation districts), followed by Qatar (25 sites, median 30k) and the UAE (21 sites, median 51,9k), whereas Oman (62 sites) and Yemen (60 sites) preserve wider networks of smaller regional market towns alongside their primary capitals [@Arabia2022Saudi; @ALFARHAN2019Migrant].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Metropolis (Peak)</th><th class="crd-th">Active Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">99</td><td class="crd-td">34,3%</td><td class="crd-td">49,8k</td><td class="crd-td">Ar-Riyāḍ (7,46M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">62</td><td class="crd-td">21,5%</td><td class="crd-td">16,8k</td><td class="crd-td">As-Sīb (533,6k)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">60</td><td class="crd-td">20,8%</td><td class="crd-td">26,1k</td><td class="crd-td">Ṣan'ā' (2,29M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">25</td><td class="crd-td">8,7%</td><td class="crd-td">22,6k</td><td class="crd-td">Ad-Dawḥah (988,2k)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">21</td><td class="crd-td">7,3%</td><td class="crd-td">51,9k</td><td class="crd-td">Dubayy (3,75M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">12</td><td class="crd-td">4,2%</td><td class="crd-td">291,6k</td><td class="crd-td">Ḥawallī (1,02M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">10</td><td class="crd-td">3,5%</td><td class="crd-td">80,4k</td><td class="crd-td">Al-Manāmah (260,6k)</td><td class="crd-td">1971AD-2025AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlement counts, territorial share, median peak size and leading metropolis across seven Arabian states (289 total sites).</figcaption>
</figure>

## Saudi Arabia

Saudi Arabia's 99 catalogued settlements map the rapid transformation of a continental kingdom from dispersed oasis towns into a multi-corridor urban network (Table 2). Ar-Riyāḍ expanded from 1,42M in 1971AD to 7,46M in 2025AD, Jiddah climbed from 1,04M to 4M, Makkah from 493,2k to 2,57M, Al-Madīnah from 310,6k to 1,52M and Ad-Dammām from 246,3k to 1,49M [@Arabia2022Saudi; @Ageeli2019Applicatio]. Alongside the Big Five, regional hubs above 400k—Al-Hufūf (786,4k), Tabūk (640,6k), Buraydah (615,7k), Aṭ-Ṭa'if (607,2k), Khamīs Mushaīṭ (576,7k), Al-Jubaīl (511,6k), Ḥā'il (483,6k), Al-Khubar (441,4k), Ḥafar al-Bāṭin (417,2k) and Najrān (411,1k)—anchor provincial administration, military garrisons and industrial estates across Najd, Asir, the Hijaz and the Gulf littoral [@Hkiri2025Correlatin].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ar-Riyāḍ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,69, 46,72</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">7,46M</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,63, 39,2</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">4M</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,43, 39,83</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">2,57M</td></tr>
<tr><td class="crd-td"><strong>Al-Madīnah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,47, 39,61</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Ad-Dammām</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,43, 50,1</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,49M</td></tr>
<tr><td class="crd-td"><strong>Al-Hufūf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,36, 49,59</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">786,4k</td></tr>
<tr><td class="crd-td"><strong>Tabūk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,4, 36,57</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">640,6k</td></tr>
<tr><td class="crd-td"><strong>Buraydah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,33, 43,97</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">615,7k</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭa'if</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,27, 40,42</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">607,2k</td></tr>
<tr><td class="crd-td"><strong>Khamīs Mushaīṭ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">18,3, 42,73</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">576,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Jubaīl</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,02, 49,62</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">511,6k</td></tr>
<tr><td class="crd-td"><strong>Ḥā'il</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,52, 41,69</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">483,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Khubar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,28, 50,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">441,4k</td></tr>
<tr><td class="crd-td"><strong>Ḥafar al-Bāṭin</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,43, 45,97</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">417,2k</td></tr>
<tr><td class="crd-td"><strong>Najrān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,49, 44,13</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">411,1k</td></tr>
<tr><td class="crd-td"><strong>Abhā</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">18,22, 42,51</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">360,3k</td></tr>
<tr><td class="crd-td"><strong>Yanbu' al-Baḥr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,09, 38,06</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">357,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Kharj</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,16, 47,33</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">318,5k</td></tr>
<tr><td class="crd-td"><strong>Ath-Thuqbah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,26, 50,2</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">268,3k</td></tr>
<tr><td class="crd-td"><strong>Sakākā</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">29,97, 40,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">220,1k</td></tr>
<tr><td class="crd-td"><strong>'Ar'ar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">30,98, 41,04</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">214,8k</td></tr>
<tr><td class="crd-td"><strong>'Unaīzah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,1, 44</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">197,6k</td></tr>
<tr><td class="crd-td"><strong>Jīzān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">16,89, 42,55</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">187,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawiyah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,42, 40,49</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">185k</td></tr>
<tr><td class="crd-td"><strong>Al-Qurayyāt</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">31,33, 37,34</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">180,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 25 of 99 catalogued settlements in Saudi Arabia ordered by peak population (1971AD-2025AD).</figcaption>
</figure>

## Yemen

Yemen's 60 catalogued settlements trace sustained indigenous urbanisation across steep highland terraces and Red Sea or Gulf of Aden ports despite low per-capita income and prolonged post-2014 conflict (Table 3). Capital Ṣan'ā' surged eighteenfold from 123,3k in 1971AD to 2,29M in 2025AD, overtaking former southern port capital 'Adan (220,1k to 790,2k) around 1984AD [@VERWIMP2007Child]. Mid-tier highland and coastal cities—Ta'izz (626,6k), Al-Ḥudaydah (550,1k), Ibb (285,8k), Al-Mukallā (244,8k), Dhamār (196,4k) and 'Amrān (104,4k)—experienced acute crowding from 1990–1991 remittance returnees and internal war displacement [@Wagle2024Labor].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,35, 44,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">2,29M</td></tr>
<tr><td class="crd-td"><strong>'Adan</strong></td><td class="crd-td">Yemen</td><td class="crd-td">12,78, 45,04</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">790,2k</td></tr>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,58, 44,02</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">626,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,8, 42,95</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">550,1k</td></tr>
<tr><td class="crd-td"><strong>Ibb</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,97, 44,18</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">285,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukallā</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 49,12</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">244,8k</td></tr>
<tr><td class="crd-td"><strong>Dhamār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 44,41</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">196,4k</td></tr>
<tr><td class="crd-td"><strong>'Amrān</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,66, 43,94</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">104,4k</td></tr>
<tr><td class="crd-td"><strong>Bājil</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,06, 43,29</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">74,8k</td></tr>
<tr><td class="crd-td"><strong>Sayyan</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,17, 44,32</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">74,4k</td></tr>
<tr><td class="crd-td"><strong>Ṣa'dah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,94, 43,76</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">69,6k</td></tr>
<tr><td class="crd-td"><strong>Radā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,72, 44,5</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">68,5k</td></tr>
<tr><td class="crd-td"><strong>Say'ūn</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,94, 48,79</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">65,9k</td></tr>
<tr><td class="crd-td"><strong>Tarīm</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,06, 49</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">64,5k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shihr</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,76, 49,61</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">64k</td></tr>
<tr><td class="crd-td"><strong>Yarīm</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,3, 44,38</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">63k</td></tr>
<tr><td class="crd-td"><strong>Bayt al-Faqīh</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,52, 43,32</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">52,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Qā'idah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,24, 43,43</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">52,7k</td></tr>
<tr><td class="crd-td"><strong>Ḥajjah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,69, 43,61</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">47,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Bayḍā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,99, 45,57</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">40,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 20 of 60 catalogued settlements in Yemen ordered by peak population (1971AD-2025AD).</figcaption>
</figure>

## Oman

Oman's 62 catalogued centres reflect balanced dual-corridor growth linking the Greater Muscat conurbation along the Batinah coast to interior oasis towns and southern Dhofar (Table 4). Suburban As-Sīb (533,6k) and Bawshar (410,8k) outpaced walled Maṭraḥ (261,6k) inside the capital basin, while Ṣuḥār (248,5k) anchored northern heavy industry and Ṣalālah (333,1k) anchored Dhofar's southern port and monsoon agricultural hinterland [@ALFARHAN2019Migrant].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>As-Sīb</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,67, 58,19</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">533,6k</td></tr>
<tr><td class="crd-td"><strong>Bawshar</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,58, 58,4</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">410,8k</td></tr>
<tr><td class="crd-td"><strong>Ṣalālah</strong></td><td class="crd-td">Oman</td><td class="crd-td">17,02, 54,09</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">333,1k</td></tr>
<tr><td class="crd-td"><strong>Maṭraḥ</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,62, 58,56</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">261,6k</td></tr>
<tr><td class="crd-td"><strong>Ṣuḥār</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,18, 56,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">248,5k</td></tr>
<tr><td class="crd-td"><strong>Al-'Āmrāt</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,52, 58,5</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">109,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Buraymī</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,25, 55,79</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>Ṣūr</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,57, 59,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">94,9k</td></tr>
<tr><td class="crd-td"><strong>Ja'alān Banī Bū 'Alī</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,02, 59,33</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">75,1k</td></tr>
<tr><td class="crd-td"><strong>Nizwā</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,93, 57,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">73,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Khābūrah</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,97, 57,09</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">72,2k</td></tr>
<tr><td class="crd-td"><strong>As-Suwaīq</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,85, 57,44</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">69k</td></tr>
<tr><td class="crd-td"><strong>'Ibrī</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,23, 56,52</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">62,8k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rustāq</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,39, 57,42</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">51,4k</td></tr>
<tr><td class="crd-td"><strong>Bahlā'</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,98, 57,3</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Barka'</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,68, 57,89</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Qurayyāt</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,26, 58,92</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">35,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Kāmil wal-Wāfī</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,21, 59,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Samā'il</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,3, 57,95</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Ibrā'</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,69, 58,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">33,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 20 of 62 catalogued settlements in Oman ordered by peak population (1971AD-2025AD).</figcaption>
</figure>

## United Arab Emirates, Qatar, Kuwait and Bahrain

Together, the four upper- and lower-Gulf maritime states account for 68 catalogued settlements whose growth rates stand unmatched globally (Table 5). Dubayy (3,75M), Abū Ẓaby (1,84M), Al-'Ayn (725,4k) and 'Ajmān (585,6k) lead the Emirates [@Emirates2011Employer]; Ad-Dawḥah (988,2k) and Ar-Rayyān (906,4k) dominate Qatar alongside Umm Ṣalāl Muḥammad (169,6k) and Al-Wukaīr (165,2k peak in 2015AD); Ḥawallī (1,02M), Al-Farwānīyah (875k), Al-Jahrā' (503,7k) and Al-Finṭās (494k) form Kuwait's metropolitan ring; and Al-Manāmah (260,6k), Al-Muḥarraq (166,4k) and Ar-Rifā' (145k) concentrate Bahrain's island population [@Dito2013Arab; @sheikh2025Navigating].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dubayy</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,08, 55,31</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">3,75M</td></tr>
<tr><td class="crd-td"><strong>Abū Ẓaby</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,45, 54,4</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,84M</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,33, 48,03</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawḥah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,29, 51,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">988,2k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rayyān</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,29, 51,42</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">906,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Farwānīyah</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,28, 47,96</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">875k</td></tr>
<tr><td class="crd-td"><strong>Al-'Ayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,19, 55,76</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">725,4k</td></tr>
<tr><td class="crd-td"><strong>'Ajmān</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,4, 55,48</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">585,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Jahrā'</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,34, 47,66</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">503,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Finṭās</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,17, 48,12</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">494k</td></tr>
<tr><td class="crd-td"><strong>Rā's al-Khaymah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,79, 55,94</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">337,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Manqaf</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,1, 48,13</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">319,3k</td></tr>
<tr><td class="crd-td"><strong>Mubarāk al-Kabīr</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,19, 48,09</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">300,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Firdaws</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,28, 47,87</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">283k</td></tr>
<tr><td class="crd-td"><strong>Al-Manāmah</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23, 50,59</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">260,6k</td></tr>
<tr><td class="crd-td"><strong>Umm Ṣalāl Muḥammad</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,42, 51,41</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">169,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Muḥarraq</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,26, 50,61</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">166,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Wukaīr</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,15, 51,54</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2015AD</td><td class="crd-td">165,2k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rifā'</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,13, 50,55</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">144,9k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shaḥāniyah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,37, 51,22</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2015AD</td><td class="crd-td">138,5k</td></tr>
<tr><td class="crd-td"><strong>Adh-Dhakhīrah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,73, 51,54</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2010AD</td><td class="crd-td">129,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Fujayrah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,12, 56,34</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">120,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Wakrah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,17, 51,6</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">106,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Khawr</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,68, 51,51</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">103,8k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Qaywayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,56, 55,56</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">96,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 25 of 68 catalogued settlements across the United Arab Emirates, Qatar, Kuwait and Bahrain (1971AD-2025AD).</figcaption>
</figure>

# Limitations

Three structural caveats apply when reading individual city rows. First, municipal boundaries across GCC conurbations split contiguous urban areas differently by jurisdiction: Kuwait enumerates Ḥawallī, Al-Farwānīyah and Al-Kuwayt separately, whereas Riyadh and Dubai publish consolidated metropolitan totals. Second, temporary contract workers living in peripheral labour camps fluctuate rapidly between census years, particularly during oil-price contractions and 2020 pandemic repatriations [@Thomas2025Employabil; @Wagle2024Labor]. Third, Yemen's lack of a national census since 2004 means 2015AD–2025AD city trajectories combine pre-war growth baselines with displacement-adjusted urban projections rather than direct physical headcounts [@VERWIMP2007Child].

# Conclusion

Across 289 catalogued urban centres spanning seven sovereign states, this gazetteer documents the rapid emergence of an urbanised peninsula anchored by Riyadh, Jeddah, Dubai, Abu Dhabi, Sana'a, Doha, Muscat and Kuwait City. Paired with geoBoundaries subadministrative totals and foundation-year controls, the ledger supplies a consistent quantitative anchor for demographic mapping from 1971AD through 2026AD [@Runfola2020GeoBoundaries; @Arabia2022Saudi].

# Appendix

## Source Ledger Exclusions

Table 6 lists all nine excluded candidate settlements from the 298-entry chapter source ledger, consolidated into adjacent primary urban cores within 2 km buffers to prevent metropolitan double-counting.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aḍ-Ḍ'āyan</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Qatar.</td></tr>
<tr><td class="crd-td"><strong>Madīnat 'Īsā</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Bahrain.</td></tr>
<tr><td class="crd-td"><strong>Ja'alān Banī Bū Ḥassan</strong></td><td class="crd-td">Oman</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Oman.</td></tr>
<tr><td class="crd-td"><strong>Al-Qudaīḥ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Masqaṭ</strong></td><td class="crd-td">Oman</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Oman.</td></tr>
<tr><td class="crd-td"><strong>Ẓahrān al-Janūb</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Baq'ā'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Saudi Arabia.</td></tr>
<tr><td class="crd-td"><strong>Ad-Dīs</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Yemen.</td></tr>
<tr><td class="crd-td"><strong>Al-Kar'ānah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Qatar.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> All nine excluded candidate settlements in the chapter source ledger consolidated into primary urban cores within 2 km.</figcaption>
</figure>

# Sources

::: {#refs}
:::
