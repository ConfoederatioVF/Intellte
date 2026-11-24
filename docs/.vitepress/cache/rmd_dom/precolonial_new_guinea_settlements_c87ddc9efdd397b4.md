---
title: "Pre-Colonial New Guinea and Bismarck Archipelago"
subtitle: "Settlement Gazetteer and Habitation Hierarchy (10000BC to 1884)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/precolonial_new_guinea_urban_hierarchy.png"
hero_caption: "Largest recorded pre-colonial settlements and Zipf rank-size distribution across 76 catalogued locales in New Guinea and the Bismarck Archipelago, 10000BC to 1884."
hero_label: "fig:hero-ng-hierarchy"
bibliography: precolonial_new_guinea.bib
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



![Largest recorded pre-colonial settlements and Zipf rank-size distribution across 76 catalogued locales in New Guinea and the Bismarck Archipelago, 10000BC to 1884.](figures/precolonial_new_guinea_urban_hierarchy.png)



# Abstract

This gazetteer documents 76 catalogued pre-colonial habitation locales and 191 archaeological and ethnohistorical population observations spanning nine HydroBASINS watershed sub-regions across New Guinea and the Bismarck Archipelago from 10000BC to 1884. Drawn entirely from archaeological site monographs, ethnographic field studies and early colonial administrative baselines with strictly 0% crowd-sourced fallback entries, the register spans 52 locales in modern Papua New Guinea (68,4%) and 24 in Indonesian Papua (31,6%) across 26 provincial territories, while logging 3 excluded Bougainville and Buka candidates (Yela, Kilu and Buin) assigned to the Solomon Islands in Chapter 03. Estimated peak settlement sizes span more than two orders of magnitude—from Pleistocene rainforest rock shelters and cave camps (118 to 192 inhabitants at Toé, Kria, Yuku, Yombon, Kiowa, Nfx Kainantu, Buang Merabak, Matenkupkum, Batari and Lachitu) through Lapita maritime hubs, ceramic-trading coastal ports and riverine longhouse villages (420 to 2,26k inhabitants) up to high-altitude sweet-potato valley confederations and coral-island exchange centres led by Baliem Valley (38k), Kiriwina (8,2k), Paniai (6,4k), Tari Basin (6,25k), Mogei (5,75k) and Mintima (5,4k) [@denham2024resonating; @denham2003origins; @cochrane2018evolution; @liu2022assessing]. Across the upper half of the catalogue, habitation clusters follow a well-defined Zipf rank-size power law ($\alpha = 0,93$, $R^2 = 0,97$; full-sample $\alpha = 1,11$, $R^2 = 0,87$).

# Background

Pre-colonial settlement across New Guinea and the Bismarck Archipelago evolved along two distinct ecological trajectories: deep-time montane foraging and wetland gardening inside the central cordillera, and mobile maritime-riverine exchange along the northern, southern and archipelagic littorals [@denham2024resonating; @bergstrom2017neolithic]. At the Pleistocene-Holocene threshold in 10000BC, stratified highland and coastal locales—including the Huon coral terraces at Bobongara, the montane Ivane Valley at Kosipe, highland rock shelters at Nombe, Kafiavana, Yuku and Kiowa, coastal caves at Lachitu, Toé and Kria and Bismarck limestone shelters and obsidian quarries at Matenkupkum, Buang Merabak, Balof, Yombon and Talasea—already linked interior pandanus-and-yam foraging with maritime obsidian transport [@summerhayes2010human; @torrence2004pleistocene; @roberts2017persistent; @shipton2026fluctuating].

During the early and middle Holocene, independent wetland cultivation at Kuk Swamp in the upper Wahgi Valley established durable agricultural landscapes centred on taro, yam and banana [@denham2003origins; @denham2026clarifying; @anonymous2017ten; @horrocks2025palaeoecolog]. After 1400BC, Austronesian-speaking Lapita mariners founded coastal stilt-house villages across the Bismarcks at Talepakemalai (Mussau), Tamuarawai (Emirau), Apalo (Arawe Islands) and Rakival (Watom Island), exporting Talasea obsidian and decorated pottery across Near and Remote Oceania [@summerhayes2009tamuarawai; @hogg2024lapita; @ross_sheppard2013kutau; @douglass2011experimental; @ambrose2011oceanic]. On the New Guinea mainland, ceramic traditions took root along the northern highland fringe at Wañelek by 1000BC and along the south Papuan littoral at Oposisi and Caution Bay (Ruisasi 1) by the opening centuries of the first millennium [@allen2010data; @david2016ruisasi; @o_connor2011power; @nagele2025impact].

In the closing centuries before 1884, two forces reshaped settlement size across the island. Along the coasts, specialised voyaging systems—the Motu *Hiri* from Motupore and Hanuabada to Gulf sago villages (Orokolo, Urama, Goaribari), the Massim *Kula* ring linking Kiriwina, Muyuw and Dobu, the Vitiaz Strait network joining Sio, Bilbil and Mandok and the western *Sosolot* trade through Doreh, Fakfak, Samate and Kaimana—concentrated hundreds to several thousand inhabitants in nucleated trading villages and island chiefdoms [@liu2022assessing; @howes2017early; @barker2025marine]. Inside the cool, malaria-free central mountains, post-1600 sweet-potato cultivation multiplied valley-floor populations across Baliem Valley, Paniai, Tari Basin, Mogei, Mintima, Ilaga, Sari, Waghete and Bokondini, producing the largest pre-colonial habitation agglomerations anywhere in Near Oceania [@quinn2024population; @gonzalez_buenfil2024genetic].

# Methodology

The settlement register was compiled across four sequential ingestion waves logged in the chapter source ledger, auditing 79 candidate locales to yield 76 included entries and 3 geographic exclusions. Wave 1 assembled 13 primary colonial and early administrative baseline localities across British-Australian Papua, German New Guinea and Dutch New Guinea. Wave 2 incorporated 62 peer-reviewed archaeological sites and classic ethnohistorical habitation centres anchored in stratified excavations and field ethnographies. Wave 3 audited alternate orthographic and ethnographic toponyms to eliminate duplicate entries (0 additions). Wave 4 executed a targeted sub-regional gap-hunter sweep across all nine HydroBASINS watersheds, adding 1 final locale (1,33% marginal gain) and confirming zero empty sub-regions and strictly 0% crowd-sourced entries.

Every included locale carries WGS84 coordinates, a territorial assignment across modern Papua New Guinea or Indonesian Papua, an areal-mask assignment to one of the nine organic HydroBASINS watersheds, a chronological population series bounded within 10000BC to 1884 and explicit scholarly provenance. For Pleistocene and early Holocene cave and open-air sites, population estimates index local catchment aggregation capacity derived from stratigraphic occupation intensity and regional carrying-capacity bounds [@roberts2017persistent; @horrocks2025palaeoecolog; @barker2023holocene]. For late pre-colonial coastal villages, island chiefdoms and highland valley confederations, estimates reconcile first-contact ethnographic headcounts, early mission registers and archaeological settlement footprints [@denham2024resonating; @howes2017early]. Rank-size scaling fits an ordinary least-squares log-log regression ($\log_{10} P = c - \alpha \log_{10} R$) across both the upper half of the hierarchy (ranks 1 to 38) and the full 76-locale sample.

# Testing and Validation

Source-ledger reconciliation confirms exact accounting across all 79 evaluated entries: 76 included locales plus 3 excluded candidates on Buka and Bougainville (Yela, Kilu and Buin), which sit inside the Chapter 03 Main Solomon Islands areal mask rather than New Guinea and the Bismarck Archipelago. Zero candidate entries remain unaccounted, zero locales lack coordinates or chronological observations and zero of the nine HydroBASINS watersheds are empty.

Figure \ref{fig:sett-ng-map} maps the spatial footprint of all 76 catalogued locales across the nine organic watersheds, illustrating the absence of any artificial break along the 141st east meridian and the dense highland-corridor concentration running continuously from Paniai, Ilaga and the Baliem Valley eastward through Tari Basin, Mogei and Mintima to Kiriwina in Milne Bay.

<figure class="crd-figure-block" id="fig:sett-ng-map">
<img class="crd-figure-img" src="/artefacts/project_austral/1.0-precolonial-new-guinea-settlements/precolonial_new_guinea_regional_map.png" alt="fig:sett-ng-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 76 catalogued pre-colonial settlements across nine HydroBASINS watershed sub-regions of New Guinea and the Bismarck Archipelago, 10000BC to 1884.</figcaption>
</figure>

Cross-checking the settlement register against regional population benchmarks confirms strong distributional plausibility. In 1884, the top 12 catalogued settlements alone sum to 92,8k inhabitants—representing 4,14% of the 2,24M regional population—while the full 76-locale register captures both the high-density highland sweet-potato basins and the key coastal maritime nodes (Motu, Massim, Vitiaz, Bismarck and Raja Ampat) without conflating dispersed rural hinterlands into fictitious urban totals [@bergstrom2017neolithic; @quinn2024population].

# Results

## Leading Pre-Colonial Settlements and Valley Confederations

Table \ref{tab:top25-sites} lists the leading 25 catalogued pre-colonial habitation locales ordered by peak estimated population. Ranging from 38k down to 1,29k inhabitants, the upper tier brings together three ecological archetypes: dense intermontane sweet-potato confederations (Baliem Valley at 38k, Paniai at 6,4k, Tari Basin at 6,25k, Mogei at 5,75k, Mintima at 5,4k, Ilaga at 4,92k, Sari at 3,68k, Waghete at 3,42k, Bokondini at 2,89k, Ok Sibil at 1,78k and Kuk Swamp at 1,65k), high-density volcanic and coral island societies (Kiriwina at 8,2k, Karkar at 4,8k, Muyuw at 2,18k, Bosnik at 2,15k, Ansus at 1,69k, Dobu at 1,35k and Sio at 1,32k) and major lowland delta and coastal exchange hubs (Orokolo at 3,48k, Kumbe at 2,26k, Waren at 1,74k, Iasa at 1,68k, Urama at 1,62k, Goaribari at 1,34k and Wanigela at 1,29k).

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Locale</th><th class="crd-th">Territory</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baliem Valley</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Western Highlands and Baliem Valley</td><td class="crd-td">-4,02, 138,92</td><td class="crd-td">1700</td><td class="crd-td">38k (1700)</td></tr>
<tr><td class="crd-td"><strong>Kiriwina</strong></td><td class="crd-td">PNG</td><td class="crd-td">Papuan Peninsula and Milne Bay</td><td class="crd-td">-8,54, 151,07</td><td class="crd-td">1500 to 1800</td><td class="crd-td">8,2k (1800)</td></tr>
<tr><td class="crd-td"><strong>Paniai</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Bird's Head and Raja Ampat</td><td class="crd-td">-3,93, 136,37</td><td class="crd-td">1500 to 1800</td><td class="crd-td">6,4k (1800)</td></tr>
<tr><td class="crd-td"><strong>Tari Basin</strong></td><td class="crd-td">PNG</td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">-5,85, 142,95</td><td class="crd-td">1600 to 1800</td><td class="crd-td">6,2k (1800)</td></tr>
<tr><td class="crd-td"><strong>Mogei</strong></td><td class="crd-td">PNG</td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">-5,85, 144,23</td><td class="crd-td">1600 to 1800</td><td class="crd-td">5,8k (1800)</td></tr>
<tr><td class="crd-td"><strong>Mintima</strong></td><td class="crd-td">PNG</td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">-5,98, 144,92</td><td class="crd-td">1500 to 1884</td><td class="crd-td">5,4k (1884)</td></tr>
<tr><td class="crd-td"><strong>Ilaga</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">-3,98, 137,63</td><td class="crd-td">1700 to 1880</td><td class="crd-td">4,9k (1880)</td></tr>
<tr><td class="crd-td"><strong>Karkar</strong></td><td class="crd-td">PNG</td><td class="crd-td">Huon Peninsula and Northern Coast</td><td class="crd-td">-4,65, 145,97</td><td class="crd-td">1700</td><td class="crd-td">4,8k (1700)</td></tr>
<tr><td class="crd-td"><strong>Sari</strong></td><td class="crd-td">PNG</td><td class="crd-td">Sepik-Ramu Basin</td><td class="crd-td">-5,49, 143,73</td><td class="crd-td">1650 to 1850</td><td class="crd-td">3,7k (1850)</td></tr>
<tr><td class="crd-td"><strong>Orokolo</strong></td><td class="crd-td">PNG</td><td class="crd-td">Southern Papuan Lowlands (Digul-Fly)</td><td class="crd-td">-7,68, 145,18</td><td class="crd-td">1750 to 1884</td><td class="crd-td">3,5k (1884)</td></tr>
<tr><td class="crd-td"><strong>Waghete</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Bird's Head and Raja Ampat</td><td class="crd-td">-4,05, 136,28</td><td class="crd-td">1700 to 1880</td><td class="crd-td">3,4k (1880)</td></tr>
<tr><td class="crd-td"><strong>Bokondini</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">-3,69, 138,66</td><td class="crd-td">1750 to 1880</td><td class="crd-td">2,9k (1880)</td></tr>
<tr><td class="crd-td"><strong>Kumbe</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Southern Papuan Lowlands (Digul-Fly)</td><td class="crd-td">-8,35, 140,23</td><td class="crd-td">1750 to 1880</td><td class="crd-td">2,3k (1880)</td></tr>
<tr><td class="crd-td"><strong>Muyuw</strong></td><td class="crd-td">PNG</td><td class="crd-td">Papuan Peninsula and Milne Bay</td><td class="crd-td">-9,12, 152,83</td><td class="crd-td">1000 to 1884</td><td class="crd-td">2,2k (1884)</td></tr>
<tr><td class="crd-td"><strong>Bosnik</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">-1,17, 136,23</td><td class="crd-td">1500 to 1860</td><td class="crd-td">2,1k (1860)</td></tr>
<tr><td class="crd-td"><strong>Ok Sibil</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Southern Papuan Lowlands (Digul-Fly)</td><td class="crd-td">-4,9, 140,63</td><td class="crd-td">1750 to 1880</td><td class="crd-td">1,8k (1880)</td></tr>
<tr><td class="crd-td"><strong>Waren</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">-2,27, 136,38</td><td class="crd-td">1750 to 1870</td><td class="crd-td">1,7k (1870)</td></tr>
<tr><td class="crd-td"><strong>Ansus</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">-1,73, 135,82</td><td class="crd-td">1700 to 1858</td><td class="crd-td">1,7k (1858)</td></tr>
<tr><td class="crd-td"><strong>Iasa</strong></td><td class="crd-td">PNG</td><td class="crd-td">Southern Papuan Lowlands (Digul-Fly)</td><td class="crd-td">-7,51, 143,98</td><td class="crd-td">1750 to 1880</td><td class="crd-td">1,7k (1880)</td></tr>
<tr><td class="crd-td"><strong>Kuk Swamp</strong></td><td class="crd-td">PNG</td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">-5,78, 144,33</td><td class="crd-td">5000BC to 1700</td><td class="crd-td">1,6k (1700)</td></tr>
<tr><td class="crd-td"><strong>Urama</strong></td><td class="crd-td">PNG</td><td class="crd-td">Southern Papuan Lowlands (Digul-Fly)</td><td class="crd-td">-7,5, 144,61</td><td class="crd-td">1600 to 1850</td><td class="crd-td">1,6k (1850)</td></tr>
<tr><td class="crd-td"><strong>Dobu</strong></td><td class="crd-td">PNG</td><td class="crd-td">Papuan Peninsula and Milne Bay</td><td class="crd-td">-9,83, 150,88</td><td class="crd-td">1800</td><td class="crd-td">1,4k (1800)</td></tr>
<tr><td class="crd-td"><strong>Goaribari</strong></td><td class="crd-td">PNG</td><td class="crd-td">Southern Papuan Lowlands (Digul-Fly)</td><td class="crd-td">-7,78, 144,22</td><td class="crd-td">1750 to 1884</td><td class="crd-td">1,3k (1884)</td></tr>
<tr><td class="crd-td"><strong>Sio</strong></td><td class="crd-td">PNG</td><td class="crd-td">Huon Peninsula and Northern Coast</td><td class="crd-td">-6,04, 146,89</td><td class="crd-td">500 to 1884</td><td class="crd-td">1,3k (1884)</td></tr>
<tr><td class="crd-td"><strong>Wanigela</strong></td><td class="crd-td">PNG</td><td class="crd-td">Papuan Peninsula and Milne Bay</td><td class="crd-td">-9,33, 149,18</td><td class="crd-td">1000 to 1884</td><td class="crd-td">1,3k (1884)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 pre-colonial settlements and valley habitation clusters across New Guinea and the Bismarck Archipelago, 10000BC to 1884 (from 76 catalogued locales).</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} aggregates catalogued locale counts, areal site density per 10.000 km², leading catalogued locale and closing 1884 population across all nine HydroBASINS watersheds. The Bismarck Archipelago (12 locales, 1,55 per 10.000 km²), Sepik-Ramu Basin (11 locales, 1,39 per 10.000 km²), Central Highlands (9 locales, 1,1 per 10.000 km²) and Papuan Peninsula and Milne Bay (9 locales, 1,03 per 10.000 km²) record the highest archaeological and ethnohistorical sampling densities. In the Western Highlands and Baliem Valley, the single watershed-core entry (Baliem Valley at 38k) reflects the aggregation of the Grand Valley Dani confederation into one regional polygon node, while neighbouring western highland basins (Paniai, Waghete, Ilaga and Bokondini) sit just across the watershed divides inside the adjoining Bird's Head and Cenderawasih-Mamberamo sub-regions.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Locales</th><th class="crd-th">Per 10k km²</th><th class="crd-th">Leading Locale (Peak)</th><th class="crd-th">1884 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bird's Head and Raja Ampat</strong></td><td class="crd-td">175.518</td><td class="crd-td">12</td><td class="crd-td">0,68</td><td class="crd-td">Paniai (6,4k)</td><td class="crd-td">135k</td></tr>
<tr><td class="crd-td"><strong>Cenderawasih Bay and Mamberamo</strong></td><td class="crd-td">120.062</td><td class="crd-td">10</td><td class="crd-td">0,83</td><td class="crd-td">Ilaga (4,9k)</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Western Highlands and Baliem Valley</strong></td><td class="crd-td">70.267</td><td class="crd-td">1</td><td class="crd-td">0,14</td><td class="crd-td">Baliem Valley (38k)</td><td class="crd-td">365k</td></tr>
<tr><td class="crd-td"><strong>Southern Papuan Lowlands (Digul-Fly)</strong></td><td class="crd-td">221.667</td><td class="crd-td">7</td><td class="crd-td">0,32</td><td class="crd-td">Orokolo (3,5k)</td><td class="crd-td">175k</td></tr>
<tr><td class="crd-td"><strong>Sepik-Ramu Basin</strong></td><td class="crd-td">79.099</td><td class="crd-td">11</td><td class="crd-td">1,39</td><td class="crd-td">Sari (3,7k)</td><td class="crd-td">265k</td></tr>
<tr><td class="crd-td"><strong>Central Highlands (Wahgi-Purari)</strong></td><td class="crd-td">81.543</td><td class="crd-td">9</td><td class="crd-td">1,1</td><td class="crd-td">Tari Basin (6,2k)</td><td class="crd-td">620k</td></tr>
<tr><td class="crd-td"><strong>Huon Peninsula and Northern Coast</strong></td><td class="crd-td">60.459</td><td class="crd-td">5</td><td class="crd-td">0,83</td><td class="crd-td">Karkar (4,8k)</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Papuan Peninsula and Milne Bay</strong></td><td class="crd-td">87.757</td><td class="crd-td">9</td><td class="crd-td">1,03</td><td class="crd-td">Kiriwina (8,2k)</td><td class="crd-td">220k</td></tr>
<tr><td class="crd-td"><strong>Bismarck Archipelago</strong></td><td class="crd-td">77.606</td><td class="crd-td">12</td><td class="crd-td">1,55</td><td class="crd-td">Mioko (1k)</td><td class="crd-td">155k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued locale counts, areal sampling density (per 10.000 km²), leading catalogued locale and 1884 regional population across nine HydroBASINS watersheds.</figcaption>
</figure>

## Deep-Time Archaeological Anchor Locales

Although late pre-colonial valley confederations dominate the upper tail of the rank-size curve, chronological depth across the 10000BC to 1AD horizon rests on 18 stratified archaeological sites with pre-1AD population observations (Table \ref{tab:deep-time-sites}). Spanning from the Huon terraces (Bobongara) and montane Ivane Valley (Kosipe) to Kuk Swamp, highland shelters (Nombe, Kafiavana, Kiowa, Batari, Nfx Kainantu, Yuku, Wañelek), north-coast and Bird's Head caves (Lachitu, Kria, Toé, Asei) and Bismarck Pleistocene-to-Lapita sites (Talasea, Talepakemalai, Apalo, Rakival, Balof, Matenkupkum, Buang Merabak and Yombon), these anchors fix both the early Holocene demographic floor and the post-1400BC coastal Lapita transformation [@summerhayes2010human; @denham2003origins; @torrence2004pleistocene; @summerhayes2009tamuarawai; @hogg2024lapita; @shipton2026fluctuating].

<figure class="crd-table-figure" id="tab:deep-time-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Site Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Earliest</th><th class="crd-th">Latest</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Obs.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Balof</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">10000BC</td><td class="crd-td">1850</td><td class="crd-td">720</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Bobongara</strong></td><td class="crd-td">Huon Peninsula and Northern Coast</td><td class="crd-td">10000BC</td><td class="crd-td">1500</td><td class="crd-td">495</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Buang Merabak</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">10000BC</td><td class="crd-td">1AD</td><td class="crd-td">158</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kosipe</strong></td><td class="crd-td">Papuan Peninsula and Milne Bay</td><td class="crd-td">10000BC</td><td class="crd-td">1500</td><td class="crd-td">380</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Lachitu</strong></td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">10000BC</td><td class="crd-td">1000</td><td class="crd-td">192</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Matenkupkum</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">10000BC</td><td class="crd-td">1AD</td><td class="crd-td">168</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Nfx Kainantu</strong></td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">10000BC</td><td class="crd-td">500</td><td class="crd-td">152</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Nombe</strong></td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">10000BC</td><td class="crd-td">1700</td><td class="crd-td">610</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Talasea</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">10000BC</td><td class="crd-td">1500</td><td class="crd-td">980</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Toé</strong></td><td class="crd-td">Bird's Head and Raja Ampat</td><td class="crd-td">10000BC</td><td class="crd-td">1AD</td><td class="crd-td">118</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Yombon</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">10000BC</td><td class="crd-td">1AD</td><td class="crd-td">146</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Yuku</strong></td><td class="crd-td">Sepik-Ramu Basin</td><td class="crd-td">10000BC</td><td class="crd-td">500</td><td class="crd-td">132</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kafiavana</strong></td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">9000BC</td><td class="crd-td">1750</td><td class="crd-td">890</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Kiowa</strong></td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">8000BC</td><td class="crd-td">500</td><td class="crd-td">148</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Batari</strong></td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">6000BC</td><td class="crd-td">1000</td><td class="crd-td">176</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kria</strong></td><td class="crd-td">Bird's Head and Raja Ampat</td><td class="crd-td">6000BC</td><td class="crd-td">500</td><td class="crd-td">126</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Kuk Swamp</strong></td><td class="crd-td">Central Highlands (Wahgi-Purari)</td><td class="crd-td">5000BC</td><td class="crd-td">1700</td><td class="crd-td">1,6k</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Talepakemalai</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">1400BC</td><td class="crd-td">1850</td><td class="crd-td">980</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Apalo</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">1200BC</td><td class="crd-td">1850</td><td class="crd-td">785</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Rakival</strong></td><td class="crd-td">Bismarck Archipelago</td><td class="crd-td">1000BC</td><td class="crd-td">1880</td><td class="crd-td">940</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>Wañelek</strong></td><td class="crd-td">Sepik-Ramu Basin</td><td class="crd-td">1000BC</td><td class="crd-td">1500</td><td class="crd-td">540</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Asei</strong></td><td class="crd-td">Cenderawasih Bay and Mamberamo</td><td class="crd-td">500BC</td><td class="crd-td">1750</td><td class="crd-td">1,2k</td><td class="crd-td">3</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Stratified Pleistocene, Holocene and Lapita archaeological anchor locales with pre-1AD observations across New Guinea and the Bismarck Archipelago.</figcaption>
</figure>

## Rank-Size Scaling and Provenance Ledger

Across the upper half of the register (ranks 1 to 38, spanning 38k down to 890 inhabitants), peak settlement sizes conform tightly to a Zipfian power law with exponent $\alpha = 0,93$ ($R^2 = 0,97$; intercept 4,41), while the full 76-locale curve yields $\alpha = 1,11$ ($R^2 = 0,87$) owing to the steeper step down into small Pleistocene cave catchments (118 to 235 inhabitants) at ranks 66 to 76. Unlike centralised agrarian empires where a single primate capital towers over provincial towns, New Guinea's near-unitary upper-half slope reflects a polycentric archipelago of autonomous highland valley confederations, Kula and Hiri maritime hubs, riverine ceremonial villages and Moluccan-linked western ports [@denham2024resonating; @liu2022assessing; @david2016ruisasi].

# Limitations

Three methodological caveats govern spatial analysis of this gazetteer. First, archaeological and ethnographic coverage is denser in Papua New Guinea (52 locales, 68,4%) than in Indonesian Papua (24 locales, 31,6%), leaving portions of the interior Mamberamo and Digul plains under-represented relative to the Wahgi, Sepik, Massim and Bismarck corridors [@denham2024resonating]. Second, settlement boundaries differ by ecology: highland valley confederations (Baliem Valley, Tari Basin, Paniai, Mogei, Mintima) aggregate contiguous valley-floor hamlets linked by shared ditch networks and exchange ceremonies, whereas coastal ports and stilt villages (Hanuabada, Motupore, Doreh, Tobati, Matupit, Pere) represent discrete nucleated settlements. Third, early Holocene cave and rock-shelter populations (118 to 235 persons at peak) index recurrent local band catchment capacity rather than permanent year-round co-residence inside a single cavern [@roberts2017persistent; @barker2023holocene].

# Conclusion

This gazetteer establishes an evidence-based spatial register of 76 pre-colonial habitation locales and 191 dated observations across all nine HydroBASINS watersheds of New Guinea and the Bismarck Archipelago from 10000BC to 1884. With 0% crowd-sourced fallback entries, zero empty sub-regions and complete reconciliation of the 3 excluded Bougainville-Buka candidates, the catalogue links deep-time Pleistocene foraging shelters, independent Kuk Swamp wetland farming and Lapita Bismarck maritime centres directly to the dense highland valley confederations and coastal exchange villages encountered at the 1884 colonial partition [@denham2003origins; @cochrane2018evolution; @denham2024resonating].

# Appendix

## Source-Ledger Provenance Breakdown

Table \ref{tab:sett-provenance} summarises the leading scholarly and archival source authorities cited across the 76 catalogued settlements, illustrating balanced dependence on regional archaeology, Pacific ethnohistory and early Dutch and German administrative records.

<figure class="crd-table-figure" id="tab:sett-provenance">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Source Authority</th><th class="crd-th">Locales Cited</th><th class="crd-th">Share of Register</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Swadling, P.</strong></td><td class="crd-td">7</td><td class="crd-td">9,2%</td></tr>
<tr><td class="crd-td"><strong>Sack, P. and Clark, D.</strong></td><td class="crd-td">4</td><td class="crd-td">5,3%</td></tr>
<tr><td class="crd-td"><strong>van der Sande, G. A. J.</strong></td><td class="crd-td">4</td><td class="crd-td">5,3%</td></tr>
<tr><td class="crd-td"><strong>Goodman, T.</strong></td><td class="crd-td">4</td><td class="crd-td">5,3%</td></tr>
<tr><td class="crd-td"><strong>Bulmer, S.</strong></td><td class="crd-td">3</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Kamma, F. C.</strong></td><td class="crd-td">3</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Mead, M.</strong></td><td class="crd-td">3</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Netherlands New Guinea Kantoor voor Bevolkingszaken</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>Terrell, J. E. and Welsch, R. L.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>Kirch, P. V.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>White, J. P.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>White, J. P. et al.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>Lilley, I.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>Harding, T. G.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>Pasveer, J. M.</strong></td><td class="crd-td">2</td><td class="crd-td">2,6%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading scholarly monographs and colonial archival authorities contributing to the 76-locale pre-colonial New Guinea and Bismarck Archipelago gazetteer.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1. Three audited candidate locales on Buka and Bougainville (Yela, Kilu and Buin) are excluded from this chapter's 76-locale register because Bougainville and Buka fall inside the Chapter 03 Main Solomon Islands pre-colonial areal mask.

Note 2. Several western highland locales (Paniai and Waghete in Papua Tengah; Ilaga and Bokondini in Papua Tengah and Papua Pegunungan) fall geographically inside the headwaters of the Bird's Head and Cenderawasih-Mamberamo HydroBASINS watershed polygons despite sharing highland sweet-potato agro-ecologies with the Baliem Valley.
