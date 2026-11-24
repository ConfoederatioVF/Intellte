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

This settlement gazetteer catalogues 1.200 populated places across Egypt, Algeria, Libya, Tunisia and Morocco between 1000AD and 1517AD, linking archival Islamic geographical dictionaries, excavated archaeological sites and classical-to-mediaeval urban surveys into a unified chronological ledger. Derived from 1.450 candidate records compiled across the Published Excavations Atlas (542 sites), the Pleiades Ancient World Gazetteer (392 sites) and the Al-Thurayya Early Islamic Gazetteer (313 sites), the dataset documents 595 Egyptian settlements, 215 Algerian sites, 142 Libyan nodes, 127 Tunisian towns and 121 Moroccan centres. Across these five jurisdictions, urban trajectories reflect the contrasting pressures of Nile basin hydraulics, Fatimid and Mamluk state formation, Banu Hilal pastoral migrations, Almoravid and Marinid trans-Saharan trade, and the fourteenth-century Black Death collapse. Rank-size analysis across all 1.200 settlements yields a Zipf exponent of $\alpha = 0,626$ ($R^2 = 0,689$), confirming a multipolar urban system led by Fusṭāṭ-Cairo alongside regional capitals at Alexandria, Kairouan, Tāhirt, Fez, Sijilmasa and Barqa.



# Background

Urban and oasis settlement across Mediaeval North Africa differed sharply from the dispersed village networks of temperate Europe. Outside the Tell Atlas littoral and the northern Tunisian hills, agricultural production depended on concentrated hydraulic infrastructure: seasonal flood basins and *jusūr* earthen embankments along the Egyptian Nile, Roman-Byzantine check-dams and olive *meskat* catchments around Kairouan and the Tunisian Sahel, and subterranean *khettara* or *foggara* water galleries across pre-Saharan Moroccan and Libyan oases [@Fenwick2020Ifriqiya; @Fenwick2022Medieval; @Kamiyama2021Irrigation].

Consequently, the settlement gazetteer captures both dense alluvial town clusters in Lower and Middle Egypt and widely spaced desert caravan entrepôts such as Sijilmasa, Tarqāla and Ghadames. In Egypt, Fatimid, Ayyubid and Mamluk fiscal administration relied on nodal provincial towns—Bilbays in the eastern Delta, al-Fayyūm inside its irrigated depression, Alexandria and Damietta on the Mediterranean coast, and Aswan at the Nubian frontier—to gather grain taxes and channel Red Sea and Mediterranean commerce [@Rapoport2007Women; @Bosworth2007Historic].

Across the Maghreb, eleventh-century Hilalian migrations shifted settled population away from exposed central Tunisian and Tripolitanian steppe plains toward coastal ports and mountain strongholds [@Fenwick2020Ifriqiya; @V2024Technology]. Meanwhile, Almoravid, Almohad and Marinid state consolidation across Morocco and Zayyanid patronage around Tlemcen spurred new urban construction, madrasa foundations and fortified oasis *ksour* fuelled by trans-Saharan gold flows [@Sires2025Those; @Hour2025Teaching; @Bigon2022Tracing; @L2026Insights; @Algeria2018Spatial].

# Methodology

## Source Provenance and Deduplication

Each entry in this gazetteer underwent multi-stage screening against a candidate pool of 1.450 archival sites. Three primary datasets supplied the spatial backbone: 542 excavated sites from the Published Excavations Atlas (Harvard Dataverse), 392 classical-to-late-antique successor settlements from the Pleiades Ancient World Gazetteer, and 313 early Islamic towns and waystations from the Al-Thurayya Gazetteer of Cornu and Romanov. Duplicate records falling within local urban radii were merged by coordinate matching and Arabic-Latin toponym alignment, while 250 candidate rows lacking mediaeval occupation evidence or reliable coordinates were excluded.

## Transliteration, Coordinates and Table Design

Historical Arabic names from Al-Thurayya preserve scholarly diacritics (such as *ā*, *ū*, *ī*, *ṭ*, *ṣ*, *ǧ*), which are retained across all gazetteer tables while normalising specialised *ta marbuta* terminal glyphs to standard Latin *a* so every entry renders cleanly without font substitution defects. Coordinates record decimal latitude and longitude to two decimal places alongside each settlement's active span inside the 1000–1517AD domain. Population estimates are given at four benchmark slices—1000AD, 1150AD, 1300AD and 1500AD—using European decimal commas and semantic suffixes (k, M), with hyphens marking periods outside a site's active occupation window.

# Testing and Validation

Ledger diagnostics across all 1.200 included settlements confirm dense temporal continuity from the Fatimid and Zirid eleventh century through the end of the Mamluk era. Exactly 1.199 settlements hold active population estimates at 1000AD, 1050AD, 1100AD, 1150AD and 1200AD; 700–701 sites remain active across the Ayyubid, Marinid, Zayyanid and Mamluk slices from 1250AD to 1450AD; 699 sites persist to 1500AD; and 393 entries carry explicit terminal values at 1517AD.

Rank-size testing across the full 1.200-site corpus yields a Zipf exponent of $\alpha = 0,626$ ($R^2 = 0,689$), reflecting a polycentric macro-region in which Cairo-Fusṭāṭ served as the demographic apex in Egypt while Fez, Sijilmasa, Tāhirt, Kairouan and Barqa anchored distinct regional sub-networks. Cross-checks against modern geoBoundaries administrative tiers [@Runfola2020GeoBoundaries] and historical Cliopatria territorial envelopes [@JS2025Cliopatria] verify that all 1.200 coordinates fall cleanly inside the five North African sub-regional masks with zero oceanic or trans-Saharan outliers.

<figure class="crd-figure-block" id="fig:gazetteer-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-north-africa-settlements/fig4_mediaeval_north_africa_settlements.png" alt="fig:gazetteer-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution and rank-size hierarchy of 1.200 North African mediaeval settlements across Egypt, Libya, Tunisia, Algeria and Morocco between 1000AD and 1517AD.</figcaption>
</figure>

# Results

## Fatimid, Ayyubid and Mamluk Egypt

Egypt contributes 595 included settlements (49,6% of the entire ledger), densely arrayed along the Damietta and Rosetta Delta branches, the Faiyum canal system and the narrow Upper Egyptian floodplain. Fusṭāṭ-Cairo dominates the hierarchy at 44,5k–44,9k in the Fatimid core ledger prior to Mamluk metropolitan suburban expansion, supported by second-tier regional nodes at Alexandria (al-Iskandariyya), al-Fayyūm, Bilbays, al-Faramā and Aswan (Uswān), alongside long-lived provincial towns such as Tamiathis (Damietta), Amarna and Memphis [@Bosworth2007Historic; @John2022Urban]. Table \ref{tab:gaz-egypt} lists the 35 highest-ranked Egyptian settlements by peak modelled population.

<figure class="crd-table-figure" id="tab:gaz-egypt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fusṭāṭ</strong></td><td class="crd-td">30,04, 31,25 (1000-1500AD)</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k</td><td class="crd-td">40,9k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>al-Iskandariyya</strong></td><td class="crd-td">31,19, 29,91 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Fayyūm</strong></td><td class="crd-td">29,43, 30,7 (1000-1517AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Bilbays</strong></td><td class="crd-td">30,42, 31,57 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>al-Faramā</strong></td><td class="crd-td">31,02, 32,6 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Uswān</strong></td><td class="crd-td">24,11, 32,98 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Amarna</strong></td><td class="crd-td">27,64, 30,9 (1000-1517AD)</td><td class="crd-td">16,6k</td><td class="crd-td">16,1k</td><td class="crd-td">15,6k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Memphis</strong></td><td class="crd-td">29,85, 31,26 (1000-1517AD)</td><td class="crd-td">15,7k</td><td class="crd-td">15,3k</td><td class="crd-td">14,9k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Deir Abou Menas</strong></td><td class="crd-td">30,84, 29,67 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Behbeit el-Hagar</strong></td><td class="crd-td">31,03, 31,28 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Tamiathis</strong></td><td class="crd-td">31,42, 31,81 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Spania</strong></td><td class="crd-td">28,74, 30,8 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Thmoinepsi</strong></td><td class="crd-td">29,05, 31,1 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Apotheke</strong></td><td class="crd-td">27,04, 31,32 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Paploou</strong></td><td class="crd-td">27,54, 30,79 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Mounesis</strong></td><td class="crd-td">24,68, 30,61 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Dabadib</strong></td><td class="crd-td">25,73, 30,42 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Deir Abu Matta</strong></td><td class="crd-td">25,59, 28,91 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Ramāda</strong></td><td class="crd-td">31,02, 27,61 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Dhāt al-Ḥumām</strong></td><td class="crd-td">30,86, 29,3 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>al-Karyūn</strong></td><td class="crd-td">31,14, 30,13 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Barsīq</strong></td><td class="crd-td">31,08, 30,3 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Rašīd</strong></td><td class="crd-td">31,41, 30,38 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Dayrūṭ</strong></td><td class="crd-td">31,25, 30,45 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">31,04, 30,46 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sanbādha</strong></td><td class="crd-td">31,19, 30,47 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Bayrīs</strong></td><td class="crd-td">24,59, 30,5 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Fuwa</strong></td><td class="crd-td">31,22, 30,51 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ṭaḥā</strong></td><td class="crd-td">28,27, 30,69 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tanda</strong></td><td class="crd-td">27,76, 30,7 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Dayyāy</strong></td><td class="crd-td">31,02, 30,71 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Nastarāwa</strong></td><td class="crd-td">31,49, 30,71 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sanhūr</strong></td><td class="crd-td">31,16, 30,71 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>al-Ušmūnayn</strong></td><td class="crd-td">27,86, 30,76 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Babīj</strong></td><td class="crd-td">30,87, 30,76 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading thirty-five mediaeval settlements in Egypt ranked by peak modelled population from 1000AD to 1500AD.</figcaption>
</figure>

## Almoravid, Almohad and Marinid Morocco

Morocco accounts for 121 included settlements spanning the Gharb and Haouz Atlantic plains, the Rif and Middle Atlas foothills, and the trans-Saharan oasis corridors of Tafilalt and the Wadi Draa. Three major hubs—Sijilmasa, Fez (Fās) and Tarqāla—anchor the upper rank tier at 17,8k–18k in the early Islamic gazetteer before Almohad and Marinid urban growth expanded Fez and Marrakech [@Sires2025Those; @Olsen2000Almohad; @Fenwick2022Medieval; @Bigon2022Tracing]. Table \ref{tab:gaz-morocco} lists the 35 leading Moroccan settlements.

<figure class="crd-table-figure" id="tab:gaz-morocco">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sijilmāsa</strong></td><td class="crd-td">31,28, -4,24 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Fās</strong></td><td class="crd-td">34,07, -5,03 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Tarqāla</strong></td><td class="crd-td">30,5, -8,84 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Madīna 'Alawiyyīn</strong></td><td class="crd-td">34,74, -1,66 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ghuzza</strong></td><td class="crd-td">35,07, -1,93 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Jarāwa Abū al-'Ayš</strong></td><td class="crd-td">35,1, -2,29 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ṣā'</strong></td><td class="crd-td">34,42, -2,9 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Amlīl</strong></td><td class="crd-td">35,3, -2,97 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tābarīdā</strong></td><td class="crd-td">34,32, -3,31 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Hajar al-Naṣr</strong></td><td class="crd-td">35,22, -3,91 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Kazannāya</strong></td><td class="crd-td">34,67, -3,92 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tīzā</strong></td><td class="crd-td">34,22, -4,03 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>'Arīš</strong></td><td class="crd-td">32,3, -4,52 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Maṭmāṭa</strong></td><td class="crd-td">34,12, -4,54 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Namālata</strong></td><td class="crd-td">34,14, -4,63 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Balad Ghumār</strong></td><td class="crd-td">35,2, -4,7 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sabta</strong></td><td class="crd-td">35,86, -5,33 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ṣanhāja</strong></td><td class="crd-td">35,3, -5,52 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Miknāsa</strong></td><td class="crd-td">33,91, -5,57 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Walīla</strong></td><td class="crd-td">34,1, -5,6 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Kurt</strong></td><td class="crd-td">34,59, -5,83 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tanja</strong></td><td class="crd-td">35,78, -5,85 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Baṣra</strong></td><td class="crd-td">34,83, -5,89 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tušummus</strong></td><td class="crd-td">35,07, -5,95 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Azīla</strong></td><td class="crd-td">35,58, -5,97 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Salā</strong></td><td class="crd-td">34,05, -6,79 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tandalī</strong></td><td class="crd-td">31,78, -7,18 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Warīka</strong></td><td class="crd-td">31,45, -7,64 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Aylān</strong></td><td class="crd-td">31,5, -7,7 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Māssa</strong></td><td class="crd-td">30,06, -9,65 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>el Adeb</strong></td><td class="crd-td">35,15, -5,96 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ad Novas</strong></td><td class="crd-td">35,69, -5,93 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ain Kerma</strong></td><td class="crd-td">34,01, -5,62 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Arbaoua</strong></td><td class="crd-td">34,91, -5,91 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Bou Hellou</strong></td><td class="crd-td">34,15, -4,4 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty-five mediaeval settlements in Morocco ranked by peak modelled population from 1000AD to 1500AD.</figcaption>
</figure>

## Hammadid, Almohad and Zayyanid Algeria

Algeria contributes 215 settlements distributed across the Tell littoral, the High Plateaux, the Aurès massif and northern Saharan oases. Tāhirt, Thamugadi and Negrenenses Maiores lead the early mediaeval ledger, complemented by central and eastern nodes such as Ṭubna, Ṭawlaqā and ʿAšīr that bridged coastal Mediterranean ports and Saharan trade routes under Hammadid and Zayyanid rule [@Fenwick2020Ifriqiya; @Algeria2017Traditiona; @Algeria2018Spatial]. Table \ref{tab:gaz-algeria} presents the top 35 Algerian sites.

<figure class="crd-table-figure" id="tab:gaz-algeria">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tāhirt</strong></td><td class="crd-td">35,37, 1,37 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Negrenenses Maiores</strong></td><td class="crd-td">34,45, 7,49 (1000-1517AD)</td><td class="crd-td">18k</td><td class="crd-td">17,7k</td><td class="crd-td">17,1k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Thamugadi</strong></td><td class="crd-td">35,49, 6,47 (1000-1517AD)</td><td class="crd-td">18k</td><td class="crd-td">17,7k</td><td class="crd-td">17,1k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Wahrān</strong></td><td class="crd-td">35,71, -0,62 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Āslān</strong></td><td class="crd-td">35,46, -1,16 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tilimsān</strong></td><td class="crd-td">34,88, -1,32 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Arjikūk</strong></td><td class="crd-td">35,28, -1,46 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Fālūsan</strong></td><td class="crd-td">35,03, -1,76 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Fakkān</strong></td><td class="crd-td">35,22, 0,06 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Huwāra</strong></td><td class="crd-td">35,55, 0,44 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>al-Baṭḥa</strong></td><td class="crd-td">35,78, 0,6 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Mindās</strong></td><td class="crd-td">35,68, 0,83 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>al-Ghuzza</strong></td><td class="crd-td">36,11, 1,09 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tajanna</strong></td><td class="crd-td">36,35, 1,35 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tanas</strong></td><td class="crd-td">36,49, 1,38 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Miliyāna</strong></td><td class="crd-td">36,28, 2,22 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ašrašāl</strong></td><td class="crd-td">36,54, 2,25 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sūq Karā</strong></td><td class="crd-td">36,1, 2,69 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Mattīja</strong></td><td class="crd-td">36,59, 2,84 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Jazīra Banū Zaghannāya</strong></td><td class="crd-td">36,71, 3,09 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>'Ašīr</strong></td><td class="crd-td">35,7, 3,16 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tāmadfūs</strong></td><td class="crd-td">36,74, 3,29 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Marsá al-Dajjāj</strong></td><td class="crd-td">36,73, 3,59 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sūq Ḥamza</strong></td><td class="crd-td">36,36, 3,92 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>al-Masīla</strong></td><td class="crd-td">35,66, 4,53 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Maqqara</strong></td><td class="crd-td">35,54, 5,03 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Bajāya</strong></td><td class="crd-td">36,7, 5,05 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ṭubna</strong></td><td class="crd-td">35,32, 5,36 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ṭawlaqā</strong></td><td class="crd-td">34,69, 5,38 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Saṭīf</strong></td><td class="crd-td">36,16, 5,41 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Jamīlā</strong></td><td class="crd-td">36,24, 5,6 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Banṭiyūs</strong></td><td class="crd-td">34,68, 5,61 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Niqāwus</strong></td><td class="crd-td">35,58, 5,7 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Jījil</strong></td><td class="crd-td">36,77, 5,72 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Biskara</strong></td><td class="crd-td">34,85, 5,73 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading thirty-five mediaeval settlements in Algeria ranked by peak modelled population from 1000AD to 1500AD.</figcaption>
</figure>

## Zirid and Hafsid Ifriqiya (Tunisia)

Tunisia comprises 127 included settlements across the Medjerda valley, the Tunisian Sahel, the Kairouan steppe and southern oases such as Qābis and al-Ḥamma. Kairouan (al-Qayrawān) and Subayṭila lead the early mediaeval urban hierarchy before eleventh-century Hilalian disruption shifted demographic weight toward coastal Hafsid ports and irrigated olive belts [@Fenwick2020Ifriqiya; @V2024Technology; @Kamiyama2021Irrigation]. Table \ref{tab:gaz-tunisia} details the 35 leading Tunisian settlements.

<figure class="crd-table-figure" id="tab:gaz-tunisia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>al-Qayrawān</strong></td><td class="crd-td">35,7, 10,14 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Subayṭila</strong></td><td class="crd-td">35,23, 9,22 (1000-1500AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Qābis</strong></td><td class="crd-td">33,87, 10,09 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Zaghwān</strong></td><td class="crd-td">36,4, 10,14 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">36,77, 10,18 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Qarṭājanna</strong></td><td class="crd-td">36,88, 10,27 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Awdhana</strong></td><td class="crd-td">36,6, 10,28 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sūsa</strong></td><td class="crd-td">35,81, 10,62 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Asfāqus</strong></td><td class="crd-td">34,77, 10,8 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Munastīr</strong></td><td class="crd-td">35,76, 10,8 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Manzil Bāšū</strong></td><td class="crd-td">36,73, 10,94 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Jazīra Abū Šarīk</strong></td><td class="crd-td">37,03, 11 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Mahdiyya</strong></td><td class="crd-td">35,49, 11,06 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Nafṭa</strong></td><td class="crd-td">33,87, 7,9 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tabassā</strong></td><td class="crd-td">35,37, 8,13 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Tawzir</strong></td><td class="crd-td">33,94, 8,15 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>al-Ḥamma</strong></td><td class="crd-td">34,06, 8,19 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Taqyūs</strong></td><td class="crd-td">34,01, 8,26 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Marsá al-Kharaz</strong></td><td class="crd-td">36,85, 8,42 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ṭabarqa</strong></td><td class="crd-td">36,92, 8,81 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Biššará</strong></td><td class="crd-td">33,8, 8,82 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Qafṣa</strong></td><td class="crd-td">34,41, 8,82 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Lurbus</strong></td><td class="crd-td">36,11, 8,84 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Sabība</strong></td><td class="crd-td">35,42, 9,16 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Bāja</strong></td><td class="crd-td">36,68, 9,21 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">37,24, 9,82 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Jalūlā'</strong></td><td class="crd-td">35,78, 9,86 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Henchir Hnich</strong></td><td class="crd-td">36,35, 9,1 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Numluli</strong></td><td class="crd-td">36,52, 9,22 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ad Aquas</strong></td><td class="crd-td">36,75, 10,25 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ain-Golea</strong></td><td class="crd-td">36,47, 9,33 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Castra Corneli</strong></td><td class="crd-td">37,06, 10,12 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Cluacar</strong></td><td class="crd-td">36,73, 9,65 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Drusiliana</strong></td><td class="crd-td">36,25, 8,91 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Lalla Maiza</strong></td><td class="crd-td">36,39, 8,87 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading thirty-five mediaeval settlements in Tunisia ranked by peak modelled population from 1000AD to 1500AD.</figcaption>
</figure>

## Tripolitania, Cyrenaica and Fezzan (Libya)

Libya encompasses 142 settlements strung along the Tripolitanian coastal plain, the Jabal Akhdar plateau of Cyrenaica and deep Fezzan caravan oases. Barqa (al-Marj), Gerdes el-Gerrari, Ṣabra, Ghadames (Ġadāmis) and Surt illustrate the dual coastal-and-caravan structure that sustained regional exchange despite rural contraction after the eleventh century [@Fenwick2020Ifriqiya; @Bosworth2007Historic]. Table \ref{tab:gaz-libya} lists the 35 leading Libyan settlements.

<figure class="crd-table-figure" id="tab:gaz-libya">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coords &amp; Span</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Barqa</strong></td><td class="crd-td">32,38, 20,84 (1000-1517AD)</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k</td><td class="crd-td">16,4k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Gerdes el-Gerrari</strong></td><td class="crd-td">32,53, 21,8 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Ṣabra</strong></td><td class="crd-td">32,79, 12,48 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Aṭrābulus</strong></td><td class="crd-td">32,88, 13,19 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">31,1, 16,61 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Barnīq</strong></td><td class="crd-td">32,11, 20,08 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ajdābiyya</strong></td><td class="crd-td">30,47, 20,2 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ghadāmis</strong></td><td class="crd-td">30,13, 9,48 (1000-1500AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k</td><td class="crd-td">5,9k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Terbu</strong></td><td class="crd-td">25,97, 15,16 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Digdida Selorum</strong></td><td class="crd-td">30,7, 18,17 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Praetorium</strong></td><td class="crd-td">31,28, 15,95 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Ampalaontes</strong></td><td class="crd-td">31,93, 20,03 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Gicherra</strong></td><td class="crd-td">29,3, 21,65 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Medinet Bu Hindi</strong></td><td class="crd-td">32,26, 22,41 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Safsaf</strong></td><td class="crd-td">32,78, 21,95 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Wadi Morgus</strong></td><td class="crd-td">32,85, 22,27 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>el-Gara</strong></td><td class="crd-td">31,99, 24,2 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Marsa Gabes</strong></td><td class="crd-td">31,98, 24,58 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Marsa Lucch</strong></td><td class="crd-td">31,97, 24,75 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Gholaia</strong></td><td class="crd-td">30,58, 15,41 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Surt</strong></td><td class="crd-td">31,13, 17,1 (1000-1517AD)</td><td class="crd-td">6,5k</td><td class="crd-td">6,4k</td><td class="crd-td">6,2k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Aspis</strong></td><td class="crd-td">31,4, 15,73 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Automalax</strong></td><td class="crd-td">30,3, 19,12 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Kozynthion Akra</strong></td><td class="crd-td">30,42, 19,58 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Antipyrgos</strong></td><td class="crd-td">32,08, 23,96 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Locri</strong></td><td class="crd-td">32,92, 12,11 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Pisida</strong></td><td class="crd-td">33,07, 11,77 (1000-1517AD)</td><td class="crd-td">6,4k</td><td class="crd-td">6,3k</td><td class="crd-td">6k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Apollonia</strong></td><td class="crd-td">32,9, 21,97 (1000-1517AD)</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">5,9k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Arsinoe</strong></td><td class="crd-td">32,54, 20,57 (1000-1517AD)</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">5,9k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Cyrene</strong></td><td class="crd-td">32,82, 21,86 (1000-1517AD)</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">5,9k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Darnis</strong></td><td class="crd-td">32,77, 22,64 (1000-1517AD)</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">5,9k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Neapolis</strong></td><td class="crd-td">32,64, 14,3 (1000-1517AD)</td><td class="crd-td">6,3k</td><td class="crd-td">6,1k</td><td class="crd-td">5,9k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Bārjamt</strong></td><td class="crd-td">33,06, 11,64 (1000-1500AD)</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Wādī al-Raml</strong></td><td class="crd-td">32,74, 13,58 (1000-1500AD)</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Zawīla</strong></td><td class="crd-td">25,78, 14,79 (1000-1500AD)</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading thirty-five mediaeval settlements in Libya ranked by peak modelled population from 1000AD to 1500AD.</figcaption>
</figure>

# Limitations

Three caveats govern settlement-level figures in this gazetteer. First, because archaeological excavation atlases preserve stone-built coastal and classical-successor foundations far better than earthen mudbrick villages or seasonal pastoral encampments, rural *ksour* in southern Morocco and nomadic winter camps in Cyrenaica are under-sampled relative to Nile Delta towns [@Fenwick2022Medieval]. Second, standardised early Islamic size tiers derived from Al-Thurayya assign identical mid-tier baseline weights to comparable provincial capitals (such as 17,98k in 1050AD) where contemporary narrative chronicles lack numeric hearth counts. Third, late mediaeval plague shocks—particularly the 1348AD Black Death and recurring fifteenth-century epidemics—register sharply at regional and metropolitan scales in Cairo and Tunis [@Tresso2021Prayer; @MH2025Plague], whereas individual smaller oasis settlements inherit smoothed regional decay curves until early Ottoman tax registers restore site-specific coverage after 1517AD.

# Conclusion

Across 1.200 catalogued sites spanning Egypt and the Maghreb, the Mediaeval North Africa settlement gazetteer documents an enduring urban skeleton rooted in Nile flood irrigation, Mediterranean maritime commerce and trans-Saharan caravan oases. While eleventh-century pastoral shifts reshaped interior Ifriqiya and fourteenth-century plague severely thinned urban populations from Cairo to Fez, the core regional network of riverine capitals, coastal ports and oasis entrepôts survived into the early sixteenth century to form the demographic foundation of Ottoman North Africa and Saadian Morocco.

# Appendix

Table \ref{tab:gaz-summary} aggregates site counts and combined settlement populations across all 1.200 catalogued entries by modern jurisdiction for 1000AD, 1150AD, 1300AD, 1400AD and 1500AD.

<figure class="crd-table-figure" id="tab:gaz-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1300AD</th><th class="crd-th">1400AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Egypt (595)</strong></td><td class="crd-td">2,05M</td><td class="crd-td">2,03M</td><td class="crd-td">1,54M</td><td class="crd-td">1,45M</td><td class="crd-td">1,38M</td></tr>
<tr><td class="crd-td"><strong>Algeria (215)</strong></td><td class="crd-td">1M</td><td class="crd-td">991k</td><td class="crd-td">874k</td><td class="crd-td">829,8k</td><td class="crd-td">791,8k</td></tr>
<tr><td class="crd-td"><strong>Libya (142)</strong></td><td class="crd-td">389,4k</td><td class="crd-td">386,1k</td><td class="crd-td">263,4k</td><td class="crd-td">249,3k</td><td class="crd-td">237,5k</td></tr>
<tr><td class="crd-td"><strong>Tunisia (127)</strong></td><td class="crd-td">550,6k</td><td class="crd-td">544,7k</td><td class="crd-td">460,8k</td><td class="crd-td">433,2k</td><td class="crd-td">408,8k</td></tr>
<tr><td class="crd-td"><strong>Morocco (121)</strong></td><td class="crd-td">483k</td><td class="crd-td">479,9k</td><td class="crd-td">406,6k</td><td class="crd-td">378,9k</td><td class="crd-td">358,1k</td></tr>
<tr><td class="crd-td"><strong>All Five Jurisdictions (1.200)</strong></td><td class="crd-td">4,47M</td><td class="crd-td">4,43M</td><td class="crd-td">3,54M</td><td class="crd-td">3,34M</td><td class="crd-td">3,17M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Aggregated settlement counts and combined ledger populations across all 1.200 North African sites at five mediaeval benchmark years.</figcaption>
</figure>

# Sources

::: {#refs}
:::
