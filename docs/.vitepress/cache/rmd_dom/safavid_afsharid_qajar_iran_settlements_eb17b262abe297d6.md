---
title: "Safavid, Afsharid and Qajar Iran (1501-1925)"
subtitle: "Settlement Gazetteer: Capitals, Qanat Oases, Caspian Towns and Ports, 1501AD to 1925AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: safavid_afsharid_qajar_iran_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_safavid_afsharid_qajar_iran_spatial.png"
hero_caption: "Spatial coverage of 339 catalogued Iranian settlements across five macro-regions from 1501AD to 1925AD."
hero_label: "fig:hero-safavid-afsharid-qajar-iran-sett"
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

This gazetteer documents 339 urban, oasis, administrative and port settlements active across Iran between the Safavid accession in 1501AD and the end of Qajar rule in 1925AD, spanning 1.623.247 km² across five ecological and historical macro-regions. Integrating Statistical Centre of Iran (SCI) longitudinal municipal series, Pleiades historical gazetteer coordinates, Safavid endowment (*vaqf*) surveys, Qajar municipal counts and modern urban historiography [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman; @Bosworth2007Historic], the register compiles 3.308 settlement-year population observations across nineteen benchmark dates from 1501AD to 1920AD. Seventy core urban nodes—including Tehran, Tabriz, Mashhad, Ardabil, Yazd, Zanjan, Khorramabad, Dezful, Amol and Bandar-e Abbas—carry continuous demographic series back to 1501AD, while 268 secondary plateau oases, Zagros market towns and Caspian ports enter quantitative enumeration from 1830AD onward alongside the twentieth-century Alborz satellite of Karaj (92,8k in 1920AD). Across the regional source ledger, 49 of 388 evaluated candidates are excluded: thirty suburban entities absorbed within 2 km of primary urban cores, thirteen duplicate transliteration variants within 25 km and six post-1925AD foundations such as Bandar-e Emam Khomeyni (1929AD) and Eslamshahr (1975AD). Fitted across all 339 included centres, the urban hierarchy exhibits a Zipf rank-size slope of $\alpha = 0,975$ ($R^2 = 0,97$), led in 1920AD by Tehran (1,36M), Mashhad (327k), Isfahan (248k), Tabriz (228k), Shiraz (202k), Ahvaz (152k), Qom (143k) and Kermanshah (131k). Spatial disaggregation aligns all 339 settlements with 379 modern Iranian ADM2 (*shahrestan*) geoBoundaries polygons through strictly mass-conserving pycnophylactic scaling [@Runfola2020GeoBoundaries].

# Background

## Capitals, Caravan Oases and Caspian Ports

The urban network of early modern Iran evolved around four distinct geographical corridors that bound the central deserts of the Dasht-e Kavir and Dasht-e Lut [@Saatsaz2023Technology; @Bosworth2007Historic]. Along the northwestern Azerbaijan corridor, Tabriz, Ardabil, Khoy, Maragheh, Urmia and Zanjan anchored Ottoman-Caucasian caravan trade and served as the original power base of the Safavid dynasty before royal patronage shifted southeastward to Qazvin (1555AD) and Isfahan (1598AD) [@Rieber2014Struggle; @Wing2016Jalayirids; @Nag2026History]. To the north across the Alborz crest, humid Caspian towns—Rasht, Lahijan, Amol, Babol, Sari and Astarabad (Gorgan)—formed a dense agricultural ribbon supported by wet-rice cultivation and raw silk production [@Sadan2023Masters; @Rieber2014Struggle].

On the interior plateau, urban continuity depended on gravity-fed subterranean *qanat* aqueducts tapping snowmelt from surrounding mountain ranges [@Saatsaz2023Technology]. Isfahan, Kashan, Qom, Yazd and Kerman functioned as specialised textile, ceramic and carpet-weaving workshops connected across arid steppe expanses by fortified caravanserais [@Farshi2024Gateways; @Groot1978Kerman]. Following the 1722AD Afghan siege of Isfahan, the Afsharid wars and the Zand interlude centred on Shiraz, Qajar unification fixed the imperial capital at Tehran in 1786AD [@Mashayekhi2019Regimes; @Kondo2002Iranian]. Over the nineteenth century, Tehran expanded rapidly beyond its Safavid mud walls under Nasir al-Din Shah's 1868AD octagonal expansion plan, drawing internal migrants from Azerbaijan, Kashan and Khorasan [@Mashayekhi2019Regimes; @Vahdat2017Occidental; @Bayat1998Street].

## Frontier Hubs and Modernising Gateways

In the western Zagros arc, Kermanshah, Sanandaj, Hamadan, Borujerd, Arak (Sultanabad) and Khorramabad mediated trade between the plateau and Ottoman Baghdad while serving as seasonal market centres for Kurdish, Lur and Bakhtiari pastoral confederations [@Cabi2019Impact; @Rieber2014Struggle]. Along the southern littoral and lower Karun basin, Bandar-e Abbas, Bushehr, Ahvaz, Dezful and Shushtar connected interior caravan routes to Indian Ocean steam shipping, while the 1908AD discovery of petroleum at Masjed-e Soleyman created Iran's earliest industrial oil towns [@Sedighi2025Developmen; @Groot1978Kerman]. In the northeast and southeast, Mashhad—anchored by the Imam Reza shrine endowments (*vaqf*)—dominated Khorasan alongside Nishapur, Sabzevar, Bojnurd and Birjand, while Zahedan emerged as a strategic customs crossroads linking Sistan and Baluchestan to British Indian railheads [@Bosworth2007Historic; @Yarbakhsh2017Placing; @ISRAYELYAN2025Iran].

# Methodology

## Source Integration and Deduplication Ledger

The settlement gazetteer synthesises national census benchmarks from the Statistical Centre of Iran (276 matched municipal series) with historical coordinates from the Pleiades Ancient World Gazetteer (75 matched historical cores), cross-checked against early modern Persian *vaqf* inventories, Qajar municipal counts and urban monographs [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman; @Bosworth2007Historic]. Every candidate in the source ledger undergoes spatial proximity clustering and historical *foundation_year* screening before inclusion.

Out of 388 evaluated candidate places, 339 settlements pass all screening rules and enter the quantitative register, while 49 candidates are excluded with explicit reason codes. Thirty suburban entities located within 2 km of primary urban cores—such as Bāghestān, Ṣāleḥīeh, Dowlat Ābād, Bābolsar and Veh Ardashir—are merged into their metropolitan parents to prevent double-counting. Thirteen variant-spelling or duplicate aliases within 25 km (including *Bandar-e ʿAbbās*, *Mašhad*, *Yāsūj*, *Firuzabad* and *Bam* aliases) are collapsed into canonical entries. Finally, six twentieth-century foundations whose documented *foundation_year* post-dates 1925AD—Bandar-e Emam Khomeyni (1929AD), Shirvan (1938AD), Bandar-e Mahshahr (1945AD), Shahriyar (1953AD), Eslamshahr (1975AD) and Qods (1989AD)—are excluded from the early modern domain to eliminate anachronistic back-projection.

## Spatial Assignment and ADM2 Disaggregation

To test sub-regional urban balance across the five ecological zones, each geocoded settlement coordinate is assigned via point-in-polygon containment (with nearest-boundary snapping for coastal port coordinates) against the smooth vector polygons of the five macro-regions. Within the broader HANDBOOK spatial pipeline, urban core populations are subtracted from sub-regional totals within a two-pixel buffer prior to non-stationary Matérn ($\nu = 3/2$) rural kriging, while 379 modern Iranian ADM2 (*shahrestan*) geoBoundaries polygons provide strictly mass-conserving pycnophylactic constraints (66.308 regional unit-year checks, maximum relative error 5,84e-08) [@Runfola2020GeoBoundaries; @Danaei2019Iran].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 388 candidate entries (339 included, 49 excluded, zero unaccounted records) and full coordinate coverage across all 339 included settlements. Across nineteen benchmark timestamps from 1501AD to 1920AD, aggregate urban population recorded in the gazetteer rises from 361,3k across 70 core cities in 1501AD and 347,1k in 1800AD to 826,6k across 259 towns in 1830AD, 1,57M across 328 towns in 1850AD, 4,14M across 331 towns in 1900AD and 6,13M across 276 active municipal series in 1920AD. Figure \ref{fig:sett-gazetteer} displays the Zipf rank-size regression ($\alpha = 0,975$, $R^2 = 0,97$, $n = 339$) alongside the twelve largest settlements by peak documented population.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-safavid-afsharid-qajar-iran-settlements/fig4_safavid_afsharid_qajar_iran_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size curve and top twelve catalogued urban centres across Iran, 1501AD to 1925AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-sett} lists the leading 45 catalogued Iranian settlements ordered by peak documented population across the 1501AD to 1925AD domain. Tehran, Mashhad, Isfahan, Tabriz and Shiraz occupy the top five ranks, followed by regional provincial hubs in Khuzestan (Ahvaz, Dezful), the central plateau (Qom, Arak, Kerman, Qazvin, Yazd, Kashan), the western Zagros (Kermanshah, Hamadan, Khorramabad, Sanandaj, Borujerd) and the Caspian seaboard (Rasht, Sari, Gorgan, Amol, Babol).

<figure class="crd-table-figure" id="tab:top45-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1501AD</th><th class="crd-th">1830AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehrān</strong></td><td class="crd-td">35,69; 51,42</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,3k</td><td class="crd-td">187,5k</td><td class="crd-td">1,36M (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">36,3; 59,61</td><td class="crd-td">1501-1920AD</td><td class="crd-td">6,3k</td><td class="crd-td">45,1k</td><td class="crd-td">327k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Eṣfahān</strong></td><td class="crd-td">32,65; 51,67</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">34,2k</td><td class="crd-td">248k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Tabrīz</strong></td><td class="crd-td">38,08; 46,29</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,4k</td><td class="crd-td">31,5k</td><td class="crd-td">228,4k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Shīrāz</strong></td><td class="crd-td">29,61; 52,53</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">27,9k</td><td class="crd-td">202,4k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Ahvāz</strong></td><td class="crd-td">31,32; 48,68</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">152k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">34,64; 50,88</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">19,7k</td><td class="crd-td">142,9k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Kermānshāh</strong></td><td class="crd-td">34,31; 47,06</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">18,1k</td><td class="crd-td">130,9k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Karaj</strong></td><td class="crd-td">35,83; 50,99</td><td class="crd-td">1920-1920AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">92,8k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Zāhedān</strong></td><td class="crd-td">29,5; 60,86</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">75,8k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Orūmīyeh</strong></td><td class="crd-td">37,55; 45,08</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">75k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Hamadān</strong></td><td class="crd-td">34,8; 48,51</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">73,3k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Rasht</strong></td><td class="crd-td">37,28; 49,59</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">71,4k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Arāk</strong></td><td class="crd-td">34,09; 49,7</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">69,5k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Kermān</strong></td><td class="crd-td">30,28; 57,08</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">65,4k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Ardabīl</strong></td><td class="crd-td">38,25; 48,29</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,3k</td><td class="crd-td">9k</td><td class="crd-td">65,2k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Qazvīn</strong></td><td class="crd-td">36,27; 50</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">58,5k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">31,9; 54,37</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,4k</td><td class="crd-td">8k</td><td class="crd-td">57,7k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Zanjān</strong></td><td class="crd-td">36,68; 48,5</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,4k</td><td class="crd-td">7,4k</td><td class="crd-td">53,3k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Bandar-e 'Abās</strong></td><td class="crd-td">27,19; 56,28</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5k</td><td class="crd-td">7,2k</td><td class="crd-td">52,3k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Khoram Ābād</strong></td><td class="crd-td">33,49; 48,36</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,4k</td><td class="crd-td">7,2k</td><td class="crd-td">52,3k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Sanandaj</strong></td><td class="crd-td">35,31; 47</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">51,2k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Borūjerd</strong></td><td class="crd-td">33,9; 48,75</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">42,2k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Dezfūl</strong></td><td class="crd-td">32,38; 48,41</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,1k</td><td class="crd-td">5,2k</td><td class="crd-td">38k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Sārī</strong></td><td class="crd-td">36,56; 53,06</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">35,1k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Gorgān</strong></td><td class="crd-td">36,84; 54,44</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">34,1k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Najaf Ābād</strong></td><td class="crd-td">32,63; 51,37</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">33,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Kāshān</strong></td><td class="crd-td">33,98; 51,43</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">32,5k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Sabzevār</strong></td><td class="crd-td">36,21; 57,68</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">31,1k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Āmol</strong></td><td class="crd-td">36,47; 52,35</td><td class="crd-td">1501-1920AD</td><td class="crd-td">5,1k</td><td class="crd-td">4,1k</td><td class="crd-td">29,3k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Khūy</strong></td><td class="crd-td">38,55; 44,95</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">28,9k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Bābol</strong></td><td class="crd-td">36,55; 52,68</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">28,8k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Nīshābūr</strong></td><td class="crd-td">36,21; 58,8</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">28,5k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Būshehr</strong></td><td class="crd-td">28,97; 50,84</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">27,9k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Malāyer</strong></td><td class="crd-td">34,3; 48,82</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">27,4k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Qā'em Shahr</strong></td><td class="crd-td">36,47; 52,87</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">25,9k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Khomeynī Shahr</strong></td><td class="crd-td">32,69; 51,54</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">24,8k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Marāgheh</strong></td><td class="crd-td">37,39; 46,24</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">24,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Īlām</strong></td><td class="crd-td">33,64; 46,42</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">24,4k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Bojnūrd</strong></td><td class="crd-td">37,47; 57,33</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">23,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Sīrjān</strong></td><td class="crd-td">29,45; 55,68</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">22,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Masjed-e Soleymān</strong></td><td class="crd-td">31,94; 49,3</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">22,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Fardīs</strong></td><td class="crd-td">35,76; 51</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">21,9k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Gonbad-e Kāvūs</strong></td><td class="crd-td">37,25; 55,17</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">21,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Bīrjand</strong></td><td class="crd-td">32,87; 59,22</td><td class="crd-td">1830-1920AD</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">21,2k (1920AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Safavid, Afsharid and Qajar Iran ordered by peak documented population.</figcaption>
</figure>

## Sub-Regional Distribution Across the Five Macro-Regions

Point-in-polygon assignment against the five vector sub-regions shows a balanced spatial spread across Iran's ecological zones (Table \ref{tab:regsum-sett}). Fars, Khuzestan and the Persian Gulf littoral hold 81 catalogued centres (led by Shiraz at 202,4k), followed closely by the Central Plateau with 76 centres (led by Tehran at 1,36M) and Azerbaijan, Gilan and Mazandaran with 74 centres (led by Tabriz at 228,4k). The Western Zagros contains 56 centres (led by Kermanshah at 130,9k), while Khorasan, Sistan and Baluchestan contain 52 widely spaced oasis hubs across 730.963 km² (led by Mashhad at 327k).

<figure class="crd-table-figure" id="tab:regsum-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azerbaijan, Gilan and Mazandaran</strong></td><td class="crd-td">165.064</td><td class="crd-td">80</td><td class="crd-td">Tabrīz (228,4k)</td></tr>
<tr><td class="crd-td"><strong>Central Plateau</strong></td><td class="crd-td">267.654</td><td class="crd-td">61</td><td class="crd-td">Tehrān (1,36M)</td></tr>
<tr><td class="crd-td"><strong>Western Zagros</strong></td><td class="crd-td">146.537</td><td class="crd-td">68</td><td class="crd-td">Qom (142,9k)</td></tr>
<tr><td class="crd-td"><strong>Fars, Khuzestan and Gulf</strong></td><td class="crd-td">313.029</td><td class="crd-td">91</td><td class="crd-td">Shīrāz (202,4k)</td></tr>
<tr><td class="crd-td"><strong>Khorasan, Sistan and Baluchestan</strong></td><td class="crd-td">730.963</td><td class="crd-td">39</td><td class="crd-td">Mashhad (327k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Distribution of the 339 catalogued Iranian settlements across the five macro-regions.</figcaption>
</figure>

# Limitations

Because quantitative municipal enumerations remain sparse prior to 1830AD, the longitudinal settlement matrix exhibits an uneven temporal horizon: seventy major towns carry continuous estimates from 1501AD to 1920AD, whereas 268 provincial centres enter the series at 1830AD and Karaj enters at its 1920AD benchmark. Furthermore, reverse-anchored SCI municipal trajectories reflect modern urban boundary footprints rather than pre-industrial walled cores, raising 1920AD agglomeration figures in Tehran (1,36M) and Mashhad (327k) relative to historical intra-muros traveller counts while smoothing acute short-term contractions after the 1722AD Afghan siege of Isfahan, the 1870AD to 1872AD famine and the 1917AD to 1919AD wartime crisis [@Mashayekhi2019Regimes; @Shabani2025Natural; @Taji2026Most].

# Conclusion

The 339-settlement gazetteer records Iran's four-century urban transformation from decentralised early Safavid regional hubs to a Tehran-centred national hierarchy anchored by Qajar infrastructure and Caspian-Alborz demographic growth. By enforcing strict proximity deduplication, post-1925AD foundation-year filtering and geoBoundaries ADM2 mass conservation, the dataset captures both enduring oasis anchors and the nineteenth-century rise of northern and southwestern commercial gateways [@Runfola2020GeoBoundaries; @Bosworth2007Historic].

# Appendix

Table \ref{tab:excluded-sett} documents the leading 25 of 49 excluded candidate entries from the regional source ledger, illustrating how suburban merges, transliteration duplicates and post-1925AD foundations are separated from the canonical 339-settlement register.

<figure class="crd-table-figure" id="tab:excluded-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Reason Code</th><th class="crd-th">Methodological Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bandar-e Emām Khomeynī</strong></td><td class="crd-td">Post-1925AD foundation</td><td class="crd-td">Settlement foundation year (1929) post-dates chapter domain [1501, 1925].</td></tr>
<tr><td class="crd-td"><strong>Bandar-e Māhshahr</strong></td><td class="crd-td">Post-1925AD foundation</td><td class="crd-td">Settlement foundation year (1945) post-dates chapter domain [1501, 1925].</td></tr>
<tr><td class="crd-td"><strong>Eslāmshahr</strong></td><td class="crd-td">Post-1925AD foundation</td><td class="crd-td">Settlement foundation year (1975) post-dates chapter domain [1501, 1925].</td></tr>
<tr><td class="crd-td"><strong>Qods</strong></td><td class="crd-td">Post-1925AD foundation</td><td class="crd-td">Settlement foundation year (1989) post-dates chapter domain [1501, 1925].</td></tr>
<tr><td class="crd-td"><strong>Shahrīār</strong></td><td class="crd-td">Post-1925AD foundation</td><td class="crd-td">Settlement foundation year (1953) post-dates chapter domain [1501, 1925].</td></tr>
<tr><td class="crd-td"><strong>Shīrvān</strong></td><td class="crd-td">Post-1925AD foundation</td><td class="crd-td">Settlement foundation year (1938) post-dates chapter domain [1501, 1925].</td></tr>
<tr><td class="crd-td"><strong>Ṣāleḥīeh</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Bāghestān</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>'Alī Ābād</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Bābolsar</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Dowlat Ābād</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Naṣīrshahr</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Kelīshād va Sūdarjān</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Darabgird</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Yāsūj</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Bandar-e 'Abbās</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Mašhad</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Pol-e Dokhtar</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Nev-Shapur</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Dastova</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Masjid-i Suleiman</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Firuzabad</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Bam</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Veh Ardashir</strong></td><td class="crd-td">Suburban merge (&lt; 2 km)</td><td class="crd-td">Subordinate settlement within 2 km of primary urban core in Iran.</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Variant-spelling duplicate within 25 km of canonical Iran settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 25 excluded candidate entries from the regional source ledger with exclusion reasons.</figcaption>
</figure>

# Sources

This gazetteer combines Statistical Centre of Iran (SCI) longitudinal municipal census series and Pleiades Ancient World Gazetteer coordinates with historical Persian endowment and urban records [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman; @Bosworth2007Historic]. Sub-regional hydraulic and agrarian contexts draw on Saatsaz and Rezaei [@Saatsaz2023Technology], Sadan [@Sadan2023Masters] and Amghani et al. [@Amghani2025Factors], while urban social and minority community structures incorporate Nemati, Faizee and Advay [@Nemati2026Iranian], Cabi [@Cabi2019Impact], Bayat [@Bayat1998Street], Vahdat [@Vahdat2017Occidental] and Farshi [@Farshi2024Gateways]. Frontier port, oilfield and borderland urban shifts draw on Rieber [@Rieber2014Struggle], Akhmedov [@Akhmedov2019British], Sedighi [@Sedighi2025Developmen], Yarbakhsh [@Yarbakhsh2017Placing] and Israyelyan [@ISRAYELYAN2025Iran], while famine and epidemic disruptions incorporate Sha'bani, Bayati and Khoshdel [@Shabani2025Natural], Taji et al. [@Taji2026Most] and Majd [@Majd2025Historiogr]. Spatial alignment and pycnophylactic disaggregation employ geoBoundaries ADM2 polygons [@Runfola2020GeoBoundaries] paired with national demographic transitions documented by Danaei et al. [@Danaei2019Iran].
