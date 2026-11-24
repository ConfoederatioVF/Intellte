---
title: "Khedivate and British-Occupied Egypt (1799-1952)"
subtitle: "Settlement Gazetteer: Nile Valley, Delta and Canal Zone, 1799AD to 1952AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: khedivate_british_egypt_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_khedivate_british_egypt_spatial.png"
hero_caption: "Spatial distribution of 357 catalogued Egyptian cities, provincial towns and oasis settlements from 1799AD to 1952AD."
hero_label: "fig:hero-khedivate-egypt-settlements"
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

This gazetteer catalogues 357 Egyptian cities, provincial capitals, canal ports, rural market centres and desert oasis towns active across Khedivate and British-occupied Egypt between 1799AD and 1952AD (999.923,4 km² across five territorial masks). Synthesised from official CAPMAS and Ministry of Finance census series alongside historical and archaeological gazetteers [@Kumon2023Middle; @Bosworth2007Historic; @Runfola2020GeoBoundaries], the register contains 3.260 settlement-year population observations averaging 9,13 observations per settlement across 15 benchmark intervals from 1799AD to 1950AD. Out of 404 evaluated spatial candidates in the source ledger, 47 duplicate, subordinate or post-1952AD entities were excluded to eliminate metropolitan double counting. The urban hierarchy follows a steep Zipf rank-size distribution ($\alpha = 1,07$, $R^2 = 0,937$) anchored by Cairo (2,76M in 1950AD), Alexandria (1,2M), Giza (916,4k), Shubra al-Khaymah (316,5k), Port Said (171,7k), Suez (150,8k), Al-Mahallah al-Kubra (143,6k), Tanta (135,5k), Al-Mansurah (134,3k) and Asyut (124,9k) [@Hassad2021Urban; @Bischoff2023Cosmopolit; @Ibrahim2026Matrix].

# Background

Between the close of the eighteenth century and the 1952AD revolution, Egypt's urban network evolved from a dual-city mercantile corridor—where Cairo and an impoverished Alexandria stood atop loosely connected Nile market villages—into an integrated hydraulic, railway and maritime hierarchy [@Hassad2021Urban; @Mohamed2025Roads]. Four functional settlement classes structured Egyptian urbanisation across this 153-year interval. First, the Cairo-Alexandria metropolitan axis absorbed a rapidly rising share of national demographic growth after Muhammad Ali excavated the Mahmudiyah Canal and Khedive Isma'il linked the Delta and Upper Nile by rail [@Bischoff2023Cosmopolit; @A2022Preservati]. Cairo expanded outward from its historic walled quarters across the Nile into Giza and northward along the industrial Shubra al-Khaymah corridor [@Hassad2021Urban; @Hussein1965Potential], while Alexandria became the pre-eminent cotton-exporting port of the eastern Mediterranean, attracting substantial Greek, Italian, Levantine and Maltese mercantile communities [@Montalbano2024Mediterran; @Bischoff2023Cosmopolit].

Second, the construction of the Suez Canal between 1859AD and 1869AD created an unprecedented planned urban axis across the eastern desert isthmus [@Lutmar2023Suez]. Port Said (*Būr Sa'īd*), laid out in 1859AD on the Mediterranean sandspit, and Ismailia (*Al-Ismā'īliyah*), founded in 1862AD beside Lake Timsah and the Sweet Water Canal, grew alongside the older Red Sea port of Suez (*As-Suways*) despite severe sabkha soil engineering and freshwater supply constraints [@Ibrahim2026Matrix; @ElOmla2012Environmen]. Third, across the Nile Delta mudiriyas, perennial irrigation and cotton ginning propelled rapid expansion in provincial capitals and industrial towns including Al-Mahallah al-Kubra, Tanta, Al-Mansurah, Az-Zaqaziq, Damanhur, Damietta (*Dumyāṭ*) and Shibin al-Kawm [@abdalsalam2025Integrated; @Mohamed2025Roads]. Fourth, along the Nile trench of Middle and Upper Egypt (*Sa'id*) and across the Saharan and Red Sea frontiers, administrative *bandar* towns—Asyut, Al-Fayyum, Aswan, Al-Minya, Bani Suwayf, Sohag (*Sawhāj*), Qena (*Qinā*) and Luxor (*Al-Uqṣur*)—alongside desert gateways such as Al-Arish, Al-Qusayr and the Western Desert oases served as agricultural, military and pilgrimage nodes [@Daus1986Coptic; @Passon2020Places; @AM2022Circulatio].

# Methodology

The settlement register was compiled through a four-wave saturation pipeline documented in the chapter source ledger. Wave 1 ingested 194 canonical Egyptian census municipalities from the official 1882AD to 2017AD CAPMAS and Ministry of Finance series, assigning historical trajectories across decennial benchmarks from 1830AD to 1950AD and back-projecting 1799AD baselines where municipal records began later. Wave 2 incorporated 165 entries from historical and archaeological gazetteers covering desert oases, Red Sea stations and classical-to-Islamic Nile localities (two overlapping with Wave 1, yielding 357 unique included settlements). Wave 3 and Wave 4 audited temporal continuity, sub-regional coverage across all five territorial masks (Lower Egypt Nile Delta, Middle Egypt and Fayum, Upper Egypt, Suez Canal Zone, Sinai and Desert Governorates, and Cairo and Alexandria Metropolises) and spatial deduplication against geoBoundaries administrative units [@Runfola2020GeoBoundaries].

Out of 404 evaluated candidates, 47 records were excluded under strict deduplication rules: 42 subordinate suburbs, quarters or adjacent historical sites located within 2 km of a primary urban core (including New Cairo, Zifta satellites, Talkha, New Beni Suef, New Minya, Memphis and duplicate Alexandria entries), 3 variant-spelling duplicates within 25 km (such as alternate transliterations of *Būr Saʿīd*), and 2 post-1952AD new desert towns (*Badr*, founded in 1982, and *An-Nūbāriyah al-Jadīdah*) whose establishment post-dates the 1799AD to 1952AD domain. All retained coordinates use WGS84 decimal degrees and carry scholarly BGN/PCGN transliterations with full Arabic diacritics.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 404 candidate records: 357 included settlements and 47 excluded entries, leaving zero unaccounted records and zero unpopulated territorial sub-masks. Every catalogued settlement carries exact latitude-longitude coordinates and non-zero population estimates across its documented active span. Figure \ref{fig:sett-gazetteer} illustrates the national rank-size distribution ($\alpha = 1,07$, $R^2 = 0,937$) alongside the twelve largest settlements at their 1950AD peak.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-khedivate-british-egypt-settlements/fig4_khedivate_british_egypt_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution (n=357 settlements) and leading twelve urban centres across Khedivate and British-occupied Egypt.</figcaption>
</figure>

# Results

## Leading Forty-Five Settlements by Peak Population

Table \ref{tab:top45-egypt} presents the forty-five largest settlements in the gazetteer ordered by peak population within the 1799AD to 1952AD domain, demonstrating the dominance of the Greater Cairo conurbation (Al-Qāhirah, Al-Jīzah, Shubrā al-Khaymah and Al-Khuṣūṣ), Alexandria (Al-Iskandariyah), the three Suez Canal ports (Būr Sa'īd, As-Suways and Al-Ismā'īliyah) and the principal Delta and Nile Valley provincial capitals [@Bosworth2007Historic; @Ibrahim2026Matrix].

<figure class="crd-table-figure" id="tab:top45-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1799AD</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Qāhirah</strong></td><td class="crd-td">30,06, 31,25</td><td class="crd-td">99,7k</td><td class="crd-td">306,1k</td><td class="crd-td">919,7k</td><td class="crd-td">2,76M</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">31,2, 29,92</td><td class="crd-td">43,3k</td><td class="crd-td">132,8k</td><td class="crd-td">399k</td><td class="crd-td">1,2M</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">30,01, 31,21</td><td class="crd-td">33,1k</td><td class="crd-td">101,5k</td><td class="crd-td">305,1k</td><td class="crd-td">916,4k</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">30,13, 31,25</td><td class="crd-td">11,4k</td><td class="crd-td">35,1k</td><td class="crd-td">105,4k</td><td class="crd-td">316,5k</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">31,27, 32,3</td><td class="crd-td">6,2k</td><td class="crd-td">19k</td><td class="crd-td">57,1k</td><td class="crd-td">171,7k</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">29,6, 32,2</td><td class="crd-td">5,4k</td><td class="crd-td">16,7k</td><td class="crd-td">50,2k</td><td class="crd-td">150,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥallah al-Kubrā</strong></td><td class="crd-td">30,97, 31,17</td><td class="crd-td">5,2k</td><td class="crd-td">15,9k</td><td class="crd-td">47,8k</td><td class="crd-td">143,6k</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">30,79, 31</td><td class="crd-td">4,9k</td><td class="crd-td">15k</td><td class="crd-td">45,1k</td><td class="crd-td">135,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Manṣūrah</strong></td><td class="crd-td">31,04, 31,38</td><td class="crd-td">4,8k</td><td class="crd-td">14,9k</td><td class="crd-td">44,7k</td><td class="crd-td">134,3k</td></tr>
<tr><td class="crd-td"><strong>Asyūṭ</strong></td><td class="crd-td">27,18, 31,18</td><td class="crd-td">4,5k</td><td class="crd-td">13,8k</td><td class="crd-td">41,6k</td><td class="crd-td">124,9k</td></tr>
<tr><td class="crd-td"><strong>Az-Zaqāzīq</strong></td><td class="crd-td">30,59, 31,5</td><td class="crd-td">3,5k</td><td class="crd-td">10,8k</td><td class="crd-td">32,4k</td><td class="crd-td">97,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Fayyūm</strong></td><td class="crd-td">29,31, 30,84</td><td class="crd-td">3,4k</td><td class="crd-td">10,5k</td><td class="crd-td">31,6k</td><td class="crd-td">94,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Ismā'īliyah</strong></td><td class="crd-td">30,6, 32,27</td><td class="crd-td">3,3k</td><td class="crd-td">10,3k</td><td class="crd-td">30,9k</td><td class="crd-td">92,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">30,15, 31,32</td><td class="crd-td">3,1k</td><td class="crd-td">9,4k</td><td class="crd-td">28,3k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Aswān</strong></td><td class="crd-td">24,09, 32,9</td><td class="crd-td">2,9k</td><td class="crd-td">8,8k</td><td class="crd-td">26,6k</td><td class="crd-td">79,8k</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">31,03, 30,47</td><td class="crd-td">2,7k</td><td class="crd-td">8,4k</td><td class="crd-td">25,3k</td><td class="crd-td">76,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā</strong></td><td class="crd-td">28,09, 30,76</td><td class="crd-td">2,6k</td><td class="crd-td">8,1k</td><td class="crd-td">24,4k</td><td class="crd-td">73,2k</td></tr>
<tr><td class="crd-td"><strong>Banī Suwayf</strong></td><td class="crd-td">29,07, 31,1</td><td class="crd-td">2,3k</td><td class="crd-td">6,9k</td><td class="crd-td">20,8k</td><td class="crd-td">62,4k</td></tr>
<tr><td class="crd-td"><strong>Sawhāj</strong></td><td class="crd-td">26,56, 31,69</td><td class="crd-td">2,2k</td><td class="crd-td">6,9k</td><td class="crd-td">20,6k</td><td class="crd-td">61,9k</td></tr>
<tr><td class="crd-td"><strong>Dumyāṭ</strong></td><td class="crd-td">31,43, 31,78</td><td class="crd-td">2,2k</td><td class="crd-td">6,7k</td><td class="crd-td">20,1k</td><td class="crd-td">60,3k</td></tr>
<tr><td class="crd-td"><strong>Shibīn al-Kawm</strong></td><td class="crd-td">30,55, 31,01</td><td class="crd-td">2,1k</td><td class="crd-td">6,3k</td><td class="crd-td">19k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Qinā</strong></td><td class="crd-td">26,16, 32,73</td><td class="crd-td">2k</td><td class="crd-td">6,3k</td><td class="crd-td">18,8k</td><td class="crd-td">56,5k</td></tr>
<tr><td class="crd-td"><strong>Banhā</strong></td><td class="crd-td">30,46, 31,18</td><td class="crd-td">1,8k</td><td class="crd-td">5,5k</td><td class="crd-td">16,4k</td><td class="crd-td">49,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Uqṣur</strong></td><td class="crd-td">25,7, 32,64</td><td class="crd-td">1,8k</td><td class="crd-td">5,4k</td><td class="crd-td">16,3k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Kafr ash-Shaykh</strong></td><td class="crd-td">31,11, 30,94</td><td class="crd-td">1,6k</td><td class="crd-td">5k</td><td class="crd-td">15,1k</td><td class="crd-td">45,4k</td></tr>
<tr><td class="crd-td"><strong>Mallawī</strong></td><td class="crd-td">27,73, 30,84</td><td class="crd-td">1,6k</td><td class="crd-td">4,8k</td><td class="crd-td">14,4k</td><td class="crd-td">43,4k</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">30,42, 31,56</td><td class="crd-td">1,5k</td><td class="crd-td">4,6k</td><td class="crd-td">13,8k</td><td class="crd-td">41,6k</td></tr>
<tr><td class="crd-td"><strong>Mīt Ghamr</strong></td><td class="crd-td">30,72, 31,26</td><td class="crd-td">1,3k</td><td class="crd-td">4,1k</td><td class="crd-td">12,3k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>Kafr ad-Dawwār</strong></td><td class="crd-td">31,13, 30,13</td><td class="crd-td">1,3k</td><td class="crd-td">4,1k</td><td class="crd-td">12,2k</td><td class="crd-td">36,7k</td></tr>
<tr><td class="crd-td"><strong>Al-'Arīsh</strong></td><td class="crd-td">31,13, 33,8</td><td class="crd-td">1,3k</td><td class="crd-td">4k</td><td class="crd-td">12,2k</td><td class="crd-td">36,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥawāmidiyah</strong></td><td class="crd-td">29,9, 31,25</td><td class="crd-td">1,2k</td><td class="crd-td">3,7k</td><td class="crd-td">11,1k</td><td class="crd-td">33,4k</td></tr>
<tr><td class="crd-td"><strong>Disūq</strong></td><td class="crd-td">31,13, 30,65</td><td class="crd-td">1,2k</td><td class="crd-td">3,7k</td><td class="crd-td">11k</td><td class="crd-td">33,2k</td></tr>
<tr><td class="crd-td"><strong>Jirjā</strong></td><td class="crd-td">26,34, 31,89</td><td class="crd-td">1,2k</td><td class="crd-td">3,6k</td><td class="crd-td">10,9k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Idkū</strong></td><td class="crd-td">31,31, 30,3</td><td class="crd-td">1,2k</td><td class="crd-td">3,5k</td><td class="crd-td">10,6k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Bilqās</strong></td><td class="crd-td">31,21, 31,36</td><td class="crd-td">1,1k</td><td class="crd-td">3,5k</td><td class="crd-td">10,6k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Maṭariyah</strong></td><td class="crd-td">31,18, 32,03</td><td class="crd-td">1,1k</td><td class="crd-td">3,5k</td><td class="crd-td">10,5k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Abū Kabīr</strong></td><td class="crd-td">30,73, 31,67</td><td class="crd-td">1,1k</td><td class="crd-td">3,4k</td><td class="crd-td">10,3k</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Akhmīm</strong></td><td class="crd-td">26,56, 31,75</td><td class="crd-td">1,1k</td><td class="crd-td">3,4k</td><td class="crd-td">10,3k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Kirdāsah</strong></td><td class="crd-td">30,03, 31,11</td><td class="crd-td">1,1k</td><td class="crd-td">3,3k</td><td class="crd-td">9,9k</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>Minūf</strong></td><td class="crd-td">30,47, 30,93</td><td class="crd-td">1k</td><td class="crd-td">3,1k</td><td class="crd-td">9,4k</td><td class="crd-td">28,3k</td></tr>
<tr><td class="crd-td"><strong>Qalyūb</strong></td><td class="crd-td">30,18, 31,21</td><td class="crd-td">1k</td><td class="crd-td">3,1k</td><td class="crd-td">9,3k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Samālūṭ</strong></td><td class="crd-td">28,31, 30,71</td><td class="crd-td">989</td><td class="crd-td">3k</td><td class="crd-td">9,1k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Ṭahṭā</strong></td><td class="crd-td">26,77, 31,5</td><td class="crd-td">969</td><td class="crd-td">3k</td><td class="crd-td">8,9k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>As-Sinbillāwayn</strong></td><td class="crd-td">30,88, 31,46</td><td class="crd-td">955</td><td class="crd-td">2,9k</td><td class="crd-td">8,8k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Nāṣir Būsh</strong></td><td class="crd-td">29,15, 31,13</td><td class="crd-td">925</td><td class="crd-td">2,8k</td><td class="crd-td">8,5k</td><td class="crd-td">25,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 Egyptian settlements ordered by peak documented population (n=357 catalogued sites, all peaking in 1950AD).</figcaption>
</figure>

## Historical and Non-Census Gazetteer Centres

Alongside the 194 CAPMAS census municipalities peaking in 1950AD, the gazetteer incorporates 163 historical, archaeological and oasis localities whose catalogued values appear between 1799AD and 1900AD. Table \ref{tab:early-peaks-egypt} displays the fifteen largest settlements whose peak recorded population in the dataset occurs prior to 1950AD (principally in 1799AD or 1800AD), highlighting classical and monastic sites along the Nile margins as well as Western Desert oasis nodes such as Umm al-Dabadib and Deir Abu Matta [@Passon2020Places].

<figure class="crd-table-figure" id="tab:early-peaks-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1799AD</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Amarna</strong></td><td class="crd-td">27,64, 30,9</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Deir Abou Menas</strong></td><td class="crd-td">30,84, 29,67</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Behbeit el-Hagar</strong></td><td class="crd-td">31,03, 31,28</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Tamiathis</strong></td><td class="crd-td">31,42, 31,81</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Spania</strong></td><td class="crd-td">28,74, 30,8</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Thmoinepsi</strong></td><td class="crd-td">29,05, 31,1</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Paploou</strong></td><td class="crd-td">27,54, 30,79</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Mounesis</strong></td><td class="crd-td">24,68, 30,61</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Umm al-Dabadib</strong></td><td class="crd-td">25,73, 30,42</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Deir Abu Matta</strong></td><td class="crd-td">25,59, 28,91</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Heroonpolis</strong></td><td class="crd-td">30,55, 32,1</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Iuliopolis</strong></td><td class="crd-td">31,23, 29,95</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Nikiou</strong></td><td class="crd-td">30,41, 30,85</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Taposiris Megale</strong></td><td class="crd-td">30,95, 29,52</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
<tr><td class="crd-td"><strong>Thambol</strong></td><td class="crd-td">30,85, 31,49</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">5k (1799AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 15 historical and oasis gazetteer centres whose documented figures peak prior to 1950AD.</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:subregion-sett-egypt} distributes all 357 included settlements across the five territorial masks using the audited spatial ledger counts. Lower Egypt (Nile Delta) hosts the largest cluster with 98 settlements (35,1 sites per 10k km²), followed by Middle Egypt and Fayum with 85 settlements (20,4 per 10k km²), Upper Egypt with 75 settlements, the Suez Canal, Sinai and Desert zone with 62 settlements and the Cairo-Alexandria metropolitan zone with 37 consolidated urban nodes.

<figure class="crd-table-figure" id="tab:subregion-sett-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">1952AD Pop.</th><th class="crd-th">Sites per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta)</strong></td><td class="crd-td">370</td><td class="crd-td">27.920</td><td class="crd-td">98</td><td class="crd-td">8,35M</td><td class="crd-td">35,1</td></tr>
<tr><td class="crd-td"><strong>Cairo and Alexandria Metropolises</strong></td><td class="crd-td">591</td><td class="crd-td">44.033</td><td class="crd-td">37</td><td class="crd-td">4,85M</td><td class="crd-td">8,4</td></tr>
<tr><td class="crd-td"><strong>Middle Egypt and Fayum</strong></td><td class="crd-td">559</td><td class="crd-td">41.760</td><td class="crd-td">85</td><td class="crd-td">3,95M</td><td class="crd-td">20,4</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt</strong></td><td class="crd-td">2.737</td><td class="crd-td">212.371</td><td class="crd-td">75</td><td class="crd-td">3,82M</td><td class="crd-td">3,5</td></tr>
<tr><td class="crd-td"><strong>Suez Canal Zone, Sinai and Desert Governorates</strong></td><td class="crd-td">8.771</td><td class="crd-td">673.839</td><td class="crd-td">62</td><td class="crd-td">530k</td><td class="crd-td">0,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial distribution of 357 catalogued settlements across Egypt's five territorial masks with 1952AD populations.</figcaption>
</figure>

Table \ref{tab:excluded-egypt} catalogues the leading 25 of 47 excluded candidate records from the regional source ledger, illustrating the removal of subordinate metropolitan quarters, duplicate transliterations and post-1952AD planned desert cities.

<figure class="crd-table-figure" id="tab:excluded-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Exclusion Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>An-Nūbāriyah al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Post-1952 foundation</td><td class="crd-td">Settlement foundation_year (None) post-dates chapter domain [1799, 1952].</td></tr>
<tr><td class="crd-td"><strong>Badr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Post-1952 foundation</td><td class="crd-td">Settlement foundation_year (1982) post-dates chapter domain [1799, 1952].</td></tr>
<tr><td class="crd-td"><strong>Al-Qāhirah al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Ziftā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Ṭalkhā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>As-Sanṭah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Qahā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Banī Suwayf al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā al-Jadīdah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Memphis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Mut el-Kharab</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Apotheke</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Pisais</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Athribis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Bolbitine</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Hermopolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Mikra</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Phakoussa</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Tanis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Aphrodito</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Koma</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Krokodilopolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
<tr><td class="crd-td"><strong>Narmouthis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Egypt.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 25 of 47 excluded candidate entries in the Egyptian source ledger, filtered for spatial deduplication and temporal domain.</figcaption>
</figure>

# Limitations

Three technical caveats apply when using this settlement gazetteer independently of the subadministrative raster surfaces. First, Būr Sa'īd (founded in April 1859) and Al-Ismā'īliyah (founded in April 1862) lack explicit foundation-year truncation in the historical census table, so exponential back-projection assigns them nominal early nineteenth-century populations (6,2k and 3,3k in 1799AD) prior to the excavation of the Suez Canal [@Ibrahim2026Matrix; @ElOmla2012Environmen]. Second, the 163 non-census historical and archaeological entries carry nominal continuity placeholders (such as 5k or 13,7k) rather than independent early modern tax-register counts; analyses of strictly modern municipal growth should restrict filtering to the 194 CAPMAS census towns peaking in 1950AD. Third, Greater Cairo's administrative boundaries separate Al-Qāhirah, Al-Jīzah, Shubrā al-Khaymah and Al-Khuṣūṣ into distinct municipal nodes despite their functional fusion into a single continuous metropolitan conurbation by 1950AD [@Hussein1965Potential].

# Conclusion

Cataloguing 357 active centres across 3.260 decennial observations, this settlement gazetteer traces Egypt's urban transition from a two-city mercantile hierarchy in 1799AD to a tightly integrated railway, cotton-processing and maritime port system by 1952AD. Alongside Cairo's twenty-eight-fold expansion to 2,76M and Alexandria's resurgence to 1,2M, the emergence of the Suez Canal corridor (Būr Sa'īd, As-Suways and Al-Ismā'īliyah) and the industrial growth of Delta hubs such as Al-Maḥallah al-Kubrā, Ṭanṭā and Al-Manṣūrah reshaped the demographic geography of modern Egypt.

# Appendix

Table \ref{tab:appendix-sett-egypt} summarises the temporal observation coverage across all 15 benchmark slices represented in the 357-settlement register.

<figure class="crd-table-figure" id="tab:appendix-sett-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Active Sites</th><th class="crd-th">Aggregate Urban Pop.</th><th class="crd-th">Median Site Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1799AD</strong></td><td class="crd-td">298</td><td class="crd-td">1,08M</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>1800AD</strong></td><td class="crd-td">164</td><td class="crd-td">753,8k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>1830AD</strong></td><td class="crd-td">176</td><td class="crd-td">677,5k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>1840AD</strong></td><td class="crd-td">182</td><td class="crd-td">846,5k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>1850AD</strong></td><td class="crd-td">348</td><td class="crd-td">1,8M</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>1860AD</strong></td><td class="crd-td">187</td><td class="crd-td">1,32M</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>1870AD</strong></td><td class="crd-td">191</td><td class="crd-td">1,64M</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>1880AD</strong></td><td class="crd-td">193</td><td class="crd-td">2,05M</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>1890AD</strong></td><td class="crd-td">194</td><td class="crd-td">2,55M</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>1900AD</strong></td><td class="crd-td">357</td><td class="crd-td">3,93M</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>1910AD</strong></td><td class="crd-td">194</td><td class="crd-td">3,96M</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>1920AD</strong></td><td class="crd-td">194</td><td class="crd-td">4,94M</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>1930AD</strong></td><td class="crd-td">194</td><td class="crd-td">6,15M</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>1940AD</strong></td><td class="crd-td">194</td><td class="crd-td">7,67M</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>1950AD</strong></td><td class="crd-td">194</td><td class="crd-td">9,55M</td><td class="crd-td">14,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Temporal coverage across all 15 benchmark slices in the 357-settlement Egyptian gazetteer.</figcaption>
</figure>

# Sources

<div id="refs"></div>
