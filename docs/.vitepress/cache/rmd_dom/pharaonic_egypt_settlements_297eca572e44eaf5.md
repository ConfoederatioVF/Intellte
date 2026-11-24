---
title: "Pharaonic Egypt to the Persian Conquest"
subtitle: "Settlement Gazetteer: Capitals, Nome Centres, Oases and Desert Harbours, 3200BC to 525BC"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: pharaonic_egypt_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_pharaonic_egypt_spatial.png"
hero_caption: "Spatial distribution of 195 individually assessed settlements across Upper and Lower Egypt, the Fayum depression and the desert oases through 525BC."
hero_label: "fig:hero-pharaonic-egypt-settlements"
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

This gazetteer documents 195 individually assessed nucleated settlements, royal capitals, provincial nome centres, desert oasis towns and Red Sea mining ports active across Pharaonic Egypt between 3200BC and 525BC, spanning six analytical territories covering 999.989 km² (11.050 five-arcminute cells). Synthesising primary excavation monographs, measured-area archaeological corpora (Palmisano et al. 2021; Titolo and Palmisano 2025), the Published Excavations Atlas, the Egypt Exploration Society (EES) Delta Survey, the Pleiades Ancient World Gazetteer and historical registers, the catalogue captures 1.225 settlement-year population observations averaging 6,3 temporal checkpoints per site [@Kohler2017Developmen; @Moeller2015Archaeolog; @Elfadaly2019Discoverin]. At the apex stand Memphis (88,5k), Pi-Ramesses (79k) and Thebes (77,5k), followed by major dynastic seats at Sais (48,5k), Avaris (42,5k), Tanis (39,8k), Itjtawy (34,8k), Bubastis (34,6k) and Akhetaten/Amarna (34,2k), provincial nome capitals including Heliopolis (28,6k), Herakleopolis Magna (27,6k), Hermopolis Magna (26,9k), Mendes (24,2k), Asyut (23,6k), Akhmim (19,6k), Giza (18,8k), Crocodilopolis (18,6k), Athribis (18,4k), Coptos (17,4k), Sebennytos (16,8k), Dendera (15,9k), Buto (15,2k) and Abydos (14,6k), alongside Western Desert oasis nodes at Balat (4,5k), Hibis (4,2k), Umm Mawagir (3,9k), Mut el-Kharab (3,8k), El-Bawiti (3,7k) and Aghurmi (Siwa, 2,4k) [@Love2003Questionin; @Hubschmann2010Inhabited; @Dabbs2025Mortality]. Alongside the 195 included settlements, the regional source ledger records 91 excluded candidates—67 subordinate suburbs and satellite mounds merged within 3,2 km and 24 variant-spelling duplicates consolidated within 25 km—out of 286 evaluated entities, anchored to geoBoundaries subadministrative GIS geometry [@Runfola2020GeoBoundaries].

# Background

Urbanism in Pharaonic Egypt evolved in tight step with Nile inundation management, state labour mobilisation and overland mineral logistics [@Kohler2017Developmen; @Moeller2015Archaeolog]. During the Predynastic and Early Dynastic transition (3200BC to 2686BC), walled provincial nuclei emerged along elevated river levees in Upper Egypt—notably Hierakonpolis (Nekhen), Naqada (Nubt), Abydos (Ebot) and El Kab—while commercial tell settlements at Bouto, Tell el-Farkha, Tell el-Iswid and Maadi linked the Delta to Levantine caravan routes [@Agnieszka2016Nile; @Kohler2017Developmen]. The foundation of Memphis at the Delta apex established a durable administrative pivot commanding both river navigation and the nearby Ahramat channel along which Old Kingdom pyramid crews moved limestone and timber [@Love2003Questionin; @Ghoneim2024Egyptian; @Younes2023Pyramid].

During the Old and Middle Kingdoms (2686BC to 1650BC), Egyptian settlement morphology diversified beyond natural levee tells. Royal mortuary institutions built orthogonal worker and priestly towns such as Heit el-Ghurab at Giza, Kahun (el-Lahun) at the Fayum mouth and planned fortress garrisons in Lower Nubia [@Moeller2015Archaeolog; @Romer2017Nile; @Ferreira2019Lower]. Concurrently, state mining and maritime expeditions established seasonal or fortified bases at Wadi al-Jarf and Ayn Soukhna on the Gulf of Suez, Saww (Mersa Gawasis) on the Red Sea coast, Bir Nasib in Sinai, and Balat (Ayn el-Gazareen) in Dakhla Oasis [@Rademakers2018Copper; @Hubschmann2010Inhabited].

In the Second Intermediate Period and New Kingdom (1650BC to 1069BC), eastern Delta ports such as Tell el-Dab'a (Avaris) and later Pi-Ramesses absorbed dense Levantine and Mediterranean migration [@Stantis2021Multi]. Meanwhile, Thebes (Diospolis Magna) expanded around the Karnak and Luxor temple complexes, Memphis retained its industrial and necropolis hinterland across Saqqara [@Staring2023Saqqara], and Akhenaten's brief Amarna capital created an instant desert metropolis in Middle Egypt [@Kulmar2018Possible; @Dabbs2025Mortality]. During the Third Intermediate Period and Saite Dynasty to 525BC, Delta temple cities—Tanis, Bubastis, Mendes, Sais and the Sinai border bastion of Pelusium—anchored northern Egypt's commercial revival [@Bennett2019Archaeolog; @Siegel2025Appraisal].

# Methodology

Settlement entries in this gazetteer were assembled through three-wave saturation auditing across curated archaeological registers, measured-area urban corpora (Palmisano et al. 2021; Titolo and Palmisano 2025) and primary excavation monographs, exhausting 286 in-bounds candidate records drawn from the EES Delta Survey Gazetteer, Published Excavations Atlas, Pleiades Ancient World Gazetteer, Al-Thurayya, NERD and EAMENA (108 verified core settlements assessed in Wave 1, 87 additional measured-area archaeological sites led by EES Delta Survey tells integrated in Wave 2 and zero uncaptured sites remaining in the Wave 3 asymptotic sweep). Every included site carries verified decimal-degree WGS84 coordinates, an explicit foundation year, a site-specific archaeological evidence basis and longitudinal population estimates sampled at historically tailored chronological checkpoints spanning each site's documented occupation between 3200BC and 525BC.

To prevent double-counting contiguous urban wards, satellite necropolis mounds and modern Arabic versus classical Greek or Egyptian toponym doublets, HANDBOOK applies strict spatial consolidation rules recorded in the chapter source ledger. Across 286 evaluated candidate entities, 67 co-located subordinate wards and satellite tells situated within 3,2 km of a primary urban core were merged into their parent metropolis—such as Deir el-Medina, Heroonpolis and Terenuthis—while 24 multi-source variant-spelling duplicates within 25 km (including duplicate register entries for Bubastis, Buto, Mendes and Kom Firin) were consolidated. For regional breakdown, each of the 195 individually assessed settlements is mapped to Egypt's six ecological divisions and reconciled with subadministrative census boundaries from geoBoundaries [@Runfola2020GeoBoundaries].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 286 candidate features (195 included plus 91 excluded, zero unaccounted records). All 195 individually assessed settlements hold valid geographic coordinates spanning 22,65°N to 31,43°N latitude and 25,54°E to 34,04°E longitude, with 1.225 positive settlement-year entries averaging 6,3 temporal checkpoints per site across the Pharaonic span (3200BC to 525BC). Rank-size evaluation yields a tightly fitted Zipf slope of $\alpha = 0,87$ ($R^2 = 0,97$, unrounded $\alpha = 0,871$), reflecting a strongly graded hierarchy beneath Memphis (88,5k), Pi-Ramesses (79k) and Thebes (77,5k) through dynastic seats, provincial nome capitals and desert outposts (Figure \ref{fig:sett-gazetteer}).

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-pharaonic-egypt-settlements/fig4_pharaonic_egypt_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 195 individually assessed settlements (Zipf slope 0,87, R² = 0,97) and leading twelve Pharaonic capitals, nome centres and ports across Egypt through 525BC.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-egypt} lists the leading 45 settlements ordered by peak documented population, highlighting the tripartite imperial primacy of Memphis (88,5k), Pi-Ramesses (79k) and Thebes (77,5k), followed by dynastic capitals at Sais (48,5k), Avaris (42,5k), Tanis (39,8k), Itjtawy (34,8k), Bubastis (34,6k) and Amarna (34,2k) above Egypt's provincial nome capitals, Fayum hydraulic towns and Sinai-Red Sea frontier ports.

<figure class="crd-table-figure" id="tab:top45-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2500BC</th><th class="crd-th">1300BC</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Memphis</strong></td><td class="crd-td">29,85, 31,26</td><td class="crd-td">3100BC-525BC</td><td class="crd-td">68,8k</td><td class="crd-td">83,5k</td><td class="crd-td">88,5k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Pi-Ramesses</strong></td><td class="crd-td">30,82, 31,84</td><td class="crd-td">1285BC-600BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">79k (1200BC)</td></tr>
<tr><td class="crd-td"><strong>Thebes</strong></td><td class="crd-td">25,72, 32,66</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5,4k</td><td class="crd-td">74,3k</td><td class="crd-td">77,5k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Sais</strong></td><td class="crd-td">30,97, 30,77</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">4,9k</td><td class="crd-td">8,6k</td><td class="crd-td">48,5k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Avaris</strong></td><td class="crd-td">30,78, 31,82</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,8k</td><td class="crd-td">9,4k</td><td class="crd-td">42,5k (1600BC)</td></tr>
<tr><td class="crd-td"><strong>Tanis</strong></td><td class="crd-td">30,98, 31,88</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,9k</td><td class="crd-td">10,3k</td><td class="crd-td">39,8k (950BC)</td></tr>
<tr><td class="crd-td"><strong>Itjtawy</strong></td><td class="crd-td">29,57, 31,23</td><td class="crd-td">1980BC-650BC</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">34,8k (1800BC)</td></tr>
<tr><td class="crd-td"><strong>Bubastis</strong></td><td class="crd-td">30,57, 31,52</td><td class="crd-td">2700BC-525BC</td><td class="crd-td">5,7k</td><td class="crd-td">14,3k</td><td class="crd-td">34,6k (850BC)</td></tr>
<tr><td class="crd-td"><strong>Amarna</strong></td><td class="crd-td">27,64, 30,9</td><td class="crd-td">1345BC-1310BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,2k (1335BC)</td></tr>
<tr><td class="crd-td"><strong>Heliopolis</strong></td><td class="crd-td">30,13, 31,31</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">12,4k</td><td class="crd-td">28,6k</td><td class="crd-td">28,6k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Herakleopolis Magna</strong></td><td class="crd-td">29,09, 30,93</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">7,2k</td><td class="crd-td">15,4k</td><td class="crd-td">27,6k (2100BC)</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Magna</strong></td><td class="crd-td">27,78, 30,8</td><td class="crd-td">2600BC-525BC</td><td class="crd-td">6,7k</td><td class="crd-td">23,9k</td><td class="crd-td">26,9k (730BC)</td></tr>
<tr><td class="crd-td"><strong>Mendes</strong></td><td class="crd-td">30,96, 31,52</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5,4k</td><td class="crd-td">11,3k</td><td class="crd-td">24,2k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">27,18, 31,18</td><td class="crd-td">2800BC-525BC</td><td class="crd-td">6,8k</td><td class="crd-td">22,8k</td><td class="crd-td">23,6k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Akhmim</strong></td><td class="crd-td">26,56, 31,75</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">7,7k</td><td class="crd-td">18,8k</td><td class="crd-td">19,6k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">29,97, 31,14</td><td class="crd-td">2600BC-525BC</td><td class="crd-td">14,4k</td><td class="crd-td">1,6k</td><td class="crd-td">18,8k (2550BC)</td></tr>
<tr><td class="crd-td"><strong>Crocodilopolis</strong></td><td class="crd-td">29,32, 30,84</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,6k</td><td class="crd-td">14k</td><td class="crd-td">18,6k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Athribis</strong></td><td class="crd-td">30,47, 31,19</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">4,1k</td><td class="crd-td">12,5k</td><td class="crd-td">18,4k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Coptos</strong></td><td class="crd-td">26, 32,82</td><td class="crd-td">3100BC-525BC</td><td class="crd-td">7,8k</td><td class="crd-td">17,4k</td><td class="crd-td">17,4k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Sebennytos</strong></td><td class="crd-td">30,96, 31,24</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,2k</td><td class="crd-td">8,8k</td><td class="crd-td">16,8k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Dendera</strong></td><td class="crd-td">26,14, 32,67</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">15,5k</td><td class="crd-td">15,9k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Buto</strong></td><td class="crd-td">31,2, 30,74</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">5,4k</td><td class="crd-td">9,6k</td><td class="crd-td">15,2k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Leontopolis</strong></td><td class="crd-td">30,68, 31,36</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">4,1k</td><td class="crd-td">7,5k</td><td class="crd-td">14,9k (800BC)</td></tr>
<tr><td class="crd-td"><strong>Abydos</strong></td><td class="crd-td">26,18, 31,92</td><td class="crd-td">3100BC-525BC</td><td class="crd-td">6,2k</td><td class="crd-td">14,6k</td><td class="crd-td">14,6k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Xois</strong></td><td class="crd-td">31,09, 30,95</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,1k</td><td class="crd-td">10,1k</td><td class="crd-td">14,2k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Tell el-Balamun</strong></td><td class="crd-td">31,26, 31,57</td><td class="crd-td">2000BC-525BC</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">13,8k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Thinis</strong></td><td class="crd-td">26,34, 31,89</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">9,6k</td><td class="crd-td">10,7k</td><td class="crd-td">13,6k (3000BC)</td></tr>
<tr><td class="crd-td"><strong>Naukratis</strong></td><td class="crd-td">30,9, 30,59</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">13,4k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Busiris</strong></td><td class="crd-td">30,91, 31,25</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">4,8k</td><td class="crd-td">8,7k</td><td class="crd-td">13,3k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Esna</strong></td><td class="crd-td">25,29, 32,56</td><td class="crd-td">2400BC-525BC</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">12,6k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Armant</strong></td><td class="crd-td">25,62, 32,54</td><td class="crd-td">3200BC-525BC</td><td class="crd-td">6,1k</td><td class="crd-td">10,8k</td><td class="crd-td">11,5k (1900BC)</td></tr>
<tr><td class="crd-td"><strong>Thonis-Heracleion</strong></td><td class="crd-td">31,31, 30,13</td><td class="crd-td">800BC-525BC</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (550BC)</td></tr>
<tr><td class="crd-td"><strong>Qaw el-Kebir</strong></td><td class="crd-td">26,9, 31,52</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">4,9k</td><td class="crd-td">9,7k</td><td class="crd-td">11,2k (1850BC)</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Parva</strong></td><td class="crd-td">31,04, 30,47</td><td class="crd-td">2200BC-525BC</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">11,1k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Oxyrhynchus</strong></td><td class="crd-td">28,54, 30,65</td><td class="crd-td">1500BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">10,8k (525BC)</td></tr>
<tr><td class="crd-td"><strong>Cusae</strong></td><td class="crd-td">27,44, 30,82</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">4,2k</td><td class="crd-td">10,5k</td><td class="crd-td">10,5k (1300BC)</td></tr>
<tr><td class="crd-td"><strong>Elkab</strong></td><td class="crd-td">25,12, 32,8</td><td class="crd-td">3000BC-525BC</td><td class="crd-td">5,4k</td><td class="crd-td">8,6k</td><td class="crd-td">10,4k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Atfih</strong></td><td class="crd-td">29,41, 31,25</td><td class="crd-td">2500BC-525BC</td><td class="crd-td">3,4k</td><td class="crd-td">8,2k</td><td class="crd-td">9,9k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Hierakonpolis</strong></td><td class="crd-td">25,09, 32,78</td><td class="crd-td">3200BC-650BC</td><td class="crd-td">4,6k</td><td class="crd-td">2,3k</td><td class="crd-td">9,8k (3200BC)</td></tr>
<tr><td class="crd-td"><strong>Phakousa</strong></td><td class="crd-td">30,73, 31,8</td><td class="crd-td">1450BC-525BC</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">9,6k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Letopolis</strong></td><td class="crd-td">30,12, 31,14</td><td class="crd-td">2600BC-525BC</td><td class="crd-td">2,1k</td><td class="crd-td">6,7k</td><td class="crd-td">9,4k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Edfu</strong></td><td class="crd-td">24,98, 32,87</td><td class="crd-td">2600BC-525BC</td><td class="crd-td">3,9k</td><td class="crd-td">7,4k</td><td class="crd-td">8,9k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Hu</strong></td><td class="crd-td">26,02, 32,28</td><td class="crd-td">3100BC-525BC</td><td class="crd-td">4,4k</td><td class="crd-td">8,6k</td><td class="crd-td">8,8k (1250BC)</td></tr>
<tr><td class="crd-td"><strong>Elephantine</strong></td><td class="crd-td">24,09, 32,89</td><td class="crd-td">3100BC-525BC</td><td class="crd-td">4,1k</td><td class="crd-td">7,8k</td><td class="crd-td">8,7k (600BC)</td></tr>
<tr><td class="crd-td"><strong>Kom Ombo</strong></td><td class="crd-td">24,45, 32,93</td><td class="crd-td">2100BC-525BC</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">8,5k (600BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Pharaonic Egypt ordered by peak population (195 individually assessed settlements).</figcaption>
</figure>

## Sub-Regional Settlement Distribution

Table \ref{tab:regsum-egypt} groups all 195 individually assessed settlements across Egypt's six ecological sub-regions. Lower Egypt (Nile Delta) accounts for the largest share of sites (116 centres, 59,5%), led by Pi-Ramesses (79k), Sais (48,5k), Avaris (42,5k), Tanis (39,8k) and Bubastis (34,6k) alongside buried Delta nome tells documented by the EES Delta Survey [@Elfadaly2019Discoverin]. Upper Egypt (the Thebaid) accounts for 26 sites (13,3%), led by Thebes (77,5k), Akhmim (19,6k), Coptos (17,4k) and Dendera (15,9k). The Memphis and Fayum core contributes 18 sites (9,2%), headed by Memphis (88,5k), Itjtawy (34,8k), Heliopolis (28,6k) and Herakleopolis Magna (27,6k), while Middle Egypt contributes 15 sites (7,7%), led by Amarna (34,2k), Hermopolis Magna (26,9k) and Asyut (23,6k). Sinai and the Eastern Desert comprise 11 sites (5,6%), led by Pelusium (6,2k), Tell Hebua (5,4k) and Red Sea expedition harbours at Wadi al-Jarf (2,4k) and Mersa Gawasis (2,3k) [@Rademakers2018Copper; @Siegel2025Appraisal], while the Western Desert Oases encompass 9 centres (4,6%) led by Balat (4,5k) and Hibis (4,2k).

<figure class="crd-table-figure" id="tab:regsum-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Share</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lower Egypt (Nile Delta)</strong></td><td class="crd-td">116</td><td class="crd-td">59,5%</td><td class="crd-td">Pi-Ramesses (79k)</td></tr>
<tr><td class="crd-td"><strong>Memphis and Fayum Core</strong></td><td class="crd-td">18</td><td class="crd-td">9,2%</td><td class="crd-td">Memphis (88,5k)</td></tr>
<tr><td class="crd-td"><strong>Middle Egypt</strong></td><td class="crd-td">15</td><td class="crd-td">7,7%</td><td class="crd-td">Amarna (34,2k)</td></tr>
<tr><td class="crd-td"><strong>Upper Egypt (Thebaid)</strong></td><td class="crd-td">26</td><td class="crd-td">13,3%</td><td class="crd-td">Thebes (77,5k)</td></tr>
<tr><td class="crd-td"><strong>Western Desert Oases</strong></td><td class="crd-td">9</td><td class="crd-td">4,6%</td><td class="crd-td">Balat (4,5k)</td></tr>
<tr><td class="crd-td"><strong>Sinai and Eastern Desert</strong></td><td class="crd-td">11</td><td class="crd-td">5,6%</td><td class="crd-td">Pelusium (6,2k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional distribution and leading centres across the 195 individually assessed Pharaonic Egyptian settlements.</figcaption>
</figure>

## Source Ledger Exclusions

Table \ref{tab:excluded-egypt} lists the first 30 of 91 excluded candidate entries documented in the chapter source ledger, illustrating how subordinate urban wards and variant aliases were consolidated into canonical metropolitan nuclei.

<figure class="crd-table-figure" id="tab:excluded-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Deir el-Medina</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Bubastis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Buto</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Heliopolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Mendes</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell el-Yahudiya</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Smabehdet-Paiuenamun</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Terenuthis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Kom Firin</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Imaw; Momemphis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Hermopolis Parva</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Imet; Nebesheh</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell el-Sabaa Banat</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Suwa</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Heroonpolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell el-Ginn</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Leontopolis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell Ibrahim Awad</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tanis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Sais</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Athribis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell Timai; Thmuis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Avaris; Piramesse</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Naukratis</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Sebennytos</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>El-Birkawi</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Busiris</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Merimde-Abu Ghalib</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell el-Qirqafa</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
<tr><td class="crd-td"><strong>Tell el-Rotab</strong></td><td class="crd-td">Egypt</td><td class="crd-td">Subordinate suburb</td><td class="crd-td">Co-located or variant-spelling locality within 3,2 km merged into canonical Egypt settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 91 excluded candidate entries in the Pharaonic Egypt source ledger.</figcaption>
</figure>

# Limitations

Three structural biases shape the settlement gazetteer. First, spatial merging within a 3,2 km urban radius consolidates contiguous satellite tells and toponym doublets into single metropolitan polygons—such as folding adjacent mounds into Thebes, Mendes, Sais and Athribis—which improves regional density accuracy while masking fine-grained intra-urban ward boundaries [@Moeller2015Archaeolog; @Dabbs2025Mortality]. Second, Delta alluviation and modern town expansion bury early Pharaonic occupation layers beneath deep silt, making Lower Egyptian site recovery reliant on systematic EES Delta Survey coring and remote sensing rather than uniform surface walkovers [@Elfadaly2019Discoverin]. Third, hyper-arid preservation in Sinai and the Eastern Desert exaggerates the archaeological visibility of seasonal mining camps and waystations relative to ephemeral Nile levee hamlets destroyed by river migration [@Toonen2021Hydro; @Siegel2025Appraisal].

# Conclusion

Cataloguing 195 individually assessed settlements across 1.225 temporal observations, this gazetteer traces the urban anatomy of Pharaonic Egypt from Early Dynastic walled estates to the dense Delta and Valley network conquered by Cambyses II in 525BC. Combining primary excavation monographs, ArchAtlas, the EES Delta Survey, Pleiades and radiocarbon chronologies with strict spatial deduplication prevents suburban double-counting while capturing the authentic hierarchy separating Egypt's imperial and dynastic capitals (Memphis, Pi-Ramesses, Thebes, Sais, Avaris, Tanis, Itjtawy, Bubastis and Amarna) from its differentiated provincial nome centres, reclaimed Fayum towns and desert oasis and Red Sea outposts.

# Appendix

All 195 included settlement records and 91 ledger exclusions are stored in machine-readable chapter archives linked to Egypt's 296 modern ADM2 polygons from geoBoundaries [@Runfola2020GeoBoundaries] and CAPMAS historical provincial series. Coordinate precision is maintained to at least two decimal places for regional cartographic projection and five-arcminute spatial aggregation.

# Sources

<div id="refs"></div>
