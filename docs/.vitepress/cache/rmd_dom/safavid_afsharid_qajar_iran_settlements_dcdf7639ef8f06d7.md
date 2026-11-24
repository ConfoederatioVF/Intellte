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
hero_caption: "Spatial coverage of 380 individually assessed Iranian settlements across five macro-regions from 1501AD to 1925AD."
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

This gazetteer documents 380 individually assessed urban, oasis, administrative and port settlements active across Iran between the Safavid accession in 1501AD and the end of Qajar rule in 1925AD, spanning 1.623.247 km² across five ecological and historical macro-regions. Synthesising Safavid travelogues, Persian endowment (*vaqf*) and provincial geographies (*Farsnameh-ye Naseri*, *Jughrafiya-yi Kerman*), historical settlement registers (including Al-Thurayya and Euratlas), Qajar municipal enumerations (including the 1867AD and 1883-1884AD censuses of Tehran), consular gazetteers, early twentieth-century Iranian schedules and modern urban historiography [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman; @Bosworth2007Historic], the register compiles case-by-case longitudinal series across the full 1501AD to 1925AD domain. A core group of 108 continuous historical towns—including Isfahan, Tehran, Tabriz, Mashhad, Qazvin, Shiraz, Rasht, Hamadan, Kashan, Kermanshah, Kerman and Yazd—carry trajectories from 1501AD through 1925AD, 8 documented Safavid, Qajar and early industrial foundations enter immediately after their founding years—from Behshahr (1612AD), Najafabad (1613AD), Bandar Abbas (1622AD) and Sanandaj (1636AD) through Arak (1808AD), Malayer (1808AD), Khorramshahr (1812AD), Bandar-e Gaz (1840AD) and Zabol (1869AD) to Masjed Soleyman (1908AD), Abadan (1909AD) and Zahedan (1916AD)—and 264 additional provincial and caravan localities document period-specific early modern occupation. Across the regional source ledger, 49 of 429 evaluated candidates are excluded: 30 co-located suburban or variant-spelling localities absorbed within 2,2 km of canonical urban cores and 19 multi-source census or transliteration duplicate aliases within 25 km. Fitted across all 380 included centres, the urban hierarchy exhibits a Zipf rank-size slope of $\alpha = 1,11$ ($R^2 = 0,87$), led by Safavid Isfahan (335k in 1700AD), Qajar Tehran (252k in 1925AD), Tabriz (212k), Mashhad (105k), Qazvin (88k in 1580AD), Shiraz (75k), Rasht (69k), Hamadan (64k), Kashan (62k in 1650AD), Kermanshah (60,5k), Kerman (52,4k) and Yazd (51,8k). Spatial disaggregation aligns all 380 settlements with 379 modern Iranian ADM2 (*shahrestan*) geoBoundaries polygons through strictly mass-conserving pycnophylactic scaling [@Runfola2020GeoBoundaries].

# Background

## Capitals, Caravan Oases and Caspian Ports

The urban network of early modern Iran evolved around four distinct geographical corridors that bound the central deserts of the Dasht-e Kavir and Dasht-e Lut [@Saatsaz2023Technology; @Bosworth2007Historic]. Along the northwestern Azerbaijan corridor, Tabriz, Ardabil, Khoy, Maragheh, Urmia and Zanjan anchored Ottoman-Caucasian caravan trade and served as the original power base of the Safavid dynasty before royal patronage shifted southeastward to Qazvin (1555AD) and Isfahan (1598AD) [@Rieber2014Struggle; @Wing2016Jalayirids; @Nag2026History]. To the north across the Alborz crest, humid Caspian towns—Rasht, Lahijan, Amol, Babol, Sari and Astarabad (Gorgan)—formed a dense agricultural ribbon supported by wet-rice cultivation and raw silk production [@Sadan2023Masters; @Rieber2014Struggle].

On the interior plateau, urban continuity depended on gravity-fed subterranean *qanat* aqueducts tapping snowmelt from surrounding mountain ranges [@Saatsaz2023Technology]. Isfahan, Kashan, Qom, Yazd and Kerman functioned as specialised textile, ceramic and carpet-weaving workshops connected across arid steppe expanses by fortified caravanserais [@Farshi2024Gateways; @Groot1978Kerman]. Following the 1722AD Afghan siege of Isfahan, the Afsharid wars and the Zand interlude centred on Shiraz, Qajar unification fixed the imperial capital at Tehran in 1786AD [@Mashayekhi2019Regimes; @Kondo2002Iranian]. Over the nineteenth century, Tehran expanded rapidly beyond its Safavid mud walls under Nasir al-Din Shah's 1868AD octagonal expansion plan, drawing internal migrants from Azerbaijan, Kashan and Khorasan [@Mashayekhi2019Regimes; @Vahdat2017Occidental; @Bayat1998Street].

## Frontier Hubs and Modernising Gateways

In the western Zagros arc, Kermanshah, Sanandaj, Hamadan, Borujerd, Arak (Sultanabad) and Khorramabad mediated trade between the plateau and Ottoman Baghdad while serving as seasonal market centres for Kurdish, Lur and Bakhtiari pastoral confederations [@Cabi2019Impact; @Rieber2014Struggle]. Along the southern littoral and lower Karun basin, Bandar-e Abbas, Bushehr, Ahvaz, Dezful and Shushtar connected interior caravan routes to Indian Ocean steam shipping, while the 1908AD discovery of petroleum at Masjed-e Soleyman created Iran's earliest industrial oil towns [@Sedighi2025Developmen; @Groot1978Kerman]. In the northeast and southeast, Mashhad—anchored by the Imam Reza shrine endowments (*vaqf*)—dominated Khorasan alongside Nishapur, Sabzevar, Bojnurd and Birjand, while Zahedan emerged as a strategic customs crossroads linking Sistan and Baluchestan to British Indian railheads [@Bosworth2007Historic; @Yarbakhsh2017Placing; @ISRAYELYAN2025Iran].

# Methodology

## Source Integration and Deduplication Ledger

The settlement gazetteer builds its 380-site register through a three-wave saturation protocol spanning 429 official national census and historical register rows and 380 measured-area archaeological and historical gazetteer records: Wave 1 anchors 120 principal urban centres in primary Iranian census, fiscal and historical registers, Wave 2 adds 260 provincial towns, *qanat* oases and historical caravan stations through case-by-case archival assessment drawing on historical settlement corpora (including Al-Thurayya and Euratlas), Safavid travelogues, Qajar municipal counts, provincial geographies (*Farsnameh-ye Naseri*, *Jughrafiya-yi Kerman*) and consular gazetteers, and Wave 3 confirms asymptotic saturation with zero newly included places [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman; @Bosworth2007Historic]. Every candidate in the source ledger undergoes spatial proximity clustering and historical foundation-year screening before inclusion.

Out of 429 evaluated candidate places, 380 settlements pass all screening rules and enter the quantitative register, while 49 candidates are excluded with explicit reason codes. Thirty co-located suburban or variant-spelling localities situated within 2,2 km of primary urban cores—such as *Iṣbahān*, *Šīrāz*, *Qazwīn*, *Zanǧān*, *Tustar* and *Kāzarūn*—are merged into their canonical parents to prevent double-counting, while nineteen duplicate transliteration or multi-source census aliases within 25 km (including *Tabrīz*, *Hamaḏān*, *Ardabīl*, *Marageh*, *Khoy* and *al-Damġān*) are collapsed into unified canonical entries. Post-1925AD twentieth-century foundations are filtered outside the 1501-1925AD study bounds to eliminate anachronistic back-projection.

## Spatial Assignment and ADM2 Disaggregation

To test sub-regional urban balance across the five ecological zones, each geocoded settlement coordinate is assigned via point-in-polygon containment (with nearest-boundary snapping for coastal port coordinates) against the smooth vector polygons of the five macro-regions. Within the broader HANDBOOK spatial pipeline, urban core populations are subtracted from sub-regional totals within a two-pixel buffer prior to non-stationary Matérn ($\nu = 3/2$) rural kriging, while 379 modern Iranian ADM2 (*shahrestan*) geoBoundaries polygons provide strictly mass-conserving pycnophylactic constraints (65.864 regional unit-year checks, maximum relative error 5,85e-08) [@Runfola2020GeoBoundaries; @Danaei2019Iran].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 429 candidate entries (380 included, 49 excluded, zero unaccounted records), full coordinate coverage across all 380 included settlements and complete sub-regional representation across all five ecological zones (49 to 132 assessed settlements per macro-region). Across the 1501AD to 1925AD domain, 108 continuous centres carry trajectories from the Safavid accession through the end of Qajar rule, 8 documented Safavid, Qajar and early industrial foundations enter following their founding dates (1612AD to 1916AD), and 264 additional oasis and provincial settlements document period-specific early modern occupation, capturing both seventeenth-century Safavid urban zeniths (Isfahan 335k, Qazvin 88k, Kashan 62k, Ardabil 46k) and late Qajar urban leadership in Tehran (252k), Tabriz (212k) and Mashhad (105k). Figure \ref{fig:sett-gazetteer} displays the Zipf rank-size regression ($\alpha = 1,11$, $R^2 = 0,87$, $n = 380$) alongside the twelve largest settlements by peak documented population.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-safavid-afsharid-qajar-iran-settlements/fig4_safavid_afsharid_qajar_iran_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size curve and top twelve catalogued urban centres across Iran, 1501AD to 1925AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-sett} lists the leading 45 individually assessed Iranian settlements ordered by peak documented population across the 1501AD to 1925AD domain. Isfahan (335k in 1700AD), Tehran (252k in 1925AD), Tabriz (212k), Mashhad (105k) and Qazvin (88k in 1580AD) occupy the top five ranks, followed by Shiraz (75k), Rasht (69k), Hamadan (64k), Kashan (62k in 1650AD), Kermanshah (60,5k), Kerman (52,4k) and Yazd (51,8k), alongside regional provincial, maritime and industrial hubs across Azerbaijan and the Caspian littoral (Ardabil, Babol, Urmia, Zanjan, Khoy, Maragheh, Sari), the central plateau (Qom, Arak), the western Zagros (Borujerd, Sanandaj), Khorasan (Sabzevar, Nishapur) and Fars, Khuzestan and the Persian Gulf (Hormuz, Dezful, Abadan, Shushtar, Bushehr, Jahrom).

<figure class="crd-table-figure" id="tab:top45-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1501AD</th><th class="crd-th">1800AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Isfahan</strong></td><td class="crd-td">32,65; 51,67</td><td class="crd-td">1501-1925AD</td><td class="crd-td">68k</td><td class="crd-td">58k</td><td class="crd-td">335k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Tehran</strong></td><td class="crd-td">35,69; 51,39</td><td class="crd-td">1501-1925AD</td><td class="crd-td">11k</td><td class="crd-td">45k</td><td class="crd-td">252k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Tabriz</strong></td><td class="crd-td">38,08; 46,29</td><td class="crd-td">1501-1925AD</td><td class="crd-td">160k</td><td class="crd-td">60k</td><td class="crd-td">212k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">36,26; 59,62</td><td class="crd-td">1501-1925AD</td><td class="crd-td">31k</td><td class="crd-td">50k</td><td class="crd-td">105k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Qazvin</strong></td><td class="crd-td">36,27; 50</td><td class="crd-td">1501-1925AD</td><td class="crd-td">25k</td><td class="crd-td">25,5k</td><td class="crd-td">88k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Shiraz</strong></td><td class="crd-td">29,59; 52,58</td><td class="crd-td">1501-1925AD</td><td class="crd-td">56k</td><td class="crd-td">40k</td><td class="crd-td">75k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Rasht</strong></td><td class="crd-td">37,28; 49,58</td><td class="crd-td">1501-1925AD</td><td class="crd-td">12k</td><td class="crd-td">23k</td><td class="crd-td">69k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Hamadan</strong></td><td class="crd-td">34,8; 48,51</td><td class="crd-td">1501-1925AD</td><td class="crd-td">28k</td><td class="crd-td">26k</td><td class="crd-td">64k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Kashan</strong></td><td class="crd-td">33,99; 51,44</td><td class="crd-td">1501-1925AD</td><td class="crd-td">36k</td><td class="crd-td">22k</td><td class="crd-td">62k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Kermanshah</strong></td><td class="crd-td">34,31; 47,07</td><td class="crd-td">1501-1925AD</td><td class="crd-td">11,5k</td><td class="crd-td">19,5k</td><td class="crd-td">60,5k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Kerman</strong></td><td class="crd-td">30,28; 57,08</td><td class="crd-td">1501-1925AD</td><td class="crd-td">24k</td><td class="crd-td">18,5k</td><td class="crd-td">52,4k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">31,9; 54,37</td><td class="crd-td">1501-1925AD</td><td class="crd-td">28k</td><td class="crd-td">34k</td><td class="crd-td">51,8k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Ardabil</strong></td><td class="crd-td">38,25; 48,3</td><td class="crd-td">1501-1925AD</td><td class="crd-td">34k</td><td class="crd-td">10,2k</td><td class="crd-td">46k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Babol</strong></td><td class="crd-td">36,55; 52,68</td><td class="crd-td">1501-1925AD</td><td class="crd-td">6,2k</td><td class="crd-td">24k</td><td class="crd-td">46k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>al-Rayy</strong></td><td class="crd-td">35,63; 51,51</td><td class="crd-td">1501-1750AD</td><td class="crd-td">44,3k</td><td class="crd-td">-</td><td class="crd-td">44,3k (1501AD)</td></tr>
<tr><td class="crd-td"><strong>al-Nūqān</strong></td><td class="crd-td">36,21; 59,59</td><td class="crd-td">1501-1750AD</td><td class="crd-td">44,3k</td><td class="crd-td">-</td><td class="crd-td">44,3k (1501AD)</td></tr>
<tr><td class="crd-td"><strong>Qumm</strong></td><td class="crd-td">34,63; 50,91</td><td class="crd-td">1501-1750AD</td><td class="crd-td">44,2k</td><td class="crd-td">-</td><td class="crd-td">44,2k (1501AD)</td></tr>
<tr><td class="crd-td"><strong>Ahvaz</strong></td><td class="crd-td">31,32; 48,67</td><td class="crd-td">1501-1925AD</td><td class="crd-td">1,6k</td><td class="crd-td">1,3k</td><td class="crd-td">43k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Tareiana</strong></td><td class="crd-td">31,32; 48,74</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Daskerah</strong></td><td class="crd-td">34,14; 49,68</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Hormuz</strong></td><td class="crd-td">27,07; 56,46</td><td class="crd-td">1501-1925AD</td><td class="crd-td">36k</td><td class="crd-td">1,5k</td><td class="crd-td">39k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Urmia</strong></td><td class="crd-td">37,55; 45,08</td><td class="crd-td">1501-1925AD</td><td class="crd-td">15,2k</td><td class="crd-td">24k</td><td class="crd-td">36,8k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">34,64; 50,88</td><td class="crd-td">1501-1925AD</td><td class="crd-td">18,5k</td><td class="crd-td">14,8k</td><td class="crd-td">36,5k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Artavil</strong></td><td class="crd-td">38,2; 48,27</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,5k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Gazaka</strong></td><td class="crd-td">38,05; 46,31</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33,5k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Arak</strong></td><td class="crd-td">34,09; 49,69</td><td class="crd-td">1815-1925AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33,2k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Disful</strong></td><td class="crd-td">32,42; 48,39</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,5k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Zanjan</strong></td><td class="crd-td">36,67; 48,48</td><td class="crd-td">1501-1925AD</td><td class="crd-td">10,8k</td><td class="crd-td">14,4k</td><td class="crd-td">32,4k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Aganzana</strong></td><td class="crd-td">36,68; 48,51</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Dezful</strong></td><td class="crd-td">32,38; 48,4</td><td class="crd-td">1501-1925AD</td><td class="crd-td">11,2k</td><td class="crd-td">15,2k</td><td class="crd-td">31,2k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Sanābādh</strong></td><td class="crd-td">36,23; 59,61</td><td class="crd-td">1501-1750AD</td><td class="crd-td">30,7k</td><td class="crd-td">-</td><td class="crd-td">30,7k (1501AD)</td></tr>
<tr><td class="crd-td"><strong>Khoy</strong></td><td class="crd-td">38,55; 44,95</td><td class="crd-td">1501-1925AD</td><td class="crd-td">15,4k</td><td class="crd-td">20,5k</td><td class="crd-td">29,6k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Naysābūr</strong></td><td class="crd-td">36,12; 58,8</td><td class="crd-td">1501-1750AD</td><td class="crd-td">28k</td><td class="crd-td">-</td><td class="crd-td">28k (1501AD)</td></tr>
<tr><td class="crd-td"><strong>Qarmāsīn</strong></td><td class="crd-td">34,32; 47,1</td><td class="crd-td">1501-1750AD</td><td class="crd-td">27,8k</td><td class="crd-td">-</td><td class="crd-td">27,8k (1501AD)</td></tr>
<tr><td class="crd-td"><strong>Borujerd</strong></td><td class="crd-td">33,9; 48,75</td><td class="crd-td">1501-1925AD</td><td class="crd-td">11,8k</td><td class="crd-td">15,4k</td><td class="crd-td">27,2k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Sanandaj</strong></td><td class="crd-td">35,31; 46,99</td><td class="crd-td">1650-1925AD</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">26,4k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Sablakh</strong></td><td class="crd-td">36,78; 45,74</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Abadan</strong></td><td class="crd-td">30,34; 48,3</td><td class="crd-td">1910-1925AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,4k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Shushtar</strong></td><td class="crd-td">32,05; 48,86</td><td class="crd-td">1501-1925AD</td><td class="crd-td">21k</td><td class="crd-td">-</td><td class="crd-td">24,5k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Borudscherd</strong></td><td class="crd-td">33,87; 48,74</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Sirjan</strong></td><td class="crd-td">29,45; 55,68</td><td class="crd-td">1501-1925AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">23,8k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Maragheh</strong></td><td class="crd-td">37,39; 46,24</td><td class="crd-td">1501-1925AD</td><td class="crd-td">16,8k</td><td class="crd-td">14,4k</td><td class="crd-td">23,4k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Casbin</strong></td><td class="crd-td">36,22; 50</td><td class="crd-td">1700-1700AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,9k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Sabzevar</strong></td><td class="crd-td">36,21; 57,68</td><td class="crd-td">1501-1925AD</td><td class="crd-td">12,8k</td><td class="crd-td">12,2k</td><td class="crd-td">22,5k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Bushehr</strong></td><td class="crd-td">28,92; 50,82</td><td class="crd-td">1501-1925AD</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">22,4k (1925AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Safavid, Afsharid and Qajar Iran ordered by peak documented population.</figcaption>
</figure>

## Sub-Regional Distribution Across the Five Macro-Regions

Point-in-polygon assignment against the five vector sub-regions shows broad spatial representation across all of Iran's ecological zones (Table \ref{tab:regsum-sett}). Fars, Khuzestan and the Persian Gulf littoral hold 132 assessed centres (led by Shiraz at 75k), followed by Khorasan, Sistan and Baluchestan with 80 widely spaced oasis hubs across 730.963 km² (led by Mashhad at 105k), Azerbaijan, Gilan and Mazandaran with 64 centres (led by Tabriz at 212k), the Central Plateau with 55 centres (led by Safavid Isfahan at 335k, ahead of Qajar Tehran at 252k) and the Western Zagros with 49 centres (led by Hamadan at 64k and Kermanshah at 60,5k).

<figure class="crd-table-figure" id="tab:regsum-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Settlements</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Azerbaijan, Gilan and Mazandaran</strong></td><td class="crd-td">165.064</td><td class="crd-td">64</td><td class="crd-td">Tabriz (212k)</td></tr>
<tr><td class="crd-td"><strong>Central Plateau</strong></td><td class="crd-td">267.654</td><td class="crd-td">55</td><td class="crd-td">Isfahan (335k)</td></tr>
<tr><td class="crd-td"><strong>Western Zagros</strong></td><td class="crd-td">146.537</td><td class="crd-td">49</td><td class="crd-td">Qazvin (88k)</td></tr>
<tr><td class="crd-td"><strong>Fars, Khuzestan and Gulf</strong></td><td class="crd-td">313.029</td><td class="crd-td">132</td><td class="crd-td">Shiraz (75k)</td></tr>
<tr><td class="crd-td"><strong>Khorasan, Sistan and Baluchestan</strong></td><td class="crd-td">730.963</td><td class="crd-td">80</td><td class="crd-td">Mashhad (105k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Distribution of the 380 individually assessed Iranian settlements across the five macro-regions.</figcaption>
</figure>

# Limitations

Because surviving Persian fiscal rolls rarely enumerated urban inhabitants directly before the mid-nineteenth century, pre-1850AD city totals carry wider uncertainty envelopes than late Qajar benchmarks anchored in municipal counts (such as the 1867AD and 1883-1884AD enumerations of Tehran, Vaziri's 1874-1875AD survey of Kerman and Fasa'i's 1883-1884AD count of Shiraz) and British or Russian consular reports [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman]. While 108 continuous centres are tracked across the entire 1501AD to 1925AD span and 8 documented Safavid, Qajar and early industrial foundations enter following their founding dates (1612AD to 1916AD), secondary oasis towns and historical stations outside the main caravan highways depend on sparser traveller, historical register and gazetteer evidence than the major provincial capitals. Moreover, individual settlement trajectories explicitly register documented historical shocks—including Hormuz's post-1622AD decline, Isfahan's post-1722AD depopulation, the 1830AD to 1832AD Caspian and Khuzestan plague outbreaks, the 1870AD to 1872AD famine and First World War frontier displacement—yet seasonal fluctuations in transhumant tribal encampments and shrine pilgrim populations around Mashhad and Qom remain only partially captured by sedentary urban counts [@Shabani2025Natural; @Taji2026Most].

# Conclusion

The 380-settlement gazetteer records Iran's four-century urban transformation from Safavid imperial capitals at Tabriz, Qazvin and Isfahan to a polycentric late Qajar hierarchy led by Tehran, Tabriz and Mashhad and anchored by Caspian-Alborz and southwestern commercial growth. By enforcing strict proximity deduplication, post-1925AD foundation-year filtering and geoBoundaries ADM2 mass conservation, the dataset captures both enduring oasis anchors and the nineteenth-century rise of northern and southwestern commercial gateways [@Runfola2020GeoBoundaries; @Bosworth2007Historic].

# Appendix

Table \ref{tab:excluded-sett} documents the leading 25 of 49 excluded candidate entries from the regional source ledger, illustrating how co-located suburban or variant-spelling merges and transliteration duplicate aliases are separated from the canonical 380-settlement register.

<figure class="crd-table-figure" id="tab:excluded-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Reason Code</th><th class="crd-th">Methodological Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Šīrāz</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Iṣbahān</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>al-Ahwāz</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Hamadhān</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Rasht</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Ardabīl</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Tabrīz</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Bisitun</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Ormi</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Sihna</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Reeshehr</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Com</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Dezbaz</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Ekbatan</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Urmīyah</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>al-Sīrjān</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Qāšān</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Khoy</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Ahar</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Miyana</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Marageh</strong></td><td class="crd-td">Variant alias (&lt; 25 km)</td><td class="crd-td">Merged multi-source census/variant duplicate within 25 km of canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Salamas</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Zanjān</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
<tr><td class="crd-td"><strong>Sīsar</strong></td><td class="crd-td">Suburban / variant merge (&lt; 2,2 km)</td><td class="crd-td">Co-located or variant-spelling locality within 2,2 km merged into canonical Iran settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 25 excluded candidate entries from the regional source ledger with exclusion reasons.</figcaption>
</figure>

# Sources

This gazetteer synthesises case-by-case historical urban assessments drawn from Safavid travelogues, Persian endowment (*vaqf*) and provincial geographies, Qajar municipal counts, British and Russian consular gazetteers and modern Iranian urban historiography, cross-checked against historical administrative registers [@Kondo2002Iranian; @Mashayekhi2019Regimes; @Groot1978Kerman; @Bosworth2007Historic]. Sub-regional hydraulic and agrarian contexts draw on Saatsaz and Rezaei [@Saatsaz2023Technology], Sadan [@Sadan2023Masters] and Amghani et al. [@Amghani2025Factors], while urban social and minority community structures incorporate Nemati, Faizee and Advay [@Nemati2026Iranian], Cabi [@Cabi2019Impact], Bayat [@Bayat1998Street], Vahdat [@Vahdat2017Occidental] and Farshi [@Farshi2024Gateways]. Frontier port, oilfield and borderland urban shifts draw on Rieber [@Rieber2014Struggle], Akhmedov [@Akhmedov2019British], Sedighi [@Sedighi2025Developmen], Yarbakhsh [@Yarbakhsh2017Placing] and Israyelyan [@ISRAYELYAN2025Iran], while famine and epidemic disruptions incorporate Sha'bani, Bayati and Khoshdel [@Shabani2025Natural], Taji et al. [@Taji2026Most] and Majd [@Majd2025Historiogr]. Spatial alignment and pycnophylactic disaggregation employ geoBoundaries ADM2 polygons [@Runfola2020GeoBoundaries] paired with national demographic transitions documented by Danaei et al. [@Danaei2019Iran].
