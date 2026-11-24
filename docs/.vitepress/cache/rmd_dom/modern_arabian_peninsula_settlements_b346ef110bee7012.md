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
hero_caption: "Spatial distribution of 1.972 catalogued settlements across 72 sub-regions in Saudi Arabia, Yemen, Oman, Kuwait, Bahrain, Qatar and the United Arab Emirates, 1971AD to 2026AD."
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

This settlement gazetteer compiles longitudinal and census-anchored population series for 1.972 urban centres, rural localities, industrial new towns, coastal ports and oasis municipalities across the Arabian Peninsula from 1971AD to 2026AD. Selected out of 2.223 evaluated candidates after consolidating 251 duplicate aliases and proximate suburbs into their canonical urban cores, the ledger spans all seven sovereign states in the domain—expanded substantially through Yemen's 2004 CSO locality register alongside GASTAT Saudi Arabia, NCSI Oman and Gulf national census tables. Harmonised against official enumerations from GASTAT, CSO Yemen, NCSI Oman, FCSA UAE, PSA Qatar, iGA Bahrain and CSB Kuwait within geoBoundaries administrative frames, the urban hierarchy exhibits a steep Zipf rank-size slope ($\alpha = 1{,}334$, $R^2 = 0{,}948$). Fourteen metropolitan nodes exceed 900k inhabitants at peak—thirteen surpassing one million—led by Ar-Riyāḍ (7,68M peak; 7,46M in 2025AD), Jiddah (4,7M peak; 4M in 2025AD), Dubayy (3,75M), Al-Kuwayt (2,99M metropolitan peak), Ṣan'ā' (2,58M peak; 2,29M in 2025AD), Makkah (2,57M), Abū Ẓaby (1,84M), Al-Madīnah (1,52M), Ad-Dammām (1,49M), Muscat (1,42M), Ad-Dawḥah (1,31M peak), Aden (1,15M) and Ḥawallī (1,02M), reflecting intense concentration along desalinated coastal corridors, petrochemical terminals and highland capital basins.

<figure class="crd-figure-block" id="fig:hero-settlements-modern-arabian-peninsula">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-arabian-peninsula-settlements/fig1_modern_arabian_peninsula_spatial.png" alt="fig:hero-settlements-modern-arabian-peninsula" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.972 catalogued settlements across 72 sub-regions in Saudi Arabia, Yemen, Oman, Kuwait, Bahrain, Qatar and the United Arab Emirates, 1971AD to 2026AD.</figcaption>
</figure>

# Background

Prior to the mid-twentieth century, permanent towns across the Arabian Peninsula were constrained tightly by local groundwater, seasonal flood irrigation and shallow maritime anchorages. Oasis capitals such as Ar-Riyāḍ, Buraydah, Al-Hufūf and Al-'Ayn depended on date-palm gardens fed by springs or subterranean *aflaj* conduits, Red Sea and Indian Ocean ports such as Jiddah, 'Adan, Al-Ḥudaydah and Maṭraḥ handled pilgrimage traffic and regional coastal trade, while fortified pearling towns from Kuwait Bay to Dubayy rarely held more than a few tens of thousands of residents. Inside the monsoon-watered south-western mountains, Ṣan'ā', Ta'izz, Ibb and Dhamār functioned as compact highland market and administrative seats serving densely terraced agrarian valleys [@Arabia2022Saudi].

Following British military withdrawal from the Gulf in 1971AD and the oil-price surge of 1973–1974, sovereign state revenues transformed urban scale across every sub-region except interior Yemen [@Wagle2024Labor; @Dito2013Arab]. Desalination plants decoupled coastal megacities from scarce aquifers, six-lane expressways linked Najd and the Hijaz to Gulf industrial complexes such as Al-Jubaīl and Yanbu', and temporary migrant recruitment under the *kafala* sponsorship system filled construction, hospital, port and service sectors across Saudi Arabia, the Emirates, Qatar, Kuwait, Bahrain and Oman [@Valenta2017Comparativ; @Hameed2021India; @AlNawafleh2015Managing]. Across Yemen, by contrast, urban growth reflected high natural increase, the abrupt repatriation of roughly 800k workers from Saudi Arabia and Kuwait during the 1990–1991 Gulf crisis and wartime displacement into Ṣan'ā', 'Adan, Ibb and Ma'rib after 2015 [@VERWIMP2007Child].

# Methodology

Every settlement in this gazetteer derives directly from national statistical bureau census publications rather than secondary global compilations. Saudi urban populations follow GASTAT censuses (1974, 1992, 2004, 2010 and 2022) [@Arabia2022Saudi; @Arabia2023Correction]; Yemeni localities follow CSO censuses (1975, 1986, 1988, 1994 and 2004) supplemented by post-2004 sub-national growth trajectories; Omani towns follow NCSI enumerations (1993, 2003, 2010 and 2020); Emirati cities follow FCSA censuses (1968 through 2020 and 2023 emirate totals); Qatari municipalities follow PSA counts (1970 through 2020); Bahraini centres follow iGA registers (1941 through 2020 and 2024); and Kuwaiti districts follow CSB censuses (1957 through 2021).

To prevent twentieth-century industrial towns from casting phantom populations backward, the gazetteer enforces documented foundation years: Al-Jubaīl enters at 1975AD and Badr at 1982AD, while earlier modern foundations—Ad-Dammām (1923AD), Al-Aḥmadī (1946AD), Ḥawallī (1906AD), Al-Jahrā' (1850AD), Al-Bayḍā' (1840AD), Al-Wakrah (1828AD), Al-Muḥarraq (1810AD), Khamīs Mushaīṭ (1760AD) and Ṣalālah (1200AD)—carry unbroken series across 1971AD to 2025AD. Every entry holds WGS84 coordinates matched against geoBoundaries polygons [@Runfola2020GeoBoundaries] and undergoes ledger deduplication, consolidating 251 duplicate aliases and suburbs into canonical cores. Within HANDBOOK, these 1.972 nodes anchor metric-isotropic radial distance fields and two-cell urban masks inside non-stationary Matérn ($\nu = 3/2$) kriging alongside mass-conserving pycnophylactic disaggregation across 65.864 continental checks [@Runfola2020GeoBoundaries].

# Testing and Validation

Source-ledger accounting reconciles all 2.223 evaluated settlement candidates without discrepancy: 1.972 primary urban and rural centres are retained and 251 duplicate aliases or proximate suburban units are consolidated into canonical entries. Every retained locality carries verified WGS84 coordinates and census-anchored population observations within the 1971AD–2025AD horizon, pairing multi-decadal national census trajectories for principal cities with complete single-round locality registers (notably Yemen's 2004 CSO enumeration and contemporary GASTAT/NCSI town lists).

<figure class="crd-figure-block" id="fig:gazetteer-ranksize">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-arabian-peninsula-settlements/fig4_modern_arabian_peninsula_settlements.png" alt="fig:gazetteer-ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Log-log rank-size curve across all 1.972 catalogued settlements (left) and the twelve highest-peaking urban centres by peak population (right).</figcaption>
</figure>

Figure 2 displays the rank-size regression across all 1.972 catalogued settlements alongside the twelve highest-peaking cities. Because the full register of 1.972 localities captures both metropolitan gateways and dense highland village networks, the fitted Zipf slope ($\alpha = 1{,}334$, $R^2 = 0{,}948$) reflects strong structural concentration: hydrocarbon revenue and international labour recruitment funnelled residents disproportionately into capital metropolises, port gateways and industrial enclaves even alongside Yemen's vast rural village tail.

# Results

## Jurisdiction Summary across Seven States

Table 1 summarises site counts, territorial shares, median peak sizes, maximum urban peaks and active spans across all seven sovereign jurisdictions. Following ingestion of Yemen's 2004 CSO locality register, Yemen contributes over four-fifths of all catalogued sites across its densely settled mountain governorates, followed by Saudi Arabia (GASTAT), Oman (NCSI) and the four compact Gulf maritime states (Qatar, the United Arab Emirates, Kuwait and Bahrain), while Saudi Arabia holds the highest metropolitan peak (Ar-Riyāḍ at 7,68M in 2017AD; 7,46M in 2025AD) [@Arabia2022Saudi; @ALFARHAN2019Migrant].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Median Peak</th><th class="crd-th">Leading Metropolis (Peak)</th><th class="crd-th">Active Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">1.640</td><td class="crd-td">83,2%</td><td class="crd-td">4,8k</td><td class="crd-td">Ṣan'ā' (2,58M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">182</td><td class="crd-td">9,2%</td><td class="crd-td">28,3k</td><td class="crd-td">Ar-Riyāḍ (7,68M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">73</td><td class="crd-td">3,7%</td><td class="crd-td">16,7k</td><td class="crd-td">Muscat (1,42M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">28</td><td class="crd-td">1,4%</td><td class="crd-td">26,3k</td><td class="crd-td">Ad-Dawḥah (1,31M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">24</td><td class="crd-td">1,2%</td><td class="crd-td">52,7k</td><td class="crd-td">Dubayy (3,75M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">13</td><td class="crd-td">0,7%</td><td class="crd-td">300,3k</td><td class="crd-td">Al-Kuwayt (2,99M)</td><td class="crd-td">1971AD-2025AD</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">12</td><td class="crd-td">0,6%</td><td class="crd-td">73,4k</td><td class="crd-td">Al-Manāmah (297,5k)</td><td class="crd-td">1971AD-2025AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued settlement counts, territorial share, median peak size and leading metropolis across seven Arabian states (1.972 total localities).</figcaption>
</figure>

## Saudi Arabia

Saudi Arabia's enriched GASTAT settlement register maps the rapid transformation of a continental kingdom from dispersed oasis towns into a multi-corridor urban network (Table 2). Ar-Riyāḍ expanded from 420k in 1971AD to a peak of 7,68M in 2017AD (7,46M in 2025AD), Jiddah climbed from 380k to 4,7M at peak (4M in 2025AD), Makkah from 310k to 2,57M, Al-Madīnah from 160k to 1,52M and Ad-Dammām from 95k to 1,49M [@Arabia2022Saudi; @Ageeli2019Applicatio]. Alongside the Big Five, regional hubs above 400k—Al-Hufūf (786,4k), Tabūk (640,6k), Buraydah (615,7k), Aṭ-Ṭa'if (607,2k), Khamīs Mushaīṭ (576,7k), Al-Jubaīl (511,6k), Ḥā'il (483,6k), Al-Khubar (441,4k), Ḥafar al-Bāṭin (417,2k) and Najrān (411,1k)—anchor provincial administration, military garrisons and industrial estates across Najd, Asir, the Hijaz and the Gulf littoral [@Hkiri2025Correlatin].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ar-Riyāḍ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,69, 46,72</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2017AD</td><td class="crd-td">7,68M</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,63, 39,2</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2021AD</td><td class="crd-td">4,7M</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,43, 39,83</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">2,57M</td></tr>
<tr><td class="crd-td"><strong>Al-Madīnah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,47, 39,61</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Ad-Dammām</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,43, 50,1</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,49M</td></tr>
<tr><td class="crd-td"><strong>Al-Hufūf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,36, 49,59</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">786,4k</td></tr>
<tr><td class="crd-td"><strong>Tabūk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,4, 36,57</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">640,6k</td></tr>
<tr><td class="crd-td"><strong>Buraydah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,33, 43,97</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">615,7k</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭa'if</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,27, 40,42</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">607,2k</td></tr>
<tr><td class="crd-td"><strong>Khamīs Mushaīṭ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">18,3, 42,73</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">576,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Jubaīl</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,02, 49,62</td><td class="crd-td">1992AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">511,6k</td></tr>
<tr><td class="crd-td"><strong>Ḥā'il</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,52, 41,69</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">483,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Khubar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,28, 50,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">441,4k</td></tr>
<tr><td class="crd-td"><strong>Ḥafar al-Bāṭin</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,43, 45,97</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">417,2k</td></tr>
<tr><td class="crd-td"><strong>Najrān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,49, 44,13</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">411,1k</td></tr>
<tr><td class="crd-td"><strong>Abhā</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">18,22, 42,51</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">360,3k</td></tr>
<tr><td class="crd-td"><strong>Yanbu' al-Baḥr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,09, 38,06</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">357,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Kharj</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,16, 47,33</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">318,5k</td></tr>
<tr><td class="crd-td"><strong>Ath-Thuqbah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,26, 50,2</td><td class="crd-td">1992AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">268,3k</td></tr>
<tr><td class="crd-td"><strong>'Unaīzah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,1, 44</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2018AD</td><td class="crd-td">250k</td></tr>
<tr><td class="crd-td"><strong>Sakākā</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">29,97, 40,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">220,1k</td></tr>
<tr><td class="crd-td"><strong>Al-'Aqīq</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,41, 49,59</td><td class="crd-td">1974AD-2025AD</td><td class="crd-td">1992AD</td><td class="crd-td">219,1k</td></tr>
<tr><td class="crd-td"><strong>'Ar'ar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">30,98, 41,04</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">214,8k</td></tr>
<tr><td class="crd-td"><strong>Jīzān</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">16,89, 42,55</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">187,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawiyah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,42, 40,49</td><td class="crd-td">1992AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">185k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 25 of 182 catalogued settlements in Saudi Arabia ordered by peak population (1971AD-2025AD).</figcaption>
</figure>

## Yemen

Yemen's CSO-enriched settlement corpus spans over 1.630 highland, Tihama and Hadhramaut localities, tracing sustained indigenous urbanisation across steep terraces and coastal ports despite low per-capita income and prolonged post-2014 conflict (Table 3). Capital Ṣan'ā' surged twentyfold from 115k in 1971AD to a peak of 2,58M in 2012AD (2,29M in 2025AD), overtaking former southern port capital Aden (235k in 1971AD to 1,15M in 2025AD) [@VERWIMP2007Child]. Mid-tier highland and coastal cities—Ta'izz (626,6k), Al-Ḥudaydah (550,1k), Ibb (285,8k), Al-Mukallā (244,8k), Dhamār (196,4k) and 'Amrān (104,4k)—experienced acute crowding from 1990–1991 remittance returnees and internal war displacement [@Wagle2024Labor].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,35, 44,21</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2012AD</td><td class="crd-td">2,58M</td></tr>
<tr><td class="crd-td"><strong>Aden</strong></td><td class="crd-td">Yemen</td><td class="crd-td">12,8, 45,03</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,58, 44,02</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">626,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,8, 42,95</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">550,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Qabl al-Asfl</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,03, 44,35</td><td class="crd-td">2004AD-2004AD</td><td class="crd-td">2004AD</td><td class="crd-td">434,9k</td></tr>
<tr><td class="crd-td"><strong>Ibb</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,97, 44,18</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2013AD</td><td class="crd-td">350,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukallā</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 49,12</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">244,8k</td></tr>
<tr><td class="crd-td"><strong>Dhamār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 44,41</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">196,4k</td></tr>
<tr><td class="crd-td"><strong>Seiyun</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,97, 48,78</td><td class="crd-td">1994AD-2005AD</td><td class="crd-td">2005AD</td><td class="crd-td">120,1k</td></tr>
<tr><td class="crd-td"><strong>Ja‘ār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,43, 45,77</td><td class="crd-td">2004AD-2004AD</td><td class="crd-td">2004AD</td><td class="crd-td">109k</td></tr>
<tr><td class="crd-td"><strong>Sheikh Othman</strong></td><td class="crd-td">Yemen</td><td class="crd-td">12,89, 45,03</td><td class="crd-td">2004AD-2004AD</td><td class="crd-td">2004AD</td><td class="crd-td">105,2k</td></tr>
<tr><td class="crd-td"><strong>'Amrān</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,66, 43,94</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">104,4k</td></tr>
<tr><td class="crd-td"><strong>Aţ Ţarf al Yamānī</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,42, 43,24</td><td class="crd-td">2004AD-2004AD</td><td class="crd-td">2004AD</td><td class="crd-td">89,4k</td></tr>
<tr><td class="crd-td"><strong>Zārah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,79, 45,79</td><td class="crd-td">2004AD-2004AD</td><td class="crd-td">2004AD</td><td class="crd-td">88,2k</td></tr>
<tr><td class="crd-td"><strong>Lab‘ūs</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,86, 45,22</td><td class="crd-td">2004AD-2004AD</td><td class="crd-td">2004AD</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Bājil</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,06, 43,29</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">74,8k</td></tr>
<tr><td class="crd-td"><strong>Sayyan</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,17, 44,32</td><td class="crd-td">1980AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">74,4k</td></tr>
<tr><td class="crd-td"><strong>Zinjibār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,13, 45,38</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2005AD</td><td class="crd-td">70,8k</td></tr>
<tr><td class="crd-td"><strong>Ṣa'dah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">16,94, 43,76</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2013AD</td><td class="crd-td">70,2k</td></tr>
<tr><td class="crd-td"><strong>Radā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,72, 44,5</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">68,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 20 of 1.640 catalogued settlements in Yemen ordered by peak population (1971AD-2025AD).</figcaption>
</figure>

## Oman

Oman's NCSI-enriched gazetteer reflects balanced dual-corridor growth linking the Greater Muscat conurbation (reaching 1,42M across metropolitan Muscat in 2019AD) along the Batinah coast to interior oasis towns and southern Dhofar (Table 4). Suburban As-Sīb (533,6k) and Bawshar (410,8k) outpaced walled Maṭraḥ (261,6k) inside the capital basin, while Ṣuḥār (248,5k) anchored northern heavy industry and Ṣalālah (333,1k) anchored Dhofar's southern port and monsoon agricultural hinterland [@ALFARHAN2019Migrant].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Muscat</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,61, 58,59</td><td class="crd-td">2005AD-2019AD</td><td class="crd-td">2019AD</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>As-Sīb</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,67, 58,19</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">533,6k</td></tr>
<tr><td class="crd-td"><strong>Bawshar</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,58, 58,4</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">410,8k</td></tr>
<tr><td class="crd-td"><strong>Ṣalālah</strong></td><td class="crd-td">Oman</td><td class="crd-td">17,02, 54,09</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">333,1k</td></tr>
<tr><td class="crd-td"><strong>Maṭraḥ</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,62, 58,56</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">261,6k</td></tr>
<tr><td class="crd-td"><strong>Ṣuḥār</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,35, 56,71</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">248,5k</td></tr>
<tr><td class="crd-td"><strong>Ṣūr</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,57, 59,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2017AD</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Al-'Āmrāt</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,52, 58,5</td><td class="crd-td">2003AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">109,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Buraymī</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,25, 55,79</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">104,5k</td></tr>
<tr><td class="crd-td"><strong>'Ibrī</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,23, 56,52</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2006AD</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Nizwā</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,93, 57,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2023AD</td><td class="crd-td">83,5k</td></tr>
<tr><td class="crd-td"><strong>Ja'alān Banī Bū 'Alī</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,02, 59,33</td><td class="crd-td">2003AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">75,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Khābūrah</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,97, 57,09</td><td class="crd-td">2003AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">72,2k</td></tr>
<tr><td class="crd-td"><strong>As-Suwaīq</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,85, 57,44</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">69k</td></tr>
<tr><td class="crd-td"><strong>Ja'alān Banī Bū 'Alī</strong></td><td class="crd-td">Oman</td><td class="crd-td">21,58, 59,06</td><td class="crd-td">2003AD-2020AD</td><td class="crd-td">2020AD</td><td class="crd-td">66,3k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rustāq</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,39, 57,42</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">51,4k</td></tr>
<tr><td class="crd-td"><strong>Bahlā'</strong></td><td class="crd-td">Oman</td><td class="crd-td">22,98, 57,3</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Barka'</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,68, 57,89</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Khaḍrā' ās-Sa'd</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,86, 57,33</td><td class="crd-td">2003AD-2020AD</td><td class="crd-td">2020AD</td><td class="crd-td">36,3k</td></tr>
<tr><td class="crd-td"><strong>Qurayyāt</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,26, 58,92</td><td class="crd-td">2003AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">35,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 20 of 73 catalogued settlements in Oman ordered by peak population (1971AD-2025AD).</figcaption>
</figure>

## United Arab Emirates, Qatar, Kuwait and Bahrain

Together, the four upper- and lower-Gulf maritime states exhibit urban growth rates unmatched globally (Table 5). Dubayy (3,75M), Abū Ẓaby (1,84M), Al-'Ayn (766,9k peak), 'Ajmān (585,6k) and Mileīḥah (519k peak) lead the Emirates [@Emirates2011Employer]; Ad-Dawḥah (1,31M peak; 988,2k in 2025AD) and Ar-Rayyān (906,4k) dominate Qatar alongside Umm Ṣalāl Muḥammad (169,6k) and Al-Wukaīr (165,2k peak in 2015AD); Al-Kuwayt (2,99M metropolitan peak), Ḥawallī (1,02M), Al-Farwānīyah (875k), Al-Jahrā' (503,7k) and Al-Finṭās (494k) form Kuwait's metropolitan ring; and Al-Manāmah (260,6k), Al-Muḥarraq (166,4k) and Ar-Rifā' (145k) concentrate Bahrain's island population [@Dito2013Arab; @sheikh2025Navigating].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dubayy</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,08, 55,31</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">3,75M</td></tr>
<tr><td class="crd-td"><strong>Al-Kuwayt</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,37, 47,97</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2018AD</td><td class="crd-td">2,99M</td></tr>
<tr><td class="crd-td"><strong>Abū Ẓaby</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,45, 54,4</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,84M</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawḥah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,29, 51,53</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2012AD</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,33, 48,03</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">1,02M</td></tr>
<tr><td class="crd-td"><strong>Ar-Rayyān</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,29, 51,42</td><td class="crd-td">1986AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">906,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Farwānīyah</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,28, 47,96</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">875k</td></tr>
<tr><td class="crd-td"><strong>Al-'Ayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,19, 55,76</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2017AD</td><td class="crd-td">766,9k</td></tr>
<tr><td class="crd-td"><strong>'Ajmān</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,4, 55,48</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">585,6k</td></tr>
<tr><td class="crd-td"><strong>Mileīḥah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,35, 55,42</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2005AD</td><td class="crd-td">519k</td></tr>
<tr><td class="crd-td"><strong>Al-Jahrā'</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,34, 47,66</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">503,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Finṭās</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,17, 48,12</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">494k</td></tr>
<tr><td class="crd-td"><strong>Rā's al-Khaymah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,79, 55,94</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">337,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Manqaf</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,1, 48,13</td><td class="crd-td">1975AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">319,3k</td></tr>
<tr><td class="crd-td"><strong>Mubarāk al-Kabīr</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,19, 48,09</td><td class="crd-td">1995AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">300,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Manāmah</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23, 50,59</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2012AD</td><td class="crd-td">297,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Firdaws</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,28, 47,87</td><td class="crd-td">1995AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">283k</td></tr>
<tr><td class="crd-td"><strong>Umm Ṣalāl Muḥammad</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,42, 51,41</td><td class="crd-td">1986AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">169,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Muḥarraq</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,26, 50,61</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">166,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Wukaīr</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,15, 51,54</td><td class="crd-td">1986AD-2025AD</td><td class="crd-td">2015AD</td><td class="crd-td">165,2k</td></tr>
<tr><td class="crd-td"><strong>Ar-Rifā'</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,13, 50,55</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">144,9k</td></tr>
<tr><td class="crd-td"><strong>Ash-Shaḥāniyah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,37, 51,22</td><td class="crd-td">1986AD-2025AD</td><td class="crd-td">2015AD</td><td class="crd-td">138,5k</td></tr>
<tr><td class="crd-td"><strong>Adh-Dhakhīrah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,73, 51,54</td><td class="crd-td">1986AD-2025AD</td><td class="crd-td">2010AD</td><td class="crd-td">129,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Fujayrah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,12, 56,34</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">120,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Wakrah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,17, 51,6</td><td class="crd-td">1971AD-2025AD</td><td class="crd-td">2025AD</td><td class="crd-td">106,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 25 of 77 catalogued settlements across the United Arab Emirates, Qatar, Kuwait and Bahrain (1971AD-2025AD).</figcaption>
</figure>

# Limitations

Three structural caveats apply when reading individual city rows. First, municipal boundaries across GCC conurbations split contiguous urban areas differently by jurisdiction: Kuwait enumerates Ḥawallī, Al-Farwānīyah and inner Al-Kuwayt alongside wider metropolitan counts, whereas Riyadh and Dubai publish consolidated metropolitan totals. Second, temporary contract workers living in peripheral labour camps fluctuate rapidly between census years, particularly during oil-price contractions and 2020 pandemic repatriations [@Thomas2025Employabil; @Wagle2024Labor]. Third, Yemen's lack of a national census since 2004 means 2015AD–2025AD city trajectories combine pre-war growth baselines with displacement-adjusted urban projections rather than direct physical headcounts, while rural Yemeni localities rely directly on the 2004 CSO census [@VERWIMP2007Child].

# Conclusion

Across 1.972 catalogued urban and rural localities spanning seven sovereign states, this gazetteer documents the rapid emergence of an urbanised peninsula anchored by Riyadh, Jeddah, Dubai, Kuwait City, Sana'a, Abu Dhabi, Muscat, Doha and Aden ($\alpha = 1{,}334$, $R^2 = 0{,}948$). Paired with geoBoundaries subadministrative totals and foundation-year controls, the ledger supplies a consistent quantitative anchor for demographic mapping from 1971AD through 2026AD [@Runfola2020GeoBoundaries; @Arabia2022Saudi].

# Appendix

## Source Ledger Exclusions

Table 6 presents a representative sample (first 30 of 251) of excluded candidate settlements from the 2.223-entry chapter source ledger, consolidated into canonical urban cores to prevent double-counting across variant spellings and proximate suburbs.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>'Adan</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged MENA exonym/transliteration twin into primary canonical settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥamriyah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Ar-Riyāḍ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Jeddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Dubai</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Dubayy</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Kuwait City</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Kuwait settlement.</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Yemen settlement.</td></tr>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Abū Ẓaby</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Yemen settlement.</td></tr>
<tr><td class="crd-td"><strong>Abu Dhabi</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Madīnah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Medina</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Ad-Dammām</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Doha</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Qatar settlement.</td></tr>
<tr><td class="crd-td"><strong>Sharjah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Kuwait settlement.</td></tr>
<tr><td class="crd-td"><strong>Dammam</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Tabuk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawḥah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Qatar settlement.</td></tr>
<tr><td class="crd-td"><strong>Ar-Rayyān</strong></td><td class="crd-td">Qatar</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Qatar settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Farwānīyah</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Kuwait settlement.</td></tr>
<tr><td class="crd-td"><strong>Al Ain</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-Hufūf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Saudi Arabia settlement.</td></tr>
<tr><td class="crd-td"><strong>Al-'Ayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical United Arab Emirates settlement.</td></tr>
<tr><td class="crd-td"><strong>Hofuf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 1,6 km merged into canonical Saudi Arabia settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Representative sample (first 30 of 251) of excluded duplicate aliases and subordinate candidate settlements in the chapter source ledger.</figcaption>
</figure>

# Sources

::: {#refs}
:::
