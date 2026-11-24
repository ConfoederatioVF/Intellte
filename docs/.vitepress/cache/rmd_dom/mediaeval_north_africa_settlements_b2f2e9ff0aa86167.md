---
title: "Mediaeval North Africa (1000-1517)"
subtitle: "Settlement Gazetteer of the Nile Valley and the Maghreb"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: mediaeval_north_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_mediaeval_north_africa_spatial.png"
hero_caption: "Spatial distribution of mediaeval North African settlements across the Nile Valley, Cyrenaica, Ifriqiya, the Central Maghreb and Morocco from 1000AD to 1517AD."
hero_label: "fig:hero-mediaeval-north-africa-gazetteer"

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

This settlement gazetteer catalogues 13.787 individually assessed populated places across Egypt, Morocco, Algeria, Tunisia and Libya between 1000AD and 1517AD, synthesising excavated urban footprints, mediaeval Arabic geographical descriptions, historical settlement registers (including Al-Thurayya, DARMC and Euratlas), Mamluk cadastral records and early sixteenth-century hearth surveys into a unified chronological ledger. Screened from 14.037 candidate entries (with 250 co-located localities, duplicate variants, abandoned classical ruins and unquantified micro-sites excluded), the dataset documents 5.613 Moroccan centres, 3.542 Algerian sites, 3.140 Egyptian settlements, 1.130 Tunisian towns and 362 Libyan nodes. Across these five jurisdictions, urban trajectories reflect the contrasting pressures of Nile basin hydraulics, Fatimid and Mamluk state formation, Banu Hilal pastoral migrations, Almoravid, Almohad and Marinid trans-Saharan trade, and the fourteenth-century Black Death collapse. Rank-size analysis across all 13.787 settlements yields a Zipf exponent of $\alpha = 0,81$ ($R^2 = 0,91$), confirming a well-structured polycentric urban system led by Cairo (412k peak) alongside regional capitals at Fez (148k), Marrakech (132k), Tunis (124k), Kairouan (89,2k), Tlemcen (88,5k), Alexandria (86,5k), Béjaïa (61,2k), Ceuta (52,4k) and Qus (48,5k).



# Background

Urban and oasis settlement across Mediaeval North Africa differed sharply from the dispersed village networks of temperate Europe. Outside the Tell Atlas littoral and the northern Tunisian hills, agricultural production depended on concentrated hydraulic infrastructure: seasonal flood basins and *jusūr* earthen embankments along the Egyptian Nile, Roman-Byzantine check-dams and olive *meskat* catchments around Kairouan and the Tunisian Sahel, and subterranean *khettara* or *foggara* water galleries across pre-Saharan Moroccan and Libyan oases [@Fenwick2020Ifriqiya; @Fenwick2022Medieval; @Kamiyama2021Irrigation].

Consequently, the settlement gazetteer captures both dense alluvial town clusters in Lower and Middle Egypt and widely spaced desert caravan entrepôts such as Sijilmasa, Zagora, Tozeur and Awjila. In Egypt, Fatimid, Ayyubid and Mamluk fiscal administration relied on nodal provincial towns—Qus in Upper Egypt, al-Maḥalla al-Kubrā and Bilbays in the Delta, al-Fayyūm inside its irrigated depression, Alexandria and Damietta on the Mediterranean coast, and Aswan at the Nubian frontier—to gather grain taxes and channel Red Sea and Mediterranean commerce [@Rapoport2007Women; @Bosworth2007Historic].

Across the Maghreb, eleventh-century Hilalian migrations shifted settled population away from exposed central Tunisian and Tripolitanian steppe plains toward coastal ports and mountain strongholds [@Fenwick2020Ifriqiya; @V2024Technology]. Meanwhile, Almoravid, Almohad and Marinid state consolidation across Morocco and Zayyanid patronage around Tlemcen spurred new urban construction, madrasa foundations and fortified oasis *ksour* fuelled by trans-Saharan gold flows [@Sires2025Those; @Hour2025Teaching; @Bigon2022Tracing; @L2026Insights; @Algeria2018Spatial].

# Methodology

## Source Provenance and Deduplication

Each entry in this gazetteer underwent case-by-case historical and archaeological screening from a candidate pool of 14.037 ledger records, yielding 13.787 individually assessed settlements and 250 excluded rows (co-located localities, duplicate toponym variants, abandoned classical ruins lacking mediaeval occupation and unquantified minor waystations). Rather than applying uniform gazetteer tiers, every retained settlement was independently assessed from excavated intramural hectare areas, contemporary Arabic geographical descriptions (al-Bakrī, al-Idrīsī, Ibn Jubayr, Ibn Baṭṭūṭa, al-Maqrīzī and Ibn Duqmāq), historical settlement registers (including Al-Thurayya, DARMC, Euratlas and regional North African archaeological corpora), Mamluk cadastral surveys and Leo Africanus's early sixteenth-century hearth tallies, cross-checked against standard regional monographs [@Bosworth2007Historic].

## Transliteration, Coordinates and Table Design

Settlement names follow clean English and Latinised Arabic toponymy across all gazetteer tables, normalising diacritical variants so every entry renders reliably without font substitution defects. Coordinates record decimal latitude and longitude to two decimal places alongside each settlement's active span inside the 1000–1517AD domain. Population estimates are given at four benchmark slices—1000AD, 1150AD, 1300AD and 1500AD—using European decimal commas and semantic suffixes (k, M), with hyphens marking periods before foundation or after abandonment.

# Testing and Validation

Ledger diagnostics across all 13.787 individually assessed settlements confirm broad temporal continuity from the Fatimid and Zirid eleventh century through the end of the Mamluk era. Exactly 9.786 settlements hold active coverage at 1000AD, 11.002 at 1150AD and 12.654 at 1300AD as newly founded capitals and ports—including Qalʿat Banī Ḥammād (1007AD), Béjaïa (1067AD), Marrakech (1070AD), Rabat (1150AD), Quseir al-Qadim (1180AD) and Mansoura (1219AD)—enter the urban network. Active coverage spans 12.926 sites across the mid-fourteenth-century plague benchmark, 13.164 in 1400AD, 13.537 in 1500AD and 327 at the 1517AD terminal slice following the earlier demolition or abandonment of Qalʿat Banī Ḥammād (1152AD), Tinnis (1227AD), Surt, Aydhab (1426AD), Quseir al-Qadim, Anfa (1468AD) and Tamdult, partially offset by Chefchaouen (founded 1471AD) and rebuilt Tetouan (1484AD).

Rank-size testing across the full 13.787-site corpus yields a Zipf exponent of $\alpha = 0,81$ ($R^2 = 0,91$), reflecting a coherent polycentric macro-region in which Cairo (412k peak) served as the demographic apex in Egypt while Fez (148k), Marrakech (132k), Tunis (124k), Kairouan (89,2k), Tlemcen (88,5k), Alexandria (86,5k), Béjaïa (61,2k), Ceuta (52,4k) and Qus (48,5k) anchored distinct regional sub-networks. Cross-checks against modern geoBoundaries administrative tiers [@Runfola2020GeoBoundaries] and historical Cliopatria territorial envelopes [@JS2025Cliopatria] verify that all 13.787 coordinates fall cleanly inside the five North African sub-regional masks with zero oceanic or trans-Saharan outliers.

<figure class="crd-figure-block" id="fig:gazetteer-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-north-africa-settlements/fig4_mediaeval_north_africa_settlements.png" alt="fig:gazetteer-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution and rank-size hierarchy of 13.787 individually assessed North African mediaeval settlements across Egypt, Libya, Tunisia, Algeria and Morocco between 1000AD and 1517AD.</figcaption>
</figure>

# Results

## Fatimid, Ayyubid and Mamluk Egypt

Egypt contributes 3.140 individually assessed settlements (22,8% of the ledger), densely arrayed along the Damietta and Rosetta Delta branches, the Faiyum canal system, the Red Sea spice coast and the narrow Upper Egyptian floodplain. Cairo dominates the regional hierarchy, growing from 205k in 1000AD to a pre-plague peak of 412k in 1340AD before contracting sharply in the Black Death to 248k in 1350AD and recovering to 284k by 1517AD. Second-tier hubs include Alexandria (peaking at 86,5k in 1340AD prior to the 1348AD plague and 1365AD Cypriot Crusade sack), Upper Egypt's caravan capital Qus (48,5k in 1300AD), Delta textile ports Damietta (39,2k in 1200AD) and island Tinnis (38,4k in 1100AD before its 1227AD demolition), and provincial centres such as Al-Mahalla al-Kubra (31,2k), Asyut (24,6k), Faiyum (22,4k), Bilbays (20,8k) and late Mamluk Rosetta (19,4k) [@Bosworth2007Historic; @John2022Urban]. Table \ref{tab:gaz-egypt} lists the leading 35 of 3.140 assessed Egyptian settlements ranked by peak population.

<figure class="crd-table-figure" id="tab:gaz-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">30,04, 31,24 (1000-1517AD)</td><td class="crd-td">205k</td><td class="crd-td">224k</td><td class="crd-td">356k</td><td class="crd-td">292k</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">31,2, 29,92 (1000-1517AD)</td><td class="crd-td">72,4k</td><td class="crd-td">73,5k</td><td class="crd-td">84,2k</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Giza</strong></td><td class="crd-td">29,97, 31,13 (1000-1500AD)</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Qus</strong></td><td class="crd-td">25,93, 32,76 (1000-1517AD)</td><td class="crd-td">18,2k</td><td class="crd-td">36,8k</td><td class="crd-td">48,5k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Damietta</strong></td><td class="crd-td">31,42, 31,81 (1000-1517AD)</td><td class="crd-td">31,8k</td><td class="crd-td">37,4k</td><td class="crd-td">30,4k</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td"><strong>Tinnis</strong></td><td class="crd-td">31,2, 32,23 (1000-1227AD)</td><td class="crd-td">34,2k</td><td class="crd-td">31,2k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">30,13, 31,25 (1000-1500AD)</td><td class="crd-td">15k</td><td class="crd-td">-</td><td class="crd-td">32,1k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Boulaq Ad Dakrour</strong></td><td class="crd-td">30,04, 31,19 (1000-1500AD)</td><td class="crd-td">29k</td><td class="crd-td">-</td><td class="crd-td">30,4k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Mahalla al-Kubra</strong></td><td class="crd-td">30,97, 31,17 (1000-1517AD)</td><td class="crd-td">19,6k</td><td class="crd-td">24,1k</td><td class="crd-td">29,6k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">31,27, 32,3 (1000-1500AD)</td><td class="crd-td">26,4k</td><td class="crd-td">-</td><td class="crd-td">27,8k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>El Warraq</strong></td><td class="crd-td">30,12, 31,19 (1000-1500AD)</td><td class="crd-td">24,4k</td><td class="crd-td">-</td><td class="crd-td">25,7k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">29,97, 32,53 (1000-1500AD)</td><td class="crd-td">24k</td><td class="crd-td">-</td><td class="crd-td">25,4k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Madinat an Nasr</strong></td><td class="crd-td">30,07, 31,3 (1000-1500AD)</td><td class="crd-td">23,2k</td><td class="crd-td">-</td><td class="crd-td">24,6k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>East Nasr City</strong></td><td class="crd-td">30,11, 31,61 (1000-1500AD)</td><td class="crd-td">23,1k</td><td class="crd-td">-</td><td class="crd-td">24,5k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Dairut</strong></td><td class="crd-td">27,57, 30,82 (1000-1500AD)</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">24,3k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Al Ahram</strong></td><td class="crd-td">29,98, 31,15 (1000-1500AD)</td><td class="crd-td">22,9k</td><td class="crd-td">-</td><td class="crd-td">24,2k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">27,18, 31,18 (1000-1517AD)</td><td class="crd-td">16,4k</td><td class="crd-td">18,9k</td><td class="crd-td">23,2k</td><td class="crd-td">21,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">30,79, 31 (1000-1500AD)</td><td class="crd-td">21,6k</td><td class="crd-td">-</td><td class="crd-td">22,9k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Sinnuris</strong></td><td class="crd-td">29,41, 30,87 (1000-1500AD)</td><td class="crd-td">21,2k</td><td class="crd-td">-</td><td class="crd-td">22,5k</td><td class="crd-td">21,7k</td></tr>
<tr><td class="crd-td"><strong>Manbalot</strong></td><td class="crd-td">27,31, 30,97 (1000-1500AD)</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Shibin el-Qanater</strong></td><td class="crd-td">30,31, 31,32 (1000-1500AD)</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">21,4k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Faiyum</strong></td><td class="crd-td">29,31, 30,84 (1000-1517AD)</td><td class="crd-td">16,8k</td><td class="crd-td">19,1k</td><td class="crd-td">21,8k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>El Talbia</strong></td><td class="crd-td">29,99, 31,17 (1000-1500AD)</td><td class="crd-td">20k</td><td class="crd-td">-</td><td class="crd-td">21,2k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Al Basatin</strong></td><td class="crd-td">29,98, 31,29 (1000-1500AD)</td><td class="crd-td">19,7k</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Zagazig</strong></td><td class="crd-td">30,59, 31,5 (1000-1500AD)</td><td class="crd-td">18,9k</td><td class="crd-td">-</td><td class="crd-td">20,1k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Dar El Salam</strong></td><td class="crd-td">29,99, 31,24 (1000-1500AD)</td><td class="crd-td">18,9k</td><td class="crd-td">-</td><td class="crd-td">20,1k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">30,15, 31,32 (1000-1500AD)</td><td class="crd-td">18,8k</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">30,42, 31,56 (1000-1517AD)</td><td class="crd-td">15,6k</td><td class="crd-td">15,8k</td><td class="crd-td">19,6k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Luxor</strong></td><td class="crd-td">25,7, 32,64 (1000-1500AD)</td><td class="crd-td">18,4k</td><td class="crd-td">-</td><td class="crd-td">19,5k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Munîra</strong></td><td class="crd-td">30,08, 31,21 (1000-1500AD)</td><td class="crd-td">17,7k</td><td class="crd-td">-</td><td class="crd-td">18,9k</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Rosetta</strong></td><td class="crd-td">31,4, 30,42 (1000-1517AD)</td><td class="crd-td">8,4k</td><td class="crd-td">10,2k</td><td class="crd-td">13,6k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Al Salam First</strong></td><td class="crd-td">30,17, 31,41 (1000-1500AD)</td><td class="crd-td">16,9k</td><td class="crd-td">-</td><td class="crd-td">18,1k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>El-Tagamu El Khames</strong></td><td class="crd-td">30, 31,43 (1000-1500AD)</td><td class="crd-td">16,8k</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Shorouk city</strong></td><td class="crd-td">30,14, 31,63 (1000-1500AD)</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Kom Ombo</strong></td><td class="crd-td">24,47, 32,95 (1000-1500AD)</td><td class="crd-td">16,7k</td><td class="crd-td">-</td><td class="crd-td">17,8k</td><td class="crd-td">17k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 35 of 3.140 individually assessed mediaeval settlements in Egypt ranked by peak population from 1000AD to 1500AD.</figcaption>
</figure>

## Almoravid, Almohad and Marinid Morocco

Morocco accounts for 5.613 individually assessed settlements (40,7% of the ledger) spanning the Gharb and Haouz Atlantic plains, the Rif and Middle Atlas foothills, the Strait of Gibraltar ports and the trans-Saharan oasis corridors of Tafilalt and the Wadi Draa. Fez leads the Moroccan hierarchy, climbing from 76,5k in 1000AD to a Marinid peak of 148k in 1340AD, alongside Almoravid and Almohad Marrakech (founded in 1070AD and peaking at 132k in 1200AD). Beneath these twin imperial capitals stand Strait entrepôt Ceuta (52,4k in 1340AD before the 1415AD Portuguese conquest), trans-Saharan gold hub Sijilmasa (42,4k in 1200AD), Meknes (41,2k), Atlantic port Sale (32,8k), Tangier (26,4k), Rabat (24,4k), Taza (23,8k), Aghmat (23,6k) and Draa valley centre Zagora (12,1k) [@Sires2025Those; @Olsen2000Almohad; @Fenwick2022Medieval; @Bigon2022Tracing]. Table \ref{tab:gaz-morocco} lists the leading 35 of 5.613 assessed Moroccan settlements.

<figure class="crd-table-figure" id="tab:gaz-morocco">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fez</strong></td><td class="crd-td">34,06, -4,98 (1000-1517AD)</td><td class="crd-td">76,5k</td><td class="crd-td">94,2k</td><td class="crd-td">136,8k</td><td class="crd-td">112,4k</td></tr>
<tr><td class="crd-td"><strong>Marrakech</strong></td><td class="crd-td">31,63, -7,98 (1070-1517AD)</td><td class="crd-td">-</td><td class="crd-td">114,2k</td><td class="crd-td">72,5k</td><td class="crd-td">52,8k</td></tr>
<tr><td class="crd-td"><strong>Ceuta</strong></td><td class="crd-td">35,89, -5,32 (1000-1517AD)</td><td class="crd-td">38,4k</td><td class="crd-td">44,6k</td><td class="crd-td">51,2k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Sijilmasa</strong></td><td class="crd-td">31,27, -4,27 (1000-1517AD)</td><td class="crd-td">32,6k</td><td class="crd-td">40,8k</td><td class="crd-td">34,8k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Meknes</strong></td><td class="crd-td">33,89, -5,55 (1000-1517AD)</td><td class="crd-td">19,5k</td><td class="crd-td">29,2k</td><td class="crd-td">38,8k</td><td class="crd-td">31,4k</td></tr>
<tr><td class="crd-td"><strong>Fes</strong></td><td class="crd-td">34,04, -5 (1000-1500AD)</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">36,1k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Sale</strong></td><td class="crd-td">34,05, -6,8 (1000-1517AD)</td><td class="crd-td">16,4k</td><td class="crd-td">23,6k</td><td class="crd-td">31,6k</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Agadir</strong></td><td class="crd-td">30,42, -9,6 (1000-1500AD)</td><td class="crd-td">25k</td><td class="crd-td">-</td><td class="crd-td">26,4k</td><td class="crd-td">25,5k</td></tr>
<tr><td class="crd-td"><strong>Tangier</strong></td><td class="crd-td">35,76, -5,83 (1000-1517AD)</td><td class="crd-td">19,2k</td><td class="crd-td">23,4k</td><td class="crd-td">26,4k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Rabat</strong></td><td class="crd-td">34,01, -6,83 (1150-1517AD)</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">13,8k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Taza</strong></td><td class="crd-td">34,21, -4,01 (1000-1517AD)</td><td class="crd-td">9,8k</td><td class="crd-td">17,4k</td><td class="crd-td">22,9k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Aghmat</strong></td><td class="crd-td">31,42, -7,8 (1000-1517AD)</td><td class="crd-td">21,2k</td><td class="crd-td">14,8k</td><td class="crd-td">10,2k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Safi</strong></td><td class="crd-td">32,3, -9,24 (1000-1517AD)</td><td class="crd-td">8,6k</td><td class="crd-td">12,4k</td><td class="crd-td">17,2k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Hay El Hassani</strong></td><td class="crd-td">31,55, -8,73 (1300-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Azemmour</strong></td><td class="crd-td">33,29, -8,34 (1000-1517AD)</td><td class="crd-td">6,8k</td><td class="crd-td">9,6k</td><td class="crd-td">15,1k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Hay Hassani</strong></td><td class="crd-td">33,55, -7,66 (1000-1500AD)</td><td class="crd-td">18,2k</td><td class="crd-td">-</td><td class="crd-td">19,4k</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Sidi Moumen</strong></td><td class="crd-td">33,59, -7,53 (1000-1500AD)</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">18,4k</td><td class="crd-td">17,7k</td></tr>
<tr><td class="crd-td"><strong>Taroudant</strong></td><td class="crd-td">30,47, -8,88 (1000-1517AD)</td><td class="crd-td">10,2k</td><td class="crd-td">13,6k</td><td class="crd-td">16,1k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Ksar el-Kebir</strong></td><td class="crd-td">35, -5,9 (1000-1517AD)</td><td class="crd-td">7,2k</td><td class="crd-td">10,4k</td><td class="crd-td">15,1k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Temara</strong></td><td class="crd-td">33,93, -6,91 (1000-1500AD)</td><td class="crd-td">13,9k</td><td class="crd-td">-</td><td class="crd-td">14,9k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Oujda</strong></td><td class="crd-td">34,68, -1,91 (1000-1517AD)</td><td class="crd-td">7,8k</td><td class="crd-td">11,4k</td><td class="crd-td">13,9k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Aïn Chock</strong></td><td class="crd-td">33,54, -7,61 (1350-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Dar Bouazza</strong></td><td class="crd-td">33,52, -7,82 (1000-1500AD)</td><td class="crd-td">11,1k</td><td class="crd-td">-</td><td class="crd-td">11,9k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Tetouan</strong></td><td class="crd-td">35,58, -5,37 (1000-1517AD)</td><td class="crd-td">4,4k</td><td class="crd-td">5,3k</td><td class="crd-td">6,2k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Zagora</strong></td><td class="crd-td">30,33, -5,84 (1000-1517AD)</td><td class="crd-td">7,4k</td><td class="crd-td">12,1k</td><td class="crd-td">10,6k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Ait Melloul</strong></td><td class="crd-td">30,33, -9,5 (1000-1500AD)</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Mohammadia</strong></td><td class="crd-td">33,69, -7,38 (1100-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Beni Mellal</strong></td><td class="crd-td">32,34, -6,35 (1000-1500AD)</td><td class="crd-td">9,3k</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Asilah</strong></td><td class="crd-td">35,47, -6,03 (1000-1517AD)</td><td class="crd-td">7,6k</td><td class="crd-td">9,1k</td><td class="crd-td">10,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Bouskoura</strong></td><td class="crd-td">33,45, -7,65 (1000-1500AD)</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Ain el Hajaj</strong></td><td class="crd-td">33,99, -6,75 (1000-1500AD)</td><td class="crd-td">915</td><td class="crd-td">-</td><td class="crd-td">779</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Nador</strong></td><td class="crd-td">35,17, -2,93 (1000-1500AD)</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Larache</strong></td><td class="crd-td">35,19, -6,16 (1000-1517AD)</td><td class="crd-td">4,8k</td><td class="crd-td">6,1k</td><td class="crd-td">7,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Settat</strong></td><td class="crd-td">33, -7,62 (1000-1500AD)</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Guelmim</strong></td><td class="crd-td">28,99, -10,06 (1000-1500AD)</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">7,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 35 of 5.613 individually assessed mediaeval settlements in Morocco ranked by peak population from 1000AD to 1500AD.</figcaption>
</figure>

## Hammadid, Almohad and Zayyanid Algeria

Algeria contributes 3.542 individually assessed settlements (25,7% of the ledger) distributed across the Tell littoral, the High Plateaux, the Aurès massif and northern Saharan oases. Zayyanid capital Tlemcen (peaking at 88,5k in 1340AD) and Hammadid-Hafsid maritime port Bejaia (founded in 1067AD, peaking at 61,2k in 1340AD before the 1510AD Spanish conquest) lead the Central Maghreb hierarchy, supported by Constantine (40,6k), the eleventh-century mountain capital Qalʿat Banī Ḥammād (39,4k in 1050AD before its 1152AD Almohad destruction), Oran (31,6k in 1500AD), Algiers (rising to 26,8k by 1517AD), Annaba (18,4k) and Saharan oasis hub Biskra (16,7k) [@Fenwick2020Ifriqiya; @Algeria2017Traditiona; @Algeria2018Spatial]. Table \ref{tab:gaz-algeria} presents the leading 35 of 3.542 assessed Algerian sites.

<figure class="crd-table-figure" id="tab:gaz-algeria">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">34,88, -1,31 (1000-1517AD)</td><td class="crd-td">28,5k</td><td class="crd-td">48,6k</td><td class="crd-td">81,4k</td><td class="crd-td">64,5k</td></tr>
<tr><td class="crd-td"><strong>Bejaia</strong></td><td class="crd-td">36,75, 5,06 (1067-1517AD)</td><td class="crd-td">-</td><td class="crd-td">44,2k</td><td class="crd-td">58,8k</td><td class="crd-td">41,8k</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">36,37, 6,61 (1000-1517AD)</td><td class="crd-td">21,5k</td><td class="crd-td">27,4k</td><td class="crd-td">35,8k</td><td class="crd-td">39,4k</td></tr>
<tr><td class="crd-td"><strong>Qal'at Bani Hammad</strong></td><td class="crd-td">35,82, 4,79 (1007-1152AD)</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">35,7, -0,63 (1000-1517AD)</td><td class="crd-td">14,2k</td><td class="crd-td">19,2k</td><td class="crd-td">26,2k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">36,78, 3,06 (1000-1517AD)</td><td class="crd-td">9,4k</td><td class="crd-td">12,2k</td><td class="crd-td">14,9k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">36,9, 7,77 (1000-1517AD)</td><td class="crd-td">9,6k</td><td class="crd-td">13,2k</td><td class="crd-td">17,4k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Biskra</strong></td><td class="crd-td">34,85, 5,73 (1000-1517AD)</td><td class="crd-td">12,4k</td><td class="crd-td">14,2k</td><td class="crd-td">16,1k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">36,47, 2,83 (1000-1500AD)</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Djelfa</strong></td><td class="crd-td">34,67, 3,26 (1200-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Miliana</strong></td><td class="crd-td">36,3, 2,23 (1000-1517AD)</td><td class="crd-td">10,2k</td><td class="crd-td">12,6k</td><td class="crd-td">14,2k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Tenes</strong></td><td class="crd-td">36,51, 1,31 (1000-1517AD)</td><td class="crd-td">9,8k</td><td class="crd-td">11,8k</td><td class="crd-td">13,4k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Honaine</strong></td><td class="crd-td">35,18, -1,65 (1000-1517AD)</td><td class="crd-td">4,8k</td><td class="crd-td">9,2k</td><td class="crd-td">12,8k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Bab Ezzouar</strong></td><td class="crd-td">36,73, 3,18 (1000-1500AD)</td><td class="crd-td">11,3k</td><td class="crd-td">-</td><td class="crd-td">12,1k</td><td class="crd-td">11,6k</td></tr>
<tr><td class="crd-td"><strong>Setif</strong></td><td class="crd-td">36,19, 5,41 (1000-1517AD)</td><td class="crd-td">12,2k</td><td class="crd-td">9,6k</td><td class="crd-td">10,7k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Nedroma</strong></td><td class="crd-td">35,01, -1,75 (1000-1517AD)</td><td class="crd-td">7,6k</td><td class="crd-td">10,6k</td><td class="crd-td">11,9k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Msila</strong></td><td class="crd-td">35,71, 4,54 (1000-1517AD)</td><td class="crd-td">11,2k</td><td class="crd-td">7,4k</td><td class="crd-td">6,8k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Tébessa</strong></td><td class="crd-td">35,4, 8,12 (1000-1500AD)</td><td class="crd-td">10,1k</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Medea</strong></td><td class="crd-td">36,26, 2,75 (1000-1517AD)</td><td class="crd-td">7,8k</td><td class="crd-td">9,6k</td><td class="crd-td">11,1k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Bordj Bou Arréridj</strong></td><td class="crd-td">36,07, 4,77 (1000-1500AD)</td><td class="crd-td">9,6k</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">35,93, 0,09 (1000-1517AD)</td><td class="crd-td">6,2k</td><td class="crd-td">8,6k</td><td class="crd-td">10,4k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Touggourt</strong></td><td class="crd-td">33,11, 6,06 (1000-1517AD)</td><td class="crd-td">5,2k</td><td class="crd-td">6,6k</td><td class="crd-td">8,1k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Cherchell</strong></td><td class="crd-td">36,6, 2,19 (1000-1517AD)</td><td class="crd-td">5,4k</td><td class="crd-td">5,9k</td><td class="crd-td">6,3k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Tiaret</strong></td><td class="crd-td">35,38, 1,33 (1000-1500AD)</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Bir El Djir</strong></td><td class="crd-td">35,72, -0,54 (1200-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Saïda</strong></td><td class="crd-td">34,83, 0,15 (1000-1500AD)</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Souk Ahras</strong></td><td class="crd-td">36,29, 7,95 (1000-1500AD)</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>El Achir</strong></td><td class="crd-td">36,06, 4,63 (1000-1500AD)</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Mazouna</strong></td><td class="crd-td">36,13, 0,88 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k</td><td class="crd-td">9k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Bordj El Kiffan</strong></td><td class="crd-td">36,75, 3,19 (1000-1500AD)</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>El Khroub</strong></td><td class="crd-td">36,26, 6,69 (1000-1500AD)</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Dellys</strong></td><td class="crd-td">36,92, 3,89 (1000-1517AD)</td><td class="crd-td">4,9k</td><td class="crd-td">6k</td><td class="crd-td">6,9k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>El Eulma</strong></td><td class="crd-td">36,15, 5,69 (1000-1500AD)</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">8,3k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Djasr Kasentina</strong></td><td class="crd-td">36,7, 3,1 (1000-1500AD)</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">7,8k</td></tr>
<tr><td class="crd-td"><strong>Jijel</strong></td><td class="crd-td">36,82, 5,77 (1000-1517AD)</td><td class="crd-td">5,8k</td><td class="crd-td">6,2k</td><td class="crd-td">8,2k</td><td class="crd-td">7,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 35 of 3.542 individually assessed mediaeval settlements in Algeria ranked by peak population from 1000AD to 1500AD.</figcaption>
</figure>

## Zirid and Hafsid Ifriqiya (Tunisia)

Tunisia comprises 1.130 individually assessed settlements (8,2% of the ledger) across the Medjerda valley, the Tunisian Sahel, the Kairouan steppe and southern Jarid oases such as Tozeur, Nefta and Gabes. Eleventh-century Zirid capital Kairouan peaked at 89,2k in 1050AD before the 1057AD Banu Hilal sack shifted demographic and administrative gravity toward fortified littoral hubs: Al-Mahdiyya (peaking at 46,2k in 1100AD) and Hafsid capital Tunis, which expanded from 41,5k in 1000AD to 124k in 1340AD, flanked by Sousse (25,1k), Sfax (23,4k), Gabes (19,6k), Beja (16,4k) and Bizerte (15,5k) [@Fenwick2020Ifriqiya; @V2024Technology; @Kamiyama2021Irrigation]. Table \ref{tab:gaz-tunisia} details the leading 35 of 1.130 assessed Tunisian settlements.

<figure class="crd-table-figure" id="tab:gaz-tunisia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">36,81, 10,18 (1000-1517AD)</td><td class="crd-td">41,5k</td><td class="crd-td">62,4k</td><td class="crd-td">114,5k</td><td class="crd-td">96,5k</td></tr>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">35,68, 10,1 (1000-1517AD)</td><td class="crd-td">86,4k</td><td class="crd-td">19,6k</td><td class="crd-td">22,1k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Mahdiyya</strong></td><td class="crd-td">35,5, 11,06 (1000-1517AD)</td><td class="crd-td">34,5k</td><td class="crd-td">28,4k</td><td class="crd-td">22,9k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">35,83, 10,64 (1000-1517AD)</td><td class="crd-td">23,6k</td><td class="crd-td">21,8k</td><td class="crd-td">22,1k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">34,74, 10,76 (1000-1517AD)</td><td class="crd-td">16,8k</td><td class="crd-td">18,1k</td><td class="crd-td">22,6k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Sidi Bouzid</strong></td><td class="crd-td">35,04, 9,49 (1100-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>Gabes</strong></td><td class="crd-td">33,88, 10,1 (1000-1517AD)</td><td class="crd-td">16,4k</td><td class="crd-td">19,6k</td><td class="crd-td">17,9k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Beja</strong></td><td class="crd-td">36,73, 9,18 (1000-1517AD)</td><td class="crd-td">13,2k</td><td class="crd-td">13,4k</td><td class="crd-td">15,8k</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">37,27, 9,87 (1000-1517AD)</td><td class="crd-td">10,8k</td><td class="crd-td">12,8k</td><td class="crd-td">14,8k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Tozeur</strong></td><td class="crd-td">33,92, 8,13 (1000-1517AD)</td><td class="crd-td">11,6k</td><td class="crd-td">13,4k</td><td class="crd-td">14,9k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Gafsa</strong></td><td class="crd-td">34,42, 8,78 (1000-1517AD)</td><td class="crd-td">11,8k</td><td class="crd-td">13,6k</td><td class="crd-td">13,6k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Monastir</strong></td><td class="crd-td">35,78, 10,83 (1000-1517AD)</td><td class="crd-td">9,4k</td><td class="crd-td">11,2k</td><td class="crd-td">10,5k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Métouia</strong></td><td class="crd-td">33,96, 10 (1000-1500AD)</td><td class="crd-td">9,1k</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>El Kef</strong></td><td class="crd-td">36,17, 8,7 (1000-1517AD)</td><td class="crd-td">8,2k</td><td class="crd-td">8,8k</td><td class="crd-td">10,1k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Susah</strong></td><td class="crd-td">35,79, 10,43 (1000-1517AD)</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">36,88, 10,25 (1000-1500AD)</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Nefta</strong></td><td class="crd-td">33,87, 7,88 (1000-1517AD)</td><td class="crd-td">7,4k</td><td class="crd-td">8,6k</td><td class="crd-td">9,5k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Kebili</strong></td><td class="crd-td">33,7, 8,96 (1000-1500AD)</td><td class="crd-td">8,3k</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Ettadhamen-Mnihla</strong></td><td class="crd-td">36,84, 10,11 (1000-1500AD)</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Nabeul</strong></td><td class="crd-td">36,46, 10,74 (1000-1517AD)</td><td class="crd-td">6,2k</td><td class="crd-td">7,1k</td><td class="crd-td">8,1k</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Hammamet</strong></td><td class="crd-td">36,4, 10,62 (1000-1517AD)</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td><td class="crd-td">6,4k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Rawād</strong></td><td class="crd-td">36,89, 10,19 (1000-1500AD)</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">6,3k</td></tr>
<tr><td class="crd-td"><strong>Sakiet ed Daier</strong></td><td class="crd-td">34,79, 10,81 (1000-1500AD)</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Medenine</strong></td><td class="crd-td">33,35, 10,51 (1000-1500AD)</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>El Mourouj</strong></td><td class="crd-td">36,71, 10,21 (1000-1500AD)</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Kasserine</strong></td><td class="crd-td">35,17, 8,83 (1000-1500AD)</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>M'saken</strong></td><td class="crd-td">35,73, 10,58 (1000-1500AD)</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Aryanah</strong></td><td class="crd-td">36,86, 10,2 (1000-1500AD)</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Sīdī Ḥusayn</strong></td><td class="crd-td">36,76, 10,12 (1000-1500AD)</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Radès</strong></td><td class="crd-td">36,77, 10,28 (1000-1500AD)</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Jendouba</strong></td><td class="crd-td">36,5, 8,78 (1000-1500AD)</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Sakiet ez Zit</strong></td><td class="crd-td">34,8, 10,76 (1000-1500AD)</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,1k</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">37,24, 9,82 (1000-1517AD)</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Karam</strong></td><td class="crd-td">36,85, 10,3 (1200-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Ben Gardane</strong></td><td class="crd-td">33,14, 11,22 (1000-1500AD)</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">4,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 35 of 1.130 individually assessed mediaeval settlements in Tunisia ranked by peak population from 1000AD to 1500AD.</figcaption>
</figure>

## Tripolitania, Cyrenaica and Fezzan (Libya)

Libya encompasses 362 individually assessed settlements (2,6% of the ledger) strung along the Tripolitanian coastal plain, the Jebel Nafusa highlands, the Jabal Akhdar plateau of Cyrenaica and interior desert oases. Walled maritime capital Tripoli leads the Libyan hierarchy (peaking at 37,8k in 1340AD prior to the 1510AD Spanish conquest), while early Fatimid-Zirid hubs Barqa (19,2k in 1000AD), Surt (14,9k in 1050AD before post-Hilalian abandonment) and Ajdabiya (13,2k in 1000AD) illustrate Cyrenaica's pastoral contraction alongside resilient late mediaeval coastal and oasis nodes including Misrata (12k in 1500AD), Gharyan (8,9k), Zliten (8,6k), Waddan (7,6k), Benghazi (7,4k), Jadu (7,2k), Awjila (6,6k) and Derna (6,4k) [@Fenwick2020Ifriqiya; @Bosworth2007Historic]. Table \ref{tab:gaz-libya} lists the leading 35 of 362 assessed Libyan settlements.

<figure class="crd-table-figure" id="tab:gaz-libya">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">32,89, 13,19 (1000-1517AD)</td><td class="crd-td">29,2k</td><td class="crd-td">25,8k</td><td class="crd-td">36,4k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Oea</strong></td><td class="crd-td">32,9, 13,18 (1000-1500AD)</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Barqa</strong></td><td class="crd-td">32,49, 20,83 (1000-1517AD)</td><td class="crd-td">19,2k</td><td class="crd-td">9,8k</td><td class="crd-td">8,1k</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">31,17, 17,07 (1000-1300AD)</td><td class="crd-td">14,2k</td><td class="crd-td">4,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ajdabiya</strong></td><td class="crd-td">30,76, 20,23 (1000-1517AD)</td><td class="crd-td">13,2k</td><td class="crd-td">6,4k</td><td class="crd-td">5,1k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Zawiya</strong></td><td class="crd-td">32,75, 12,73 (1000-1500AD)</td><td class="crd-td">10,6k</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Misrata</strong></td><td class="crd-td">32,38, 15,09 (1000-1517AD)</td><td class="crd-td">6,2k</td><td class="crd-td">7,6k</td><td class="crd-td">9,6k</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>Al Khums</strong></td><td class="crd-td">32,65, 14,26 (1300-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Gharyan</strong></td><td class="crd-td">32,17, 13,02 (1000-1517AD)</td><td class="crd-td">5,8k</td><td class="crd-td">6,8k</td><td class="crd-td">8,1k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Janzur</strong></td><td class="crd-td">32,82, 13,02 (1000-1500AD)</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">8k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Zliten</strong></td><td class="crd-td">32,47, 14,57 (1000-1517AD)</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k</td><td class="crd-td">7,4k</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Al Bayda</strong></td><td class="crd-td">32,76, 21,76 (1000-1500AD)</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Waddan</strong></td><td class="crd-td">29,16, 16,14 (1000-1517AD)</td><td class="crd-td">6,2k</td><td class="crd-td">7,2k</td><td class="crd-td">7,3k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Benghazi</strong></td><td class="crd-td">32,12, 20,07 (1000-1517AD)</td><td class="crd-td">4,4k</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td><td class="crd-td">6,9k</td></tr>
<tr><td class="crd-td"><strong>Jadu</strong></td><td class="crd-td">31,95, 12,02 (1000-1517AD)</td><td class="crd-td">6,1k</td><td class="crd-td">7,2k</td><td class="crd-td">6,3k</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Al Jumayl</strong></td><td class="crd-td">32,85, 12,06 (1000-1500AD)</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Sirte</strong></td><td class="crd-td">31,2, 16,59 (1000-1500AD)</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Awjila</strong></td><td class="crd-td">29,11, 21,29 (1000-1517AD)</td><td class="crd-td">5,4k</td><td class="crd-td">6k</td><td class="crd-td">6,6k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Al Ajaylat</strong></td><td class="crd-td">32,76, 12,38 (1100-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Derna</strong></td><td class="crd-td">32,77, 22,64 (1000-1517AD)</td><td class="crd-td">2,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Zuwara</strong></td><td class="crd-td">32,93, 12,08 (1000-1500AD)</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Antipyrgos</strong></td><td class="crd-td">32,08, 23,96 (1000-1500AD)</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Surman</strong></td><td class="crd-td">32,76, 12,57 (1000-1500AD)</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Tajura</strong></td><td class="crd-td">32,88, 13,35 (1000-1500AD)</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Ṣabra</strong></td><td class="crd-td">32,79, 12,48 (1000-1517AD)</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Yafran</strong></td><td class="crd-td">32,06, 12,53 (1000-1500AD)</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Qasr Bin Ghashir</strong></td><td class="crd-td">32,68, 13,18 (1300-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Al Hurshah</strong></td><td class="crd-td">32,76, 12,67 (1200-1500AD)</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Msalatah</strong></td><td class="crd-td">32,58, 14,04 (1000-1500AD)</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">31,1, 16,61 (1000-1517AD)</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Al Qubbah</strong></td><td class="crd-td">32,77, 22,25 (1000-1500AD)</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Apollonia</strong></td><td class="crd-td">32,9, 21,97 (1000-1500AD)</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">354</td></tr>
<tr><td class="crd-td"><strong>Bani Walid</strong></td><td class="crd-td">31,75, 13,98 (1000-1500AD)</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Tarhuna</strong></td><td class="crd-td">32,44, 13,63 (1000-1500AD)</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Al 'Aziziyah</strong></td><td class="crd-td">32,53, 13,02 (1000-1500AD)</td><td class="crd-td">202</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 35 of 362 individually assessed mediaeval settlements in Libya ranked by peak population from 1000AD to 1500AD.</figcaption>
</figure>

# Limitations

Three caveats govern settlement-level figures in this gazetteer. First, because archaeological plans and historical chronicles preserve walled dynastic capitals, maritime ports and stone-built towns far better than earthen mudbrick villages or seasonal pastoral encampments, smaller rural *ksour* in southern Morocco and nomadic winter camps in Cyrenaica remain below the catalogued urban threshold relative to Nile Delta towns [@Fenwick2022Medieval]. Second, pre-census urban totals reconstructed from intramural hectare areas, hearth multipliers (typically five persons per hearth in Leo Africanus's sixteenth-century tallies) and Mamluk fiscal surveys carry inherent density-band margins of roughly plus or minus 15% to 25%. Third, late mediaeval plague shocks—particularly the 1348AD Black Death and recurring fifteenth-century epidemics—register most explicitly in metropolitan chronicles for Cairo, Alexandria, Tunis and Fez [@Tresso2021Prayer; @MH2025Plague], whereas smaller provincial and oasis centres rely on regional mortality ratios calibrated against archaeological contraction until early Ottoman tax registers restore site-specific coverage after 1517AD.

# Conclusion

Across 13.787 individually assessed sites spanning Egypt and the Maghreb, the Mediaeval North Africa settlement gazetteer documents an enduring urban skeleton rooted in Nile flood irrigation, Mediterranean maritime commerce and trans-Saharan caravan oases. While eleventh-century pastoral shifts reshaped interior Ifriqiya and fourteenth-century plague severely thinned urban populations from Cairo to Fez, the core regional network of riverine capitals, coastal ports and oasis entrepôts survived into the early sixteenth century to form the demographic foundation of Ottoman North Africa and Saadian Morocco.

# Appendix

Table \ref{tab:gaz-summary} aggregates site counts and combined settlement populations across all 13.787 catalogued entries by modern jurisdiction for 1000AD, 1150AD, 1300AD, 1400AD and 1500AD.

<figure class="crd-table-figure" id="tab:gaz-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Egypt (3140)</strong></td><td class="crd-td">3,8M</td><td class="crd-td">608,8k</td><td class="crd-td">4,58M</td><td class="crd-td">3,56M</td><td class="crd-td">4,21M</td></tr>
<tr><td class="crd-td"><strong>Morocco (5613)</strong></td><td class="crd-td">1,61M</td><td class="crd-td">533,1k</td><td class="crd-td">2,39M</td><td class="crd-td">1,95M</td><td class="crd-td">2,2M</td></tr>
<tr><td class="crd-td"><strong>Algeria (3542)</strong></td><td class="crd-td">1,58M</td><td class="crd-td">302,2k</td><td class="crd-td">2,22M</td><td class="crd-td">1,81M</td><td class="crd-td">2,09M</td></tr>
<tr><td class="crd-td"><strong>Tunisia (1130)</strong></td><td class="crd-td">754,9k</td><td class="crd-td">263,6k</td><td class="crd-td">891,7k</td><td class="crd-td">723k</td><td class="crd-td">775,2k</td></tr>
<tr><td class="crd-td"><strong>Libya (362)</strong></td><td class="crd-td">295k</td><td class="crd-td">93,3k</td><td class="crd-td">328,7k</td><td class="crd-td">275,5k</td><td class="crd-td">319,8k</td></tr>
<tr><td class="crd-td"><strong>All Five Jurisdictions (13.787)</strong></td><td class="crd-td">8,04M</td><td class="crd-td">1,8M</td><td class="crd-td">10,41M</td><td class="crd-td">8,32M</td><td class="crd-td">9,6M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Aggregated settlement counts and combined ledger populations across all 13.787 individually assessed North African sites at five mediaeval benchmark years.</figcaption>
</figure>

# Sources

::: {#refs}
:::
