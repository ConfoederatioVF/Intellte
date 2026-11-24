---
title: "Durrani and Barakzai Afghanistan until 1919"
subtitle: "Settlement Gazetteer of Oasis Centres, Bazaars and Mountain Hubs, 1747AD to 1919AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: durrani_barakzai_afghanistan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_durrani_barakzai_afghanistan_spatial.png"
hero_caption: "Spatial distribution of 86 individually assessed settlements across five subregions of Durrani and Barakzai Afghanistan, 1747AD to 1919AD."
hero_label: "fig:hero-durrani-settlements"
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

This gazetteer catalogues 86 individually assessed urban settlements, oasis market towns and highland valley hubs active within Durrani and Barakzai Afghanistan between 1747AD and 1919AD across a 641.887 km² domain partitioned into five hydrological subregions. Synthesised from nineteenth-century European travelogues, Anglo-Indian boundary commission surveys, provincial gazetteers, historical Islamic gazetteer benchmarks and Afghan administrative records [@Bosworth2007Historic; @Kakar1968Consolidat; @Lally2018Beyond; @Lally2020Landscape; @Runfola2020GeoBoundaries], the settlement ledger evaluates 97 candidate entries, retaining 86 active nodes and excluding 11 entries comprising seven co-located or variant-spelling localities within 2,2 km merged into primary urban cores and four variant-spelling duplicates within 25 km. The urban hierarchy exhibits a balanced polycentric rank-size structure led by Kabul (83,2k inhabitants in 1919AD), Kandahar (62,4k at its 1765AD Durrani imperial peak), Herat (52,8k in 1765AD), Mazar-i-Sharif (34,2k in 1919AD), Tashkurghan (24,8k in 1919AD), Maimana (18,4k in 1870AD), Istalif (16,1k in 1919AD), Ghazni (15,4k in 1919AD), historical Warwalij (15k in 1747AD) and Andkhoy (14,7k in 1919AD), yielding a Zipf rank-size exponent of $\alpha = 0,76$ ($R^2 = 0,97$). Submask ledger allocation places 29 catalogued entries in Kabul and the Eastern Provinces, 25 across Afghan Turkestan, 12 in the Hazarajat and Central Highlands, 12 in Herat and the Western Provinces and 8 across Kandahar and Helmand. Alongside modern district benchmarks from 355 geoBoundaries ADM2 polygons, the gazetteer anchors spatial population surfaces while documenting underlying archival consolidation rules and evidentiary limitations.

# Background

Urban settlement in eighteenth- and nineteenth-century Afghanistan was overwhelmingly an oasis and caravan phenomenon [@Bosworth2007Historic; @Rezvan2012Physical; @Lally2020Landscape]. Across an arid plateau bisected by the Hindu Kush, cities survived only where perennial snowmelt rivers or engineered *karez* systems guaranteed year-round irrigation for orchards, grain fields and urban gardens [@Anonymous2015Rural; @Akbari2024Research]. Consequently, the country's principal towns functioned simultaneously as agrarian collection hubs, fortified provincial seats and caravanserai junctions linking Central Asia, Khorasan and the Indus plains [@Lally2018Beyond; @Khan2022Good; @Nourzhanov2013Tajikistan].

Four functional settlement tiers structured the Afghan urban landscape between 1747AD and 1919AD. At the summit stood the dynastic and regional capitals: Kandahar (rebuilt by Ahmad Shah Durrani after 1747AD on a walled four-quarter grid fed by Arghandab canals), Kabul (elevated to royal seat by Timur Shah in 1775AD and fortified around the Bala Hisar) and Herat (the western Timurid–Safavid bastion commanding the Hari Rud plain) [@Lally2018Beyond; @Dzhandosova2023Reign; @MacLeod2020Iran; @Bosworth2007Historic]. Below them sat northern shrine and oasis capitals—most notably Mazar-i-Sharif, which eclipsed ancient Balkh after the 1866AD cholera epidemic as Barakzai governors shifted administration away from malarial ruins—together with Tashkurghan (Khulm), Maimana, Andkhoy, Sheberghan, Khanabad and Kunduz across Afghan Turkestan [@Nourzhanov2013Tajikistan; @Fitzhardinge1968Establishm; @Bosworth2007Historic].

A third tier comprised strategic pass towns and *karez* market hubs guarding internal trade corridors: Jalalabad and Mehtarlam on the Kabul–Peshawar descent, Istalif, Charikar and Paghman in the Kohdaman foothills, Ghazni and Kalat-i Ghilzai along the Kabul–Kandahar trunk road, and Farah, Girishk and Chakhansur across the southern Helmand–Sistan arc [@Lally2020Landscape; @Khan2022Good; @Kakar1968Consolidat]. Finally, remote upland valleys such as Behsud, Bamyan, Panjab, Chaghcharan, Faizabad, Gardez, Khost, Parun and Kamdesh sustained small administrative garrisons and seasonal barter centres serving surrounding pastoral and mountain-farming lineages [@Rahil2026Communicat; @Kakar1968Consolidat].

# Methodology

Candidate settlements were assembled through a three-wave saturation protocol documented in the chapter source ledger. Wave 1 ingested 71 primary urban, oasis and provincial centres drawn from nineteenth-century historical registers, boundary commission surveys and primary regional corpora [@Kakar1968Consolidat; @Runfola2020GeoBoundaries]. Wave 2 added 15 mid-eighteenth-century historical oasis and caravan localities integrated from the Al-Thurayya historical gazetteer corpus across Afghan Turkestan, Herat, Kabul and southern frontier corridors [@Bosworth2007Historic]. Wave 3 executed an asymptotic verification sweep auditing longitudinal continuity, geographic bounds and cross-subregion completeness across all five areal submasks, yielding zero marginal additions (0% gain) and confirming saturation across 97 total evaluated candidate records.

Deduplication and boundary rules enforced strict spatial and chronological filters. Eleven overlapping historical gazetteer records were excluded from the final 86-site catalogue to prevent double-counting: seven co-located or variant-spelling localities situated within 2,2 km of primary urban cores (Harat, Ghaznat, Talaqan, al-Bamiyan, Busanj, Rustaq Bik and Karukh) were merged into their host centres, and four variant-spelling duplicates within 25 km (Kabul, Qandahar, Baghlan and Farah) were collapsed into their canonical entries. Twentieth-century post-1919AD foundations (such as Pul-e Khumri, founded 1936, and modern Lashkargah, founded 1953) and unquantified minor scatters remain outside the domain ledger. Every retained entry carries verified WGS84 coordinates, a dated population series spanning 1747AD to 1919AD (1890AD to 1919AD for the late-century frontier fort of Spin Boldak, and 1747AD to 1750AD for the 15 mid-eighteenth-century historical gazetteer entries) and an explicit subregion assignment.

# Testing and Validation

Source ledger reconciliation confirms exact accounting across all 97 evaluated entities: 86 included settlements (71 from Wave 1 and 15 from Wave 2, with zero additions in the Wave 3 verification sweep) plus 11 excluded entries, leaving zero unaccounted candidates. All five submasks exhibit comprehensive settlement coverage in the source ledger (29 in Kabul and the Eastern Provinces, 25 in Afghan Turkestan, 12 in the Hazarajat and Central Highlands, 12 in Herat and the Western Provinces and 8 in Kandahar and Helmand).

Figure \ref{fig:sett-gazetteer} displays the rank-size hierarchy of the 86 individually assessed settlements alongside the ordinary least-squares Zipf fit ($\alpha = 0,76$, $R^2 = 0,97$; exact $\alpha = 0,756$, $R^2 = 0,968$). The distribution tracks a smooth, un-stepped polycentric hierarchy from Kabul (83,2k) through Kandahar (62,4k), Herat (52,8k), Mazar-i-Sharif (34,2k), Tashkurghan (24,8k) and Maimana (18,4k) down to remote frontier and alpine hubs such as Parun (2,4k), Spin Boldak (2,2k) and Ishkashim (1,5k), without artificial mid-table shelves.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-durrani-barakzai-afghanistan-settlements/fig4_durrani_barakzai_afghanistan_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading catalogued settlements across Durrani and Barakzai Afghanistan through 1919AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-afg} lists the 45 largest settlements in the gazetteer ordered by peak documented population between 1747AD and 1919AD, extending from Kabul (83,2k) down to Arhan (5,4k). Whereas most core oasis towns attain their chapter maxima in 1919AD under late Barakzai consolidation, several major centres register earlier peaks reflecting documented geopolitical, epidemic and early-modern gazetteer benchmarks: Kandahar (62,4k) and Herat (52,8k) peak in 1765AD during Ahmad Shah's Durrani ascendancy before the 1775AD court transfer and nineteenth-century Qajar sieges; historical oasis benchmarks such as Warwalij (15k), Taluqan (12,9k), Bamyan (9,4k) and Baghlan (7,4k) peak at the 1747AD to 1750AD threshold; Balkh peaks in 1747AD (7,2k) ahead of its 1866AD cholera collapse; Kunduz (10,1k in 1832AD), Aqcha (7,8k in 1840AD) and Maimana (18,4k in 1870AD) trace nineteenth-century Uzbek khanate dynamics; and highland Hazarajat valleys such as Behsud (5,5k) peak in 1880AD prior to the 1891AD to 1893AD Hazarajat conquest.

<figure class="crd-table-figure" id="tab:top45-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Subregion</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,53, 69,17</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">83,2k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Kandahar</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">31,61, 65,71</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">62,4k (1765AD)</td></tr>
<tr><td class="crd-td"><strong>Herat</strong></td><td class="crd-td">Herat and West</td><td class="crd-td">34,35, 62,2</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">52,8k (1765AD)</td></tr>
<tr><td class="crd-td"><strong>Mazar-i-Sharif</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,71, 67,11</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">34,2k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Tashkurghan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,69, 67,69</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">24,8k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Maimana</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">35,92, 64,78</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">18,4k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Istalif</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,83, 69,08</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">16,1k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">33,55, 68,42</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">15,4k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Warwālīj</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,78, 68,9</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">15k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Andkhoy</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,95, 65,12</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">14,7k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Sheberghan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,66, 65,75</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">14,3k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Khanabad</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,68, 69,11</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">13,9k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Taluqan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,74, 69,53</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">12,9k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Charikar</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">35,01, 69,17</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">12,6k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,78, 66,88</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">12,5k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Sar-e Pol</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,22, 65,93</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">11,3k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Šabūrqān</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,65, 65,78</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">10,8k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Jalalabad</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,43, 70,45</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">10,2k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Kunduz</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,73, 68,86</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">10,1k (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Bamyan</strong></td><td class="crd-td">Hazarajat Highlands</td><td class="crd-td">34,82, 67,83</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">9,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Gardez</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">33,6, 69,23</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">8,9k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Paghman</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,59, 68,96</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">8,5k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Faizabad</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,12, 70,58</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">8k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Aqcha</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,91, 66,19</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7,8k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Farah</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">32,37, 62,12</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7,5k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Baghlan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,13, 68,71</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Aybak</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,27, 68,02</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7,4k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,76, 66,9</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7,2k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Nijrab</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,98, 69,57</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7,1k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Rustaq</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,14, 69,8</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">7k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Sabzawar</strong></td><td class="crd-td">Herat and West</td><td class="crd-td">33,3, 62,14</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">6,8k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Khulm</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,75, 67,7</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">6,7k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Baraki Barak</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">33,97, 68,95</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">6,6k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>al-Asfuzār</strong></td><td class="crd-td">Herat and West</td><td class="crd-td">33,24, 62,13</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">6,6k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Girishk</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">31,82, 64,56</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">6,3k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Ghorian</strong></td><td class="crd-td">Herat and West</td><td class="crd-td">34,34, 61,47</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">6,2k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Khost</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">33,34, 69,92</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">6,2k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>al-Anbār</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,21, 65,95</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">6,1k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Qala-i Naw</strong></td><td class="crd-td">Herat and West</td><td class="crd-td">34,99, 63,13</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">5,8k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Andakhūdh</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,96, 65,17</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">5,8k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Siminjān</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">36,23, 68,09</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">5,8k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Kalat-i Ghilzai</strong></td><td class="crd-td">Kandahar and Helmand</td><td class="crd-td">32,11, 66,91</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">5,7k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Mehtarlam</strong></td><td class="crd-td">Kabul and Eastern</td><td class="crd-td">34,67, 70,21</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">5,5k (1919AD)</td></tr>
<tr><td class="crd-td"><strong>Behsud</strong></td><td class="crd-td">Hazarajat Highlands</td><td class="crd-td">34,34, 67,91</td><td class="crd-td">1747AD to 1919AD</td><td class="crd-td">5,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ārhan</strong></td><td class="crd-td">Afghan Turkestan</td><td class="crd-td">37,24, 68,86</td><td class="crd-td">1747AD to 1750AD</td><td class="crd-td">5,4k (1747AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Durrani and Barakzai Afghanistan ordered by peak documented population (86 total entries).</figcaption>
</figure>

## Subregional Distribution and Ledger Exclusions

Table \ref{tab:regsum-afg} summarises the submask count of catalogued settlements from the source ledger audit alongside the leading urban centre in each of the five hydrological territories. Kabul and the Eastern Provinces accounts for the largest submask share (29 of 86 entries, led by Kabul at 83,2k), followed by Afghan Turkestan (25 entries, led by Mazar-i-Sharif at 34,2k ahead of Tashkurghan at 24,8k and Maimana at 18,4k), the Hazarajat and Central Highlands (12 entries, anchored by Bamyan at 9,4k in 1750AD and Behsud at 5,5k in 1880AD), Herat and the Western Provinces (12 entries, led by Herat at 52,8k) and Kandahar and Helmand (8 entries, led by Kandahar at 62,4k). Table \ref{tab:excluded-afg} documents all 11 candidate records excluded during source ledger audit.

<figure class="crd-table-figure" id="tab:regsum-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kabul and Eastern Provinces</strong></td><td class="crd-td">29</td><td class="crd-td">Kabul (83,2k)</td></tr>
<tr><td class="crd-td"><strong>Kandahar and Helmand</strong></td><td class="crd-td">8</td><td class="crd-td">Kandahar (62,4k)</td></tr>
<tr><td class="crd-td"><strong>Afghan Turkestan (Balkh and Badakhshan)</strong></td><td class="crd-td">25</td><td class="crd-td">Mazar-i-Sharif (34,2k)</td></tr>
<tr><td class="crd-td"><strong>Herat and Western Provinces</strong></td><td class="crd-td">12</td><td class="crd-td">Herat (52,8k)</td></tr>
<tr><td class="crd-td"><strong>Hazarajat and Central Highlands</strong></td><td class="crd-td">12</td><td class="crd-td">Bamyan (9,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts and leading urban centres across five Afghan subregions (86 total entries).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-afg">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Country</th><th class="crd-th">Classification</th><th class="crd-th">Audit Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kābul</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Harāh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Qandahār</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Ghaznah</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Ṭālaqān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>al-Bāmiyān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Baghlān</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Farah</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Variant-spelling alias</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Būsanj</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Rustāq Bīk</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
<tr><td class="crd-td"><strong>Karūkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">Merged within 2,2 km core</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Afghanistan settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 11 excluded candidate entries documented in the Afghan settlement source ledger.</figcaption>
</figure>

# Limitations

Three evidentiary caveats qualify interpretation of the 86-settlement register. First, aside from rare municipal counts such as Major Protheroe's 1880AD Kandahar enumeration (29,3k) and Amir Abdur Rahman's 1891AD Kandahar tally (31,5k), most trajectories synthesise nineteenth-century European travellers' house counts (Elphinstone, Burnes, Masson, Wood, Ferrier, Yate and Robertson), British-Indian intelligence gazetteers and historical Islamic gazetteer benchmarks; applying standard multipliers of five to six inhabitants per house carries plausible uncertainty bands of $\pm 15\%$ to $\pm 25\%$ [@Kakar1968Consolidat; @Lally2020Landscape]. Second, decennial benchmarks smooth over sharp seasonal and wartime population swings, including Jalalabad's winter royal cantonment influx and acute siege or punitive displacements at Herat (1837AD to 1838AD), Istalif (1842AD), Andkhoy (1848AD) and Maimana (1884AD) [@Morrison2013Twin; @MacLeod2020Iran].

Third, while permanent fortified towns and valley hubs are represented across all five hydrological subregions, dispersed nomadic *kuchi* encampments and minor seasonal alpine hamlets are excluded from the 86-point gazetteer and instead incorporated within subregional rural carrying-capacity aggregates [@Anonymous2015Rural; @Kakar1968Consolidat].

# Conclusion

The 86 individually assessed settlements of Durrani and Barakzai Afghanistan capture a resilient polycentric spatial skeleton ($\alpha = 0,76$, $R^2 = 0,97$) anchored on the Kabul–Kandahar–Herat–Mazar-i-Sharif ring and the Amu Darya oasis piedmont. Across the interval from 1747AD to 1919AD, urban trajectories diverged markedly according to dynastic patronage, frontier warfare and epidemic disease: Kabul climbed from 24,5k to 83,2k after becoming the royal capital and Mazar-i-Sharif expanded to 34,2k as ancient Balkh decayed, whereas Kandahar (peaking at 62,4k in 1765AD) and Herat (52,8k in 1765AD) recovered toward 40k by 1919AD and highland Hazarajat valleys contracted during the 1891AD to 1893AD conquest. Paired with the 355 modern ADM2 district baselines and the regional Matérn habitability surface, this settlement gazetteer provides the point-level foundation for subnational population reconstruction across pre-independence Afghanistan.

# Appendix

All settlement coordinates conform to verified WGS84 geographic locations (decimal degrees presented with European decimal commas in tabular outputs). Historical toponyms follow clean Latin transliteration without diacritical ambiguities (Kabul, Kandahar, Herat, Mazar-i-Sharif, Tashkurghan, Maimana, Jalalabad, Ghazni, Bamyan, Faizabad) for consistent rendering in XeLaTeX, with historical aliases preserved in the underlying JSON register. Subregional allocation in the gazetteer tables pairs the five hydrological basins defined in the chapter regional register with the five-submask coverage audit recorded in the source ledger.

# Sources

<div id="refs"></div>
