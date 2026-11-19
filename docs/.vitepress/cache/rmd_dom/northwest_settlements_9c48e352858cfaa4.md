---
title: "Settlement Gazetteer of the Pre-Colonial Northwest (HU 17)"
subtitle: "CENTAUR-II: Plank-House Towns, Salmon Fisheries and Plateau Centres, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: northwest_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northwest_spatial.png"
hero_caption: "Geographic distribution of 140 catalogued settlements across the Northwest (HU 17) overlaid on the four sub-regional areal masks."
hero_label: "fig:hero-northwest"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 140 coordinate-anchored settlement trajectories (`northwest_settlements.json`) and 2 excluded duplicate entries (`northwest_source_ledger.json5`) across the Pacific Northwest (USGS Hydrological Unit 17, 712.090 km²) from 10000BC to 1600AD. Spanning 142 ledger candidates across Washington (`61`), Oregon (`43`), Idaho (`33`) and northern Nevada (`3`), the inventory captures terminal Pleistocene occupations at `Cooper's Ferry`, `Rimrock Draw Rockshelter`, `Paisley Caves`, `Manis Mastodon` and `East Wenatchee (Richey-Roberts)` (`10000BC`) [@jenkins2012paisley; @waters2011manis], deep-time canyon continuity at `Five Mile Rapids-Celilo` (`8500BC` to `1.600` in `1600AD`), `Celilo Falls (Wyam)` (`5000BC` to `850` in `1600AD`), `Kettle Falls` (`6500BC` to `560`) and `Marmes Rockshelter` (`9000BC` to `260` in `1200AD`) [@cressman1960dalles; @fryxell1968marmes], Coast Salish and Makah coastal towns at `Ozette` (`1.150`), `Tse-whit-zen` (`1.120`) and `Old Man House` (`920`) [@matson1995northwest; @samuels1991ozette; @rorabaugh2023salish], and Lower Columbia Chinookan and Kalapuya centres at `Cathlapotle` (`1.200`), `Meier-Multnomah` (`950`), `Kalapuya-Champoeg` (`780`) and `Multnomah (Sauvie Island)` (`610`) [@sobel2006cathlapotle; @ames1992meier].

# Background

Sedentary settlement in HU 17 developed around predictable marine, estuarine and river-canyon bottlenecks rather than cereal agriculture [@ames1999northwest; @matson1995northwest]. Deeply stratified shellmiddens, wet-site cedar plank-house villages preserved by mudslides (`Ozette`) and multi-millennial canyon fishery terraces provide continuous demographic sequences across all four watershed sub-regions [@samuels1991ozette; @sobel2006cathlapotle].

At the Pleistocene-Holocene root, early cave and terrace occupations at `Paisley Caves` (`10000BC`, `25` to `50` in `4000BC`), `Manis Mastodon` (`10000BC`, `20` to `30` in `8000BC`) and `Cooper's Ferry` (`10000BC`, `25` to `130` in `500AD`) anchor initial sparse foraging populations inside the gazetteer [@jenkins2012paisley; @waters2011manis], while `2` duplicate heritage entries (`Jaguar Cave (44.37,-113.19)-Idaho` and a duplicate `Celilo Falls (Wyam)` pin) are consolidated in `northwest_source_ledger.json5` to prevent double counting.

# Methodology

## Inclusion Rules and Plank-House Demographic Estimation

All 142 candidate records in `northwest_source_ledger.json5` follow Operation Viscount screening rules. Two duplicate aliases (`Jaguar Cave (44.37,-113.19)-Idaho`, `17,41 km` from canonical `Jaguar Cave-Idaho`, and a 2 km twin of `Celilo Falls (Wyam)`) are excluded, leaving 140 settlements tagged `CENTAUR` across four sub-regions (`31` in Puget Sound-Olympic Coast, `24` in Lower Columbia-Willamette, `50` in Columbia Plateau-Dalles and `35` in Snake River-High Desert).

Population series apply coastal and riverine hearth-and-plank-house multipliers: 25 to 45 inhabitants per multi-family Chinookan or Coast Salish cedar plank-house [@ames1992meier; @sobel2006cathlapotle; @samuels1991ozette], ethnohistoric village-count anchors along the Lower Columbia and Willamette [@boyd1999northwest], pithouse depression counts on the Columbia Plateau [@cressman1960dalles], and high-desert wetland or canyon winter-village counts across the Snake River Plain and Owyhee basin.

# Testing and Validation

Gazetteer auditing passed all reconciliation checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 142 ledger entries (140 included, 2 excluded) reconcile cleanly against `northwest_settlements.json`.
2. **Coordinate Compliance**: All 140 records carry valid coordinates (`41,19 N` to `48,86 N`, `112,56 W` to `124,71 W`), strictly positive integer trajectories and `CENTAUR` provenance across four states (`61` Washington, `43` Oregon, `33` Idaho and `3` Nevada).
3. **Sub-Regional Mass Conservation**: Explicit settlement totals represent `12,53%` of total HU 17 population in `1500AD` (`24.060` of `192,0k`) and `14,54%` in `1600AD` (`30.470` of `209,5k`), leaving positive rural residuals across all four sub-regions.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State/Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Five Mile Rapids-Celilo</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">45,64 N, 121,12 W</td><td class="crd-td">8500BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.600</td></tr>
<tr><td class="crd-td"><strong>Cathlapotle</strong></td><td class="crd-td">Washington</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,85 N, 122,76 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Ozette</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,21 N, 124,71 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.150</td></tr>
<tr><td class="crd-td"><strong>Tse-whit-zen</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,12 N, 123,45 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.120</td></tr>
<tr><td class="crd-td"><strong>Meier-Multnomah</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,74 N, 122,84 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Old Man House</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,72 N, 122,55 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">920</td></tr>
<tr><td class="crd-td"><strong>Wyam</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">45,65 N, 120,96 W</td><td class="crd-td">5000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Kalapuya-Champoeg</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,25 N, 122,89 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">780</td></tr>
<tr><td class="crd-td"><strong>Multnomah (Sauvie Island)</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,74 N, 122,81 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">610</td></tr>
<tr><td class="crd-td"><strong>Kettle Falls</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">48,62 N, 118,11 W</td><td class="crd-td">6500BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">560</td></tr>
<tr><td class="crd-td"><strong>Neah Bay</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,37 N, 124,62 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Cascades (Watlala)</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,64 N, 121,94 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">490</td></tr>
<tr><td class="crd-td"><strong>Willapa Bay (Chinook Point)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Lower Columbia</td><td class="crd-td">46,25 N, 123,9 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Clatsop</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">46,18 N, 123,92 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Priest Rapids</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,64 N, 119,91 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Walla Walla (Wallula)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,07 N, 118,92 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Hagerman-Bliss</strong></td><td class="crd-td">Idaho</td><td class="crd-td">Snake-High Desert</td><td class="crd-td">42,82 N, 114,9 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Miller Site (Miller Island)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">45,65 N, 120,92 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Wahluke</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,67 N, 119,87 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Par-Tee</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,99 N, 123,92 W</td><td class="crd-td">1000BC-1400AD</td><td class="crd-td">1400AD</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Umatilla</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">45,92 N, 119,34 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Spokane Falls</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">47,66 N, 117,42 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">430</td></tr>
<tr><td class="crd-td"><strong>Duwamish Head</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,59 N, 122,39 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Hueneme-Sunnyside (Yakima)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,47 N, 120,42 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Kamiah</strong></td><td class="crd-td">Idaho</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,23 N, 116,03 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Lummi (Point Francis)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,79 N, 122,62 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Nisqually (Steilacoom)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,08 N, 122,7 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Penn Cove (Snatelum)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,29 N, 122,71 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Taholah</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,35 N, 124,29 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Palus</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,59 N, 118,22 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">410</td></tr>
<tr><td class="crd-td"><strong>Xwe'chi'eXen</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,86 N, 122,75 W</td><td class="crd-td">1000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">410</td></tr>
<tr><td class="crd-td"><strong>La Conner</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,39 N, 122,5 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">400</td></tr>
<tr><td class="crd-td"><strong>La Push</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,96 N, 124,62 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">390</td></tr>
<tr><td class="crd-td"><strong>Strawberry Island</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,24 N, 119,01 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">390</td></tr>
<tr><td class="crd-td"><strong>Cascade Locks</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">45,67 N, 121,89 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Chief Joseph (Rufus Woods)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">48,03 N, 119,52 W</td><td class="crd-td">3000BC-1400AD</td><td class="crd-td">1400AD</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Skokomish</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,33 N, 123,15 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Spalding</strong></td><td class="crd-td">Idaho</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,45 N, 116,83 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Wenatchee (Sinkiuse)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">47,47 N, 120,33 W</td><td class="crd-td">3000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Dungeness ( Jamestown)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,14 N, 123,12 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">370</td></tr>
<tr><td class="crd-td"><strong>English Camp</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">48,59 N, 123,15 W</td><td class="crd-td">500BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">360</td></tr>
<tr><td class="crd-td"><strong>Olympia (Squaxin)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Puget-Olympic</td><td class="crd-td">47,06 N, 122,9 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">360</td></tr>
<tr><td class="crd-td"><strong>Vantage (Schaake)</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,95 N, 119,98 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">360</td></tr>
<tr><td class="crd-td"><strong>Alpowai</strong></td><td class="crd-td">Washington</td><td class="crd-td">Columbia Plateau</td><td class="crd-td">46,42 N, 117,22 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">340</td></tr>
<tr><td class="crd-td"><strong>Bandon (Bullards Beach)</strong></td><td class="crd-td">Oregon</td><td class="crd-td">Lower Columbia</td><td class="crd-td">43,12 N, 124,38 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">340</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements by peak population across the 140 catalogued sites in the Northwest (HU 17) gazetteer.</figcaption>
</figure>

# Results

## Puget Sound and Lower Columbia Plank-House Towns

Coastal and estuarine towns dominated the upper rank-size tier of HU 17 (Table 1 and Figure 1). Across Puget Sound and the Strait of Juan de Fuca (`31` sites), `Ozette` (`48,21 N, 124,71 W`) rose from `320` at `0AD` to `1.150` in `1600AD`, `Tse-whit-zen` (`48,12 N, 123,45 W`) grew from `180` in `1000BC` to `1.120` in `1600AD` and `Old Man House` (`47,72 N, 122,55 W`) expanded from `180` in `500AD` to `920` in `1600AD`, joined by `Neah Bay` (`520`), `Duwamish Head` (`420`) and `Lummi (Point Francis)` (`420`) [@samuels1991ozette; @rorabaugh2023salish].

Along the Lower Columbia-Wapato Valley and Oregon-Washington coast (`24` sites), `Cathlapotle` rose from `650` in `1400AD` to `1.200` in `1600AD`, `Meier-Multnomah` grew from `520` in `1400AD` to `950` in `1600AD`, `Kalapuya-Champoeg` reached `780` in `1600AD`, `Multnomah (Sauvie Island)` reached `610`, `Cascades (Watlala)` reached `490`, `Willapa Bay (Chinook Point)` reached `480` and `Clatsop` reached `460` [@sobel2006cathlapotle; @ames1992meier; @boyd1999northwest].

<figure class="crd-figure-block" id="fig:sett-northwest">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northwest-settlements/fig4_northwest_settlements.png" alt="fig:sett-northwest" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 140 sites in the Northwest (HU 17) gazetteer.</figcaption>
</figure>

## Columbia Plateau Fisheries and Snake River Interior

On the Columbia Plateau (`50` sites), `Five Mile Rapids-Celilo` (`45,64 N, 121,12 W`) exhibits one of the deepest continuous sequences in HU 17, expanding from `40` inhabitants in `8500BC` and `260` in `4000BC` to `580` at `0AD`, `950` in `800AD` and `1.600` in `1600AD` as the premier Plateau salmon-trading nexus [@cressman1960dalles]. Neighbouring `Celilo Falls (Wyam)` spans `5000BC` (`95`) to `1600AD` (`850`), `Kettle Falls` spans `6500BC` (`50`) to `1600AD` (`560`), `Priest Rapids` and `Walla Walla (Wallula)` reach `460` each, `Miller Site (Miller Island)` reaches `450` and `Marmes Rockshelter` spans `9000BC` (`25`) to `1200AD` (`260`) [@fryxell1968marmes]. Across the Snake River Plain and Harney-Owyhee high desert (`35` sites), `Hagerman-Bliss` reached `450` in `1600AD`, `Nampa (Deer Flat)` reached `240`, `American Falls` reached `240` in `1400AD`, `Weiser (Mann Creek)` reached `230` and `Bruneau (Bliss)` reached `220`.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State/Country</th><th class="crd-th">Status</th><th class="crd-th">Exclusion Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jaguar Cave</strong></td><td class="crd-td">Idaho</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 17,41 km matching-name/HYDE-centroid twin into canonical Jaguar Cave-Idaho.</td></tr>
<tr><td class="crd-td"><strong>Celilo Falls (Wyam)</strong></td><td class="crd-td">Oregon</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Celilo Falls (Wyam)' (CENTAUR Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidates (2 of 142 total) in the Northwest (HU 17) source ledger.</figcaption>
</figure>

# Limitations

Plateau and coastal populations underwent strong seasonal mobility between winter plank-house or pithouse villages and summer fishing or root-gathering camps such as Celilo Falls [@cressman1960dalles; @ames1999northwest]. Annualised integer benchmarks smooth these intra-year swings, and hundreds of smaller Chinookan, Salish, Sahaptin and Northern Paiute camps remain absorbed within the continuous kriged rural surface [@kelly2025].

# Sources

<div id="refs"></div>
