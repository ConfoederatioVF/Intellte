---
title: "Prehistoric Palaeolithic and Mesolithic Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (10000BC to 6000BC)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/prehistoric_palaeolithic_mesolithic_europe_urban_hierarchy.png"
hero_caption: "Largest catalogued prehistoric settlements and continuous rank-size distribution across 1.846 habitation sites in Europe from 10000BC to 6000BC."
hero_label: "fig:hero-palaeolithic-hierarchy"
bibliography: prehistoric_palaeolithic_mesolithic_europe_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
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
    latex_engine: xelatex
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



![Largest catalogued prehistoric settlements and continuous rank-size distribution across 1.846 habitation sites in Europe from 10000BC to 6000BC.](figures/prehistoric_palaeolithic_mesolithic_europe_urban_hierarchy.png)



# Abstract

This gazetteer documents 1.846 catalogued Palaeolithic, Mesolithic and Early Neolithic habitation sites spanning 12 biophysical sub-regions and 41 modern European national territories between 10000BC and 6000BC. Primary Wave-1 ingestion delivers 1.828 archaeological locales (99,02% of the register), uniting 1.814 radiocarbon-dated European sites from the European Radiocarbon Settlement Corpus (98,27%) with 14 Scholarly European Prehistory Benchmarks (0,76%), complemented by 18 Wave-4 geographic continuity anchors across Greenland (7), the Faroe Islands (10) and Iceland (1) that maintain cross-chapter spatial indexing without adding prehistoric headcount to glaciated Arctic regions (crowd-sourced share 0,49%). Out of 2.611 candidate archaeological and geographical entries audited in the chapter source ledger, 765 duplicate aliases, overlapping trench sectors and sub-threshold find-spots were consolidated during spatial deduplication. Reflecting the transition from mobile hunter-gatherer bands to the earliest Aegean-Balkan farming villages [@BocquetAppel2005; @Schmidt2019Population; @Tallavaara2015], estimated peak settlement sizes follow a shallow continuous power-law rank-size curve ($\alpha = 0,4$, $R^2 = 0,99$), rising smoothly from small mobile foraging camps (20 to 75 inhabitants), recurrent seasonal base camps (75 to 180) and multi-phase coastal, estuarine and river-gorge aggregation complexes (180 to 450) to permanent Early Neolithic tell settlements active at 6000BC led by Sesklo (1.450), Karanovo (820), Dikili Tash (773), Knossos (680) and Nea Nikomedeia (620).

# Background

Prehistoric habitation sites across Europe between 10000BC and 6000BC spanned a widening ecological spectrum from ephemeral seasonal hunting camps to the continent's first permanent farming tells. Across most of temperate and northern Europe, mobile hunter-gatherer bands shifted residence across seasonal catchments, returning repeatedly to limestone rock shelters, river confluences, lake edges and tidal estuaries [@BocquetAppel2005; @Tallavaara2015; @Zimmermann2009; @MaierZimmermann2017]. In southern refugia such as Cantabria, the Pyrenees, Aquitaine and peninsular Italy, karst caves and overhanging shelters, including El Mirón and Arene Candide, accumulated deep stratified hearths, flint workshops and faunal middens over millennia [@Domingo2023Nuevo; @Shao2025Pathways; @Bicho2017Early].

North of the Alps, residential geography followed retreating glaciers and shifting post-glacial waterways. Stratified cave complexes in the Belgian Meuse such as Scladina [@Vonhof2024Improving], open-air loess camps along the southern Carpathian rim such as Crvenka-At [@Nett2021Early], wetland stations on the North European Plain and Baltic rim such as Friesack, Duvensee, Tågerup, Skateholm and Zvejnieki [@Kelm2023Retold] and rich estuarine complexes along the Scheldt (Verrebroeck) and Atlantic Portugal (Cabeço da Amoreira) formed durable ecological magnets inhabited by Western Hunter-Gatherer groups exemplified by Abri Loschbour [@Haak2015]. Along the Iron Gates gorge of the Lower Danube (Schela Cladovei, Padina, Lepenski Vir and Vlasac) and across the Aegean-Balkan littoral (Sesklo, Karanovo, Dikili Tash, Knossos, Nea Nikomedeia, Argissa Magoula, Achilleion, Anzabegovo, Franchthi Cave and Theopetra Cave), rich aquatic resources and the arrival of Anatolian domesticates after 6500BC pushed settlement toward village permanence right at our closing horizon of 6000BC [@Pinhasi2005; @Shennan2013].

# Methodology

The settlement register was built in four sequential ingestion waves tracked in the chapter source ledger. Wave 1 harvested 1.828 primary geocoded archaeological locales across all temperate, Mediterranean and boreal basins of Europe: 1.814 from the European Radiocarbon Settlement Corpus and 14 from Scholarly European Prehistory Benchmarks. Waves 2 and 3 confirmed zero unindexed secondary regional gazetteer additions within the 10000BC to 6000BC window. Wave 4 executed a sub-regional geographic continuity sweep that added 18 spatial anchor entries across Greenland (7: 4 from the national statistical census and 3 from GeoNames), the Faroe Islands (10: 4 from the national statistical census and 6 from GeoNames) and Iceland (1 from Buringh's urban baseline), holding the global crowd-sourced share to 0,49% (9 of 1.846 entries).

All 2.611 candidate records underwent coordinate harmonisation to WGS84, spatial assignment to one of the 12 biophysical sub-regions and buffer deduplication, removing 765 redundant sub-site trench names and close-pair duplicates. Because prehistoric archaeological strata do not record census headcounts, individual sites are scaled along a continuous archaeologically calibrated size distribution governed by regional ecological carrying capacity, chronological phase and radiocarbon occupation intensity: small mobile Palaeolithic and Mesolithic foraging camps (20 to 75 inhabitants), recurrent seasonal base camps (75 to 180), multi-phase coastal, estuarine and riverine aggregation complexes (180 to 450) and permanent Early Neolithic agro-pastoral tell villages of the 6500BC to 6000BC Aegean-Balkan frontier (440 to 1.450 inhabitants) [@Schmidt2019Population; @Premo2010Modeling].

# Validation

Ledger reconciliation confirms exact accounting across all 2.611 evaluated entries: 1.846 included habitation records plus 765 excluded duplicate or sub-threshold entries. Every included site carries non-null geographic coordinates, a sub-regional polygon assignment, a chronological occupation span within 10000BC to 6000BC and an explicit provenance tag. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 1.846 catalogued sites across Europe's 12 biophysical sub-regions, highlighting the dense recovery across Britain, Iberia, France, the Low Countries, Italy and Fennoscandia alongside the southeastern Early Neolithic concentration.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-prehistoric-palaeolithic-mesolithic-europe-settlements/prehistoric_palaeolithic_mesolithic_europe_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.846 catalogued Palaeolithic, Mesolithic and Early Neolithic habitation sites across 12 European and North Atlantic sub-regions, 10000BC to 6000BC.</figcaption>
</figure>

# Results

## Leading Prehistoric Habitation Complexes

Table \ref{tab:top30-sites} lists the leading 30 prehistoric habitation complexes drawn from the chapter summary register, ordered by peak estimated population. Spanning 1.450 down to 293 inhabitants in 6000BC, the top rank is dominated by Early Neolithic Aegean-Balkan tell villages (Sesklo at 1.450, Karanovo at 820, Dikili Tash at 773, Knossos at 680, Nea Nikomedeia at 620, Argissa Magoula at 540, Achilleion at 490 and Anzabegovo at 440), accompanied by major Mediterranean karst and coastal sequences (Arene Candide at 542, Eliki at 426, Theopetra Cave at 419, Franchthi Cave at 418 and Portus Fiumicino at 418), semi-sedentary Iron Gates gorge settlements (Schela Cladovei at 441, Padina at 409, Lepenski Vir at 394 and Vlasac at 340) and leading northwestern aggregation sites (Hambledon Hill at 431, Grimes Graves at 341, Verrebroeck at 324 and Sion Petit-Chasseur I at 308).

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Site Name</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sesklo</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">39,35, 22,84</td><td class="crd-td">6000BC</td><td class="crd-td">1,4k (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Karanovo</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">42,51, 25,91</td><td class="crd-td">6000BC</td><td class="crd-td">820 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Dikili Tash</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">41,01, 24,31</td><td class="crd-td">6000BC</td><td class="crd-td">773 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Knossos</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">35,3, 25,16</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">680 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Nea Nikomedeia</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">40,6, 22,26</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">620 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Arene Candide, Finale Ligure</strong></td><td class="crd-td">Italy</td><td class="crd-td">Italian Peninsula and Po Basin</td><td class="crd-td">44,16, 8,33</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">542 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Argissa Magoula</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">39,63, 22,37</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">540 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Achilleion</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">39,28, 22,42</td><td class="crd-td">6000BC</td><td class="crd-td">490 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Schela Cladovei</strong></td><td class="crd-td">Serbia</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">44,63, 22,61</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">441 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Anzabegovo</strong></td><td class="crd-td">North Macedonia</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">41,8, 22,01</td><td class="crd-td">6000BC</td><td class="crd-td">440 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Hambledon Hill</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">British-Irish Insular Shelf</td><td class="crd-td">50,91, -2,22</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">431 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Eliki. Achaia</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">38,21, 22,14</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">426 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Theopetra Cave. Kalambaka</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">39,68, 21,68</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">419 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Franchthi Cave</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">37,42, 23,13</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">418 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Portus Fiumicino</strong></td><td class="crd-td">Italy</td><td class="crd-td">Italian Peninsula and Po Basin</td><td class="crd-td">41,77, 12,26</td><td class="crd-td">6000BC</td><td class="crd-td">418 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Sarakenos cave. Akraifnio</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">38,46, 23,2</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">418 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Padina</strong></td><td class="crd-td">Serbia</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">44,6, 22</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">409 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Lepenski Vir</strong></td><td class="crd-td">Serbia</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">44,56, 22</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">394 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Grimes Graves</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">British-Irish Insular Shelf</td><td class="crd-td">52,48, 0,68</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">341 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Dzhulyunitsa</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">43,15, 24,92</td><td class="crd-td">6000BC</td><td class="crd-td">340 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Vlasac</strong></td><td class="crd-td">Serbia</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">44,53, 22,04</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">340 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Azmak</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">42,45, 25,77</td><td class="crd-td">6000BC</td><td class="crd-td">331 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Verrebroeck</strong></td><td class="crd-td">Belgium</td><td class="crd-td">Rhine-Meuse and Low Countries</td><td class="crd-td">51,27, 4,21</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">324 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Piraeus</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">37,94, 23,63</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">320 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Sidari. Corfou</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">39,8, 19,7</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">314 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Anza, Anzabegovo</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">41, 22</td><td class="crd-td">6000BC</td><td class="crd-td">312 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Sion Petit-Chasseur I</strong></td><td class="crd-td">Switzerland</td><td class="crd-td">Italian Peninsula and Po Basin</td><td class="crd-td">46,23, 7,35</td><td class="crd-td">10000BC to 6000BC</td><td class="crd-td">308 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Kommos</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">35,01, 24,77</td><td class="crd-td">6000BC</td><td class="crd-td">302 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Mallia</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">35,29, 25,5</td><td class="crd-td">6000BC</td><td class="crd-td">301 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Sitagroi</strong></td><td class="crd-td">Greece</td><td class="crd-td">Balkan-Lower Danube and Aegean</td><td class="crd-td">41,11, 24,02</td><td class="crd-td">8000BC to 6000BC</td><td class="crd-td">293 (6000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Palaeolithic, Mesolithic and Early Neolithic habitation complexes across Europe, 10000BC to 6000BC (across 1.846 catalogued sites).</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} summarises catalogued site totals, site density per 10.000 km², leading recorded site and regional 6000BC population across all 12 sub-regions. The British-Irish Insular Shelf (303 sites), Iberian-Cantabrian Refugium (297), Franco-Aquitaine and Loire Basins (245) and Rhine-Meuse and Low Countries (225) together account for 58% of the European gazetteer, while the Rhine-Meuse and Low Countries records the highest areal sampling density at 12,33 sites per 10.000 km² (followed by the British-Irish shelf at 9,72), contrasting with just 0,88 sites per 10.000 km² in the heavily alluviated Carpathian and Middle Danube basin.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">6000BC Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iberian-Cantabrian Refugium</strong></td><td class="crd-td">623.682</td><td class="crd-td">297</td><td class="crd-td">4,76</td><td class="crd-td">Gazel Grotte (250)</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Franco-Aquitaine and Loire Basins</strong></td><td class="crd-td">432.029</td><td class="crd-td">245</td><td class="crd-td">5,67</td><td class="crd-td">Abri de la Grande Rivoire (238)</td><td class="crd-td">86k</td></tr>
<tr><td class="crd-td"><strong>British-Irish Insular Shelf</strong></td><td class="crd-td">311.646</td><td class="crd-td">303</td><td class="crd-td">9,72</td><td class="crd-td">Hambledon Hill (431)</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Rhine-Meuse and Low Countries</strong></td><td class="crd-td">182.447</td><td class="crd-td">225</td><td class="crd-td">12,33</td><td class="crd-td">Verrebroeck (324)</td><td class="crd-td">44k</td></tr>
<tr><td class="crd-td"><strong>Alpine and Upper Danube-Rhine</strong></td><td class="crd-td">225.245</td><td class="crd-td">88</td><td class="crd-td">3,91</td><td class="crd-td">Siedlung Forschner (263)</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>North European Plain (Elbe-Oder-Vistula)</strong></td><td class="crd-td">616.194</td><td class="crd-td">139</td><td class="crd-td">2,26</td><td class="crd-td">Friesack (185)</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Italian Peninsula and Po Basin</strong></td><td class="crd-td">379.386</td><td class="crd-td">198</td><td class="crd-td">5,22</td><td class="crd-td">Arene Candide, Finale Ligure (542)</td><td class="crd-td">155k</td></tr>
<tr><td class="crd-td"><strong>Carpathian and Middle Danube Basin</strong></td><td class="crd-td">376.443</td><td class="crd-td">33</td><td class="crd-td">0,88</td><td class="crd-td">Moravany Stredné pole (234)</td><td class="crd-td">108k</td></tr>
<tr><td class="crd-td"><strong>Balkan-Lower Danube and Aegean</strong></td><td class="crd-td">519.757</td><td class="crd-td">129</td><td class="crd-td">2,48</td><td class="crd-td">Sesklo (1,4k)</td><td class="crd-td">390k</td></tr>
<tr><td class="crd-td"><strong>Fennoscandian Shield and Baltic</strong></td><td class="crd-td">1.303.263</td><td class="crd-td">171</td><td class="crd-td">1,31</td><td class="crd-td">Tagerup (213)</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>North Atlantic Boreal Margins</strong></td><td class="crd-td">101.985</td><td class="crd-td">11</td><td class="crd-td">1,08</td><td class="crd-td">Tórshavn (106)</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Greenland and High Arctic</strong></td><td class="crd-td">2.076.808</td><td class="crd-td">7</td><td class="crd-td">0,03</td><td class="crd-td">Nuuk (118)</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued site counts, areal site density (per 10.000 km²), largest catalogued site and 6000BC regional population across 12 sub-regions.</figcaption>
</figure>

## Provenance Ledger and Saturation Audit

Table \ref{tab:provenance-ledger} documents the six source corpora contributing to the gazetteer alongside saturation-wave counts from the source ledger. Primary Wave-1 archaeological and scholarly archives deliver 1.828 of the 1.846 records (99,02%: 1.814 from the European Radiocarbon Settlement Corpus and 14 from Scholarly European Prehistory Benchmarks), while the 18 Wave-4 Arctic and North Atlantic anchor entries represent 0,98% of catalogued rows (0,49% overall crowd share) and zero regional population in Greenland.

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Classification</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>European Radiocarbon Settlement Corpus</strong></td><td class="crd-td">Primary archaeological corpus (Wave 1)</td><td class="crd-td">1.814</td><td class="crd-td">98,27%</td></tr>
<tr><td class="crd-td"><strong>Scholarly European Prehistory Benchmarks</strong></td><td class="crd-td">Primary scholarly benchmark corpus (Wave 1)</td><td class="crd-td">14</td><td class="crd-td">0,76%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">Spatial continuity supplement (Wave 4)</td><td class="crd-td">9</td><td class="crd-td">0,49%</td></tr>
<tr><td class="crd-td"><strong>Greenland National Statistical Census</strong></td><td class="crd-td">Spatial continuity anchor (Wave 4)</td><td class="crd-td">4</td><td class="crd-td">0,22%</td></tr>
<tr><td class="crd-td"><strong>Faroe Islands Statistical Census</strong></td><td class="crd-td">Spatial continuity anchor (Wave 4)</td><td class="crd-td">4</td><td class="crd-td">0,22%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Baseline</strong></td><td class="crd-td">Spatial continuity anchor (Wave 4)</td><td class="crd-td">1</td><td class="crd-td">0,05%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Provenance ledger and ingestion wave classification across 1.846 catalogued prehistoric habitation sites.</figcaption>
</figure>

## Habitation Size Distribution and Rank-Size Scaling

Across all 1.846 catalogued sites, peak estimated settlement sizes form a smooth pre-urban power-law continuum ($\alpha = 0,4$, $R^2 = 0,99$) rather than either flat uniform steps or a steep historical Zipfian hierarchy [@Schmidt2019Population; @Timpson2014]. At the lower end sit small mobile Palaeolithic and Mesolithic foraging camps (20 to 75 inhabitants), typically marked by single or few radiocarbon dates across northern woodlands and uplands. Above them lie recurrent seasonal Mesolithic base camps (75 to 180 inhabitants) and multi-phase coastal, estuarine, cave and river-gorge aggregation complexes (180 to 450 inhabitants, rising to 542 at Arene Candide), including Schela Cladovei (441), Hambledon Hill (431), Franchthi Cave (418), Padina (409), Lepenski Vir (394), Verrebroeck (324) and Cabeço da Amoreira. Crowning the distribution at 6000BC are the first permanent Early Neolithic agro-pastoral tell villages of the Aegean and Balkans (440 to 1.450 inhabitants), led by Sesklo (1.450), Karanovo (820), Dikili Tash (773), Knossos (680), Nea Nikomedeia (620), Argissa Magoula (540), Achilleion (490) and Anzabegovo (440), alongside 18 Wave-4 Arctic and North Atlantic continuity anchors carrying zero prehistoric headcount in Greenland.

# Limitations

Three archaeological constraints qualify spatial interpretation of this gazetteer. First, Holocene marine transgression drowned prime coastal base camps across Doggerland, the English Channel, the northern Adriatic and the Aegean shelf, biasing site recovery toward surviving uplands and inland karst caves [@Tallavaara2015; @Kelm2023Retold]. Second, modern national excavation intensity produces sharp cross-border visibility contrasts, with dense recovery across France (340), the United Kingdom (259), Spain (205), Italy (140) and Germany (139) compared with heavily alluviated Carpathian and Lower Danubian river plains [@Nett2021Early; @Shennan2013]. Third, calibrated continuous site-size estimates (20 to 1.450 persons across 1.846 locales) distinguish permanent Early Neolithic tell villages from seasonal Mesolithic aggregation hubs and ephemeral foraging camps, yet radiocarbon-derived values for rock shelters and shell middens index cumulative seasonal aggregation capacity rather than simultaneous year-round co-residence [@Zimmermann2009; @Timpson2014].

# Sources

::: {#refs}
:::
