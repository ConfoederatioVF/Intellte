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
hero_caption: "Spatial distribution of 116 individually assessed Egyptian cities, provincial towns and oasis settlements from 1799AD to 1952AD."
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

This gazetteer catalogues 116 individually assessed Egyptian cities, provincial capitals, canal ports, rural market centres and desert oasis towns active across Khedivate and British-occupied Egypt between 1799AD and 1952AD (999.923,4 km² across five territorial masks). Synthesised from the *Description de l'Égypte*, Muhammad Ali's 1846AD to 1848AD registers, the seven decennial Ministry of Finance and CAPMAS censuses from 1882AD to 1947AD and primary frontier monographs [@Kumon2023Middle; @Bosworth2007Historic; @Runfola2020GeoBoundaries], the register contains 1.136 settlement-year population observations averaging 9,79 observations per settlement across 23 benchmark dates from 1800AD to 1952AD. Out of 128 evaluated spatial candidates in the source ledger, 12 duplicate or co-located urban entities were excluded to eliminate metropolitan double counting. The urban hierarchy follows a steep primate Zipf rank-size distribution ($\alpha = 1,22$, $R^2 = 0,80$; exact $\alpha = 1,221$, $R^2 = 0,803$) anchored by Cairo (2,45M in 1952AD; 2,09M in 1947AD), Alexandria (1,08M), Port Said (202k), Tanta (156k), El-Mahalla el-Kubra (136,5k), Suez (126k), Mansoura (117,5k), Asyut (103k), Damanhur (96,5k) and Giza (96k) [@Hassad2021Urban; @Bischoff2023Cosmopolit; @Ibrahim2026Matrix].

# Background

Between the close of the eighteenth century and the 1952AD revolution, Egypt's urban network evolved from a dual-city mercantile corridor—where Cairo and an impoverished Alexandria stood atop loosely connected Nile market villages—into an integrated hydraulic, railway and maritime hierarchy [@Hassad2021Urban; @Mohamed2025Roads]. Four functional settlement classes structured Egyptian urbanisation across this 153-year interval. First, the Cairo-Alexandria metropolitan axis absorbed a rapidly rising share of national demographic growth after Muhammad Ali excavated the Mahmudiyah Canal and Khedive Isma'il linked the Delta and Upper Nile by rail [@Bischoff2023Cosmopolit; @A2022Preservati]. Cairo expanded outward from its historic walled quarters across the Nile into Giza and northward along the industrial Shubra al-Khaymah corridor [@Hassad2021Urban; @Hussein1965Potential], while Alexandria became the pre-eminent cotton-exporting port of the eastern Mediterranean, attracting substantial Greek, Italian, Levantine and Maltese mercantile communities [@Montalbano2024Mediterran; @Bischoff2023Cosmopolit].

Second, the construction of the Suez Canal between 1859AD and 1869AD created an unprecedented planned urban axis across the eastern desert isthmus [@Lutmar2023Suez]. Port Said (*Būr Sa'īd*), laid out in 1859AD on the Mediterranean sandspit, and Ismailia (*Al-Ismā'īliyah*), laid out in 1862AD and formally established in 1863AD beside Lake Timsah and the Sweet Water Canal, grew alongside the older Red Sea port of Suez (*As-Suways*) despite severe sabkha soil engineering and freshwater supply constraints [@Ibrahim2026Matrix; @ElOmla2012Environmen]. Third, across the Nile Delta mudiriyas, perennial irrigation and cotton ginning propelled rapid expansion in provincial capitals and industrial towns including El-Mahalla el-Kubra, Tanta, Mansoura, Zagazig, Damanhur, Damietta (*Dumyāṭ*) and Shibin el-Kom [@abdalsalam2025Integrated; @Mohamed2025Roads]. Fourth, along the Nile trench of Middle and Upper Egypt (*Sa'id*) and across the Saharan and Red Sea frontiers, administrative *bandar* towns—Asyut, Faiyum, Aswan, Minya, Beni Suef, Sohag (*Sawhāj*), Qena (*Qinā*) and Luxor (*Al-Uqṣur*)—alongside desert gateways such as El-Arish, Quseir and the Western Desert oases served as agricultural, military and pilgrimage nodes [@Daus1986Coptic; @Passon2020Places; @AM2022Circulatio].

# Methodology

The settlement register was compiled through a three-wave evidence-assessment saturation pipeline documented in the chapter source ledger. Wave 1 assessed 116 Egyptian census municipalities, frontier stations, mining ports and desert oasis settlements drawn from the official 1882AD to 1947AD Ministry of Finance and CAPMAS census series paired with *Description de l'Égypte* (1800AD), 1846AD to 1848AD Muhammad Ali register baselines and primary frontier monographs, processing all 128 candidate rows in bounds with zero uncalibrated continuity placeholders. Wave 2 audited measured-area archaeological and historical gazetteer records across the 116 retained nodes (zero marginal additions). Wave 3 performed an asymptotic verification sweep (zero newly included sites), auditing temporal continuity, explicit foundation-year truncation, sub-regional coverage across all five territorial masks (Lower Egypt Nile Delta, Middle Egypt and Fayum, Upper Egypt, Suez Canal Zone, Sinai and Desert Governorates, and Cairo and Alexandria Metropolises) and spatial deduplication against geoBoundaries administrative units [@Runfola2020GeoBoundaries].

Out of 128 evaluated candidates, 12 duplicate records were excluded under strict deduplication rules: 10 multi-source census and variant-spelling duplicates within 25 km of canonical Egyptian cities (Cairo, Alexandria, Port Said, Suez, Damanhur, Giza, Asyut, Beni Suef, Sohag and Abu Qir) and two co-located or variant-spelling localities situated within 2,2 km of primary cores (Benha and Belbis), while post-1952AD new desert towns remain outside the 1799AD to 1952AD domain. All retained coordinates use WGS84 decimal degrees and preserve historical alternate toponyms alongside standardised municipal names.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 128 candidate records: 116 individually assessed settlements and 12 excluded entries, leaving zero unaccounted records and zero unpopulated territorial sub-masks. Every catalogued settlement carries verified latitude-longitude coordinates, an explicit archival evidence basis and non-zero population estimates strictly bounded by its documented foundation year and the 1799AD to 1952AD domain. Figure \ref{fig:sett-gazetteer} illustrates the national rank-size distribution ($\alpha = 1,22$, $R^2 = 0,80$) alongside the leading urban centres at their 1952AD peak.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-khedivate-british-egypt-settlements/fig4_khedivate_british_egypt_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution (n=116 individually assessed settlements, Zipf alpha = 1,22, R² = 0,8) and leading urban centres across Khedivate and British-occupied Egypt.</figcaption>
</figure>

# Results

## Leading Forty-Five Settlements by Peak Population

Table \ref{tab:top45-egypt} presents the forty-five largest settlements in the gazetteer ordered by peak population within the 1799AD to 1952AD domain, demonstrating the dominance of Cairo and its adjoining metropolitan nodes (Giza, Shubra al-Khaymah and Helwan), Alexandria, the three Suez Canal ports (Port Said, Suez and Ismailia) and the principal Delta and Nile Valley provincial capitals led by Tanta, El-Mahalla el-Kubra, Mansoura, Asyut, Damanhur and Zagazig [@Bosworth2007Historic; @Ibrahim2026Matrix].

<figure class="crd-table-figure" id="tab:top45-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1800AD</th><th class="crd-th">1846AD</th><th class="crd-th">1897AD</th><th class="crd-th">1947AD</th><th class="crd-th">1952AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">30,04, 31,24</td><td class="crd-td">263k</td><td class="crd-td">253,5k</td><td class="crd-td">570,1k</td><td class="crd-td">2,09M</td><td class="crd-td">2,45M</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">31,2, 29,92</td><td class="crd-td">12k</td><td class="crd-td">104,1k</td><td class="crd-td">319,8k</td><td class="crd-td">919k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Port Said</strong></td><td class="crd-td">31,27, 32,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,1k</td><td class="crd-td">177,7k</td><td class="crd-td">202k</td></tr>
<tr><td class="crd-td"><strong>Tanta</strong></td><td class="crd-td">30,79, 31</td><td class="crd-td">10,5k</td><td class="crd-td">19,5k</td><td class="crd-td">57,3k</td><td class="crd-td">139,9k</td><td class="crd-td">156k</td></tr>
<tr><td class="crd-td"><strong>El-Mahalla el-Kubra</strong></td><td class="crd-td">30,97, 31,17</td><td class="crd-td">16,5k</td><td class="crd-td">18,2k</td><td class="crd-td">31,8k</td><td class="crd-td">115,8k</td><td class="crd-td">136,5k</td></tr>
<tr><td class="crd-td"><strong>Suez</strong></td><td class="crd-td">29,97, 32,55</td><td class="crd-td">3,2k</td><td class="crd-td">4,8k</td><td class="crd-td">17,2k</td><td class="crd-td">107,2k</td><td class="crd-td">126k</td></tr>
<tr><td class="crd-td"><strong>Mansoura</strong></td><td class="crd-td">31,04, 31,38</td><td class="crd-td">12,5k</td><td class="crd-td">15,8k</td><td class="crd-td">36,1k</td><td class="crd-td">102k</td><td class="crd-td">117,5k</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">27,18, 31,18</td><td class="crd-td">18k</td><td class="crd-td">22,5k</td><td class="crd-td">42,1k</td><td class="crd-td">90,1k</td><td class="crd-td">103k</td></tr>
<tr><td class="crd-td"><strong>Damanhur</strong></td><td class="crd-td">31,03, 30,47</td><td class="crd-td">9,5k</td><td class="crd-td">14,2k</td><td class="crd-td">32,1k</td><td class="crd-td">84,4k</td><td class="crd-td">96,5k</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">30,01, 31,21</td><td class="crd-td">6,2k</td><td class="crd-td">7,9k</td><td class="crd-td">16,8k</td><td class="crd-td">66,2k</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>Zagazig</strong></td><td class="crd-td">30,59, 31,5</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">35,7k</td><td class="crd-td">81,8k</td><td class="crd-td">94,5k</td></tr>
<tr><td class="crd-td"><strong>Faiyum</strong></td><td class="crd-td">29,31, 30,84</td><td class="crd-td">11,8k</td><td class="crd-td">15,4k</td><td class="crd-td">33,1k</td><td class="crd-td">73,6k</td><td class="crd-td">83,2k</td></tr>
<tr><td class="crd-td"><strong>Ismailia</strong></td><td class="crd-td">30,6, 32,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">68,2k</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Minya</strong></td><td class="crd-td">28,11, 30,75</td><td class="crd-td">7,8k</td><td class="crd-td">10,6k</td><td class="crd-td">20,4k</td><td class="crd-td">70,3k</td><td class="crd-td">79,4k</td></tr>
<tr><td class="crd-td"><strong>Beni Suef</strong></td><td class="crd-td">29,07, 31,1</td><td class="crd-td">5,4k</td><td class="crd-td">7,2k</td><td class="crd-td">18,2k</td><td class="crd-td">57,1k</td><td class="crd-td">64,2k</td></tr>
<tr><td class="crd-td"><strong>Shubra al-Khaymah</strong></td><td class="crd-td">30,13, 31,24</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">38,6k</td><td class="crd-td">62k</td></tr>
<tr><td class="crd-td"><strong>Damietta</strong></td><td class="crd-td">31,42, 31,81</td><td class="crd-td">28k</td><td class="crd-td">27,8k</td><td class="crd-td">31,5k</td><td class="crd-td">53,6k</td><td class="crd-td">59,8k</td></tr>
<tr><td class="crd-td"><strong>Helwan</strong></td><td class="crd-td">29,84, 31,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">5,2k</td><td class="crd-td">41,2k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Sohag</strong></td><td class="crd-td">26,56, 31,69</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k</td><td class="crd-td">14,3k</td><td class="crd-td">43,2k</td><td class="crd-td">49,2k</td></tr>
<tr><td class="crd-td"><strong>Qena</strong></td><td class="crd-td">26,16, 32,72</td><td class="crd-td">8,2k</td><td class="crd-td">10,9k</td><td class="crd-td">27,5k</td><td class="crd-td">42,9k</td><td class="crd-td">47,8k</td></tr>
<tr><td class="crd-td"><strong>Shibin el-Kom</strong></td><td class="crd-td">30,55, 31,01</td><td class="crd-td">6,8k</td><td class="crd-td">10,2k</td><td class="crd-td">20,7k</td><td class="crd-td">41,6k</td><td class="crd-td">47,2k</td></tr>
<tr><td class="crd-td"><strong>Banha</strong></td><td class="crd-td">30,46, 31,18</td><td class="crd-td">4,1k</td><td class="crd-td">5,9k</td><td class="crd-td">11,6k</td><td class="crd-td">35,9k</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td"><strong>Tahta</strong></td><td class="crd-td">26,77, 31,5</td><td class="crd-td">7,2k</td><td class="crd-td">9,8k</td><td class="crd-td">16,2k</td><td class="crd-td">37,1k</td><td class="crd-td">40,2k</td></tr>
<tr><td class="crd-td"><strong>Mallawi</strong></td><td class="crd-td">27,73, 30,84</td><td class="crd-td">6,4k</td><td class="crd-td">8,6k</td><td class="crd-td">15,5k</td><td class="crd-td">35,6k</td><td class="crd-td">40,1k</td></tr>
<tr><td class="crd-td"><strong>Akhmim</strong></td><td class="crd-td">26,56, 31,75</td><td class="crd-td">10,2k</td><td class="crd-td">13,6k</td><td class="crd-td">21,9k</td><td class="crd-td">34,8k</td><td class="crd-td">37,4k</td></tr>
<tr><td class="crd-td"><strong>Girga</strong></td><td class="crd-td">26,34, 31,89</td><td class="crd-td">9,8k</td><td class="crd-td">12,4k</td><td class="crd-td">17,3k</td><td class="crd-td">33,6k</td><td class="crd-td">36,8k</td></tr>
<tr><td class="crd-td"><strong>Kafr el-Dawwar</strong></td><td class="crd-td">31,13, 30,13</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">23,6k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Zifta</strong></td><td class="crd-td">30,71, 31,24</td><td class="crd-td">5,8k</td><td class="crd-td">7,9k</td><td class="crd-td">14k</td><td class="crd-td">31k</td><td class="crd-td">34,5k</td></tr>
<tr><td class="crd-td"><strong>Menuf</strong></td><td class="crd-td">30,47, 30,93</td><td class="crd-td">8,9k</td><td class="crd-td">12,5k</td><td class="crd-td">20,7k</td><td class="crd-td">31,5k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Mit Ghamr</strong></td><td class="crd-td">30,72, 31,27</td><td class="crd-td">6,2k</td><td class="crd-td">8,1k</td><td class="crd-td">13k</td><td class="crd-td">29k</td><td class="crd-td">32,4k</td></tr>
<tr><td class="crd-td"><strong>Qalyub</strong></td><td class="crd-td">30,18, 31,21</td><td class="crd-td">5,6k</td><td class="crd-td">7,4k</td><td class="crd-td">13,5k</td><td class="crd-td">28,4k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Desouk</strong></td><td class="crd-td">31,13, 30,65</td><td class="crd-td">4,3k</td><td class="crd-td">6,4k</td><td class="crd-td">11,9k</td><td class="crd-td">27,4k</td><td class="crd-td">31,1k</td></tr>
<tr><td class="crd-td"><strong>El-Matariya</strong></td><td class="crd-td">31,18, 32,03</td><td class="crd-td">4,2k</td><td class="crd-td">6,8k</td><td class="crd-td">12,9k</td><td class="crd-td">28,1k</td><td class="crd-td">30,9k</td></tr>
<tr><td class="crd-td"><strong>Luxor</strong></td><td class="crd-td">25,69, 32,64</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">11,2k</td><td class="crd-td">27,5k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Rosetta</strong></td><td class="crd-td">31,4, 30,42</td><td class="crd-td">15k</td><td class="crd-td">14,2k</td><td class="crd-td">14,3k</td><td class="crd-td">28,7k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Aswan</strong></td><td class="crd-td">24,09, 32,9</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">13k</td><td class="crd-td">26,3k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Kafr el-Sheikh</strong></td><td class="crd-td">31,11, 30,94</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">7,9k</td><td class="crd-td">24,4k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Sinnuris</strong></td><td class="crd-td">29,41, 30,87</td><td class="crd-td">4,4k</td><td class="crd-td">6,5k</td><td class="crd-td">13,4k</td><td class="crd-td">25,8k</td><td class="crd-td">28,1k</td></tr>
<tr><td class="crd-td"><strong>El-Fashn</strong></td><td class="crd-td">28,82, 30,9</td><td class="crd-td">3,2k</td><td class="crd-td">4,8k</td><td class="crd-td">10,2k</td><td class="crd-td">25k</td><td class="crd-td">27,4k</td></tr>
<tr><td class="crd-td"><strong>Faqus</strong></td><td class="crd-td">30,73, 31,8</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">9,1k</td><td class="crd-td">24,2k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>Maghagha</strong></td><td class="crd-td">28,65, 30,84</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">8,9k</td><td class="crd-td">24,1k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>Ashmun</strong></td><td class="crd-td">30,3, 30,98</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td><td class="crd-td">10,9k</td><td class="crd-td">24,4k</td><td class="crd-td">26,6k</td></tr>
<tr><td class="crd-td"><strong>Manfalut</strong></td><td class="crd-td">27,31, 30,97</td><td class="crd-td">7,4k</td><td class="crd-td">9,6k</td><td class="crd-td">15,2k</td><td class="crd-td">24,4k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">30,42, 31,56</td><td class="crd-td">5,4k</td><td class="crd-td">7,6k</td><td class="crd-td">13,5k</td><td class="crd-td">24,2k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Kafr el-Zayat</strong></td><td class="crd-td">30,82, 30,82</td><td class="crd-td">2,6k</td><td class="crd-td">4,4k</td><td class="crd-td">10,7k</td><td class="crd-td">23,9k</td><td class="crd-td">26,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 individually assessed Egyptian settlements ordered by peak documented population (n=116 sites, all top 45 peaking in 1952AD; dashes denote dates preceding town foundation).</figcaption>
</figure>

## Post-1800 Foundations and Pre-1952 Nubian Peaks

Eleven settlements in the 116-site register originated after 1800AD through Khedival hydraulic engineering, Suez Canal excavation, suburban railway expansion or Red Sea mineral and oil development—spanning Zagazig (1832AD), El-Qanater el-Khayriya (1843AD), Port Said (1859AD), El-Qantara (1861AD), Ismailia (1863AD), Maadi (1904AD), Hurghada (1905AD), Safaga (1911AD), Abu Zenima (1913AD), Port Fuad (1926AD) and Ras Gharib (1938AD)—and carry explicit foundation-year truncation so no pre-construction figures appear [@Ibrahim2026Matrix; @ElOmla2012Environmen]. Conversely, two Lower Nubian stations reached their maximum documented population prior to 1952AD: Korosko (peaking at 2,7k in 1897AD as an Anglo-Egyptian caravan and military depot before the 1899AD Sudan Railway bypassed it) and El-Derr (peaking at 2,6k in 1897AD before the 1933AD second heightening of the Aswan Low Dam inundated its low-lying riverfront and shifted Nubia's administrative seat to Aniba). Table \ref{tab:early-peaks-egypt} lists all thirteen post-1800AD foundations and pre-1952AD peak settlements [@Passon2020Places].

<figure class="crd-table-figure" id="tab:early-peaks-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Founded</th><th class="crd-th">1897AD</th><th class="crd-th">1947AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Said</strong></td><td class="crd-td">31,27, 32,3</td><td class="crd-td">1859AD</td><td class="crd-td">42,1k</td><td class="crd-td">177,7k</td><td class="crd-td">202k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Zagazig</strong></td><td class="crd-td">30,59, 31,5</td><td class="crd-td">1832AD</td><td class="crd-td">35,7k</td><td class="crd-td">81,8k</td><td class="crd-td">94,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ismailia</strong></td><td class="crd-td">30,6, 32,27</td><td class="crd-td">1863AD</td><td class="crd-td">6,8k</td><td class="crd-td">68,2k</td><td class="crd-td">82,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Maadi</strong></td><td class="crd-td">29,96, 31,26</td><td class="crd-td">1904AD</td><td class="crd-td">-</td><td class="crd-td">18,4k</td><td class="crd-td">25,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>El-Qanater el-Khayriya</strong></td><td class="crd-td">30,19, 31,13</td><td class="crd-td">1843AD</td><td class="crd-td">4,9k</td><td class="crd-td">15,5k</td><td class="crd-td">17,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>El-Qantara</strong></td><td class="crd-td">30,85, 32,31</td><td class="crd-td">1861AD</td><td class="crd-td">1,7k</td><td class="crd-td">7,8k</td><td class="crd-td">9,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Hurghada</strong></td><td class="crd-td">27,26, 33,81</td><td class="crd-td">1905AD</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Port Fuad</strong></td><td class="crd-td">31,24, 32,32</td><td class="crd-td">1926AD</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">5,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ras Gharib</strong></td><td class="crd-td">28,36, 33,08</td><td class="crd-td">1938AD</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Safaga</strong></td><td class="crd-td">26,75, 33,94</td><td class="crd-td">1911AD</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Zenima</strong></td><td class="crd-td">29,05, 33,1</td><td class="crd-td">1913AD</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Korosko</strong></td><td class="crd-td">22,62, 32,33</td><td class="crd-td">Pre-1800</td><td class="crd-td">2,6k</td><td class="crd-td">680</td><td class="crd-td">2,6k (1897AD)</td></tr>
<tr><td class="crd-td"><strong>El-Derr</strong></td><td class="crd-td">22,73, 32,22</td><td class="crd-td">Pre-1800</td><td class="crd-td">2,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k (1897AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Post-1800AD foundations (11 planned canal, barrage, suburban and mineral towns) and pre-1952AD peak settlements (2 Lower Nubian stations).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:subregion-sett-egypt} distributes all 116 individually assessed settlements across the five territorial masks using the audited spatial ledger counts. Lower Egypt (Nile Delta) hosts the largest cluster with 35 settlements (12,5 sites per 10k km²), followed by Upper Egypt with 25 settlements (1,2 per 10k km²), the Suez Canal, Sinai and Desert zone with 23 settlements (0,3 per 10k km²), Middle Egypt and Fayum with 19 settlements (4,5 per 10k km²) and the Cairo-Alexandria metropolitan zone with 14 consolidated urban nodes (3,2 per 10k km²).

<figure class="crd-table-figure" id="tab:subregion-sett-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Cells</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">1952AD Pop.</th><th class="crd-th">Sites per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta)</strong></td><td class="crd-td">370</td><td class="crd-td">27.920</td><td class="crd-td">35</td><td class="crd-td">8,35M</td><td class="crd-td">12,5</td></tr>
<tr><td class="crd-td"><strong>Cairo and Alexandria Metropolises</strong></td><td class="crd-td">591</td><td class="crd-td">44.033</td><td class="crd-td">14</td><td class="crd-td">4,85M</td><td class="crd-td">3,2</td></tr>
<tr><td class="crd-td"><strong>Middle Egypt and Fayum</strong></td><td class="crd-td">559</td><td class="crd-td">41.760</td><td class="crd-td">19</td><td class="crd-td">3,95M</td><td class="crd-td">4,5</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt</strong></td><td class="crd-td">2.737</td><td class="crd-td">212.371</td><td class="crd-td">25</td><td class="crd-td">3,82M</td><td class="crd-td">1,2</td></tr>
<tr><td class="crd-td"><strong>Suez Canal Zone, Sinai and Desert Governorates</strong></td><td class="crd-td">8.771</td><td class="crd-td">673.839</td><td class="crd-td">23</td><td class="crd-td">530k</td><td class="crd-td">0,3</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial distribution of 116 individually assessed settlements across Egypt's five territorial masks with 1952AD populations.</figcaption>
</figure>

Table \ref{tab:excluded-egypt} catalogues all 12 excluded candidate records from the regional source ledger, illustrating the consolidation of multi-source census duplicates and co-located localities into canonical municipal tracks.

<figure class="crd-table-figure" id="tab:excluded-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Exclusion Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Port Said</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Suez</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Damanhur</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Beni Suef</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Benha</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Sohag</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Belbis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate urban unit</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Abu Qir</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Variant-spelling duplicate</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> All 12 excluded candidate entries in the Egyptian source ledger, filtered for spatial deduplication and multi-source census consolidation.</figcaption>
</figure>

# Limitations

Three technical caveats apply when using this settlement gazetteer independently of the subadministrative raster surfaces. First, although explicit foundation-year truncation prevents anachronistic pre-construction estimates for all eleven post-1800AD towns—including Port Said (1859AD), Ismailia (1863AD), Zagazig (1832AD) and the Red Sea oil and phosphate ports—early nineteenth-century figures for 1800AD and 1846AD combine *Description de l'Égypte* municipal reconstructions and Muhammad Ali's provincial household registers with wider uncertainty margins than the decennial 1882AD to 1947AD official censuses [@Kumon2023Middle; @Ibrahim2026Matrix; @ElOmla2012Environmen]. Second, the 1952AD terminal figures represent five-year extrapolations from the 1947AD census anchored to provincial growth rates rather than an independent 1952AD municipal enumeration, while intermediate city-specific historical dates (including 1821AD, 1835AD, 1865AD, 1869AD, 1870AD and 1926AD) appear only for specific cities experiencing rapid maritime, canal-era or census-specific inflection (Alexandria, Port Said, Suez, Ismailia, El-Qantara and Abu Qir). Third, Greater Cairo's municipal census boundaries separate Cairo, Giza, Shubra al-Khaymah, Helwan and Maadi into distinct administrative nodes despite their progressive functional integration into a single continuous metropolitan conurbation by 1952AD [@Hussein1965Potential].

# Conclusion

Cataloguing 116 individually assessed centres across 1.136 benchmark observations, this settlement gazetteer traces Egypt's urban transition from a late Ottoman agrarian hierarchy in 1800AD to a tightly integrated railway, cotton-processing and maritime port system by 1952AD. Alongside Cairo's more than ninefold expansion from 263k to 2,45M and Alexandria's ninety-fold resurgence from 12k to 1,08M, the emergence of the Suez Canal corridor (Port Said at 202k, Suez at 126k and Ismailia at 82,5k) and the industrial growth of Delta hubs such as Tanta (156k), El-Mahalla el-Kubra (136,5k) and Mansoura (117,5k) reshaped the demographic geography of modern Egypt.

# Appendix

Table \ref{tab:appendix-sett-egypt} summarises the temporal observation coverage across all 23 benchmark dates represented in the 116-settlement register (ten principal national benchmarks from 1800AD to 1952AD plus 13 city-specific historical milestones).

<figure class="crd-table-figure" id="tab:appendix-sett-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Active Sites</th><th class="crd-th">Aggregate Urban Pop.</th><th class="crd-th">Median Site Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1800AD</strong></td><td class="crd-td">105</td><td class="crd-td">688,9k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>1821AD</strong></td><td class="crd-td">1</td><td class="crd-td">16,5k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>1835AD</strong></td><td class="crd-td">1</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>1846AD</strong></td><td class="crd-td">107</td><td class="crd-td">918,1k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>1859AD</strong></td><td class="crd-td">1</td><td class="crd-td">254k</td><td class="crd-td">254k</td></tr>
<tr><td class="crd-td"><strong>1865AD</strong></td><td class="crd-td">2</td><td class="crd-td">288,1k</td><td class="crd-td">144,1k</td></tr>
<tr><td class="crd-td"><strong>1869AD</strong></td><td class="crd-td">1</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>1870AD</strong></td><td class="crd-td">3</td><td class="crd-td">316,4k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>1877AD</strong></td><td class="crd-td">1</td><td class="crd-td">327,5k</td><td class="crd-td">327,5k</td></tr>
<tr><td class="crd-td"><strong>1882AD</strong></td><td class="crd-td">110</td><td class="crd-td">1,48M</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>1884AD</strong></td><td class="crd-td">1</td><td class="crd-td">7,3k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>1891AD</strong></td><td class="crd-td">1</td><td class="crd-td">15k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>1897AD</strong></td><td class="crd-td">110</td><td class="crd-td">2,06M</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>1904AD</strong></td><td class="crd-td">1</td><td class="crd-td">624k</td><td class="crd-td">624k</td></tr>
<tr><td class="crd-td"><strong>1907AD</strong></td><td class="crd-td">112</td><td class="crd-td">2,33M</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>1917AD</strong></td><td class="crd-td">114</td><td class="crd-td">2,84M</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>1926AD</strong></td><td class="crd-td">1</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>1927AD</strong></td><td class="crd-td">115</td><td class="crd-td">3,57M</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>1928AD</strong></td><td class="crd-td">1</td><td class="crd-td">20,8k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>1937AD</strong></td><td class="crd-td">115</td><td class="crd-td">4,28M</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>1941AD</strong></td><td class="crd-td">1</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>1947AD</strong></td><td class="crd-td">116</td><td class="crd-td">6,06M</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>1952AD</strong></td><td class="crd-td">116</td><td class="crd-td">7,03M</td><td class="crd-td">22,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Temporal coverage across all 23 benchmark dates in the 116-settlement Egyptian gazetteer.</figcaption>
</figure>

# Sources

<div id="refs"></div>
