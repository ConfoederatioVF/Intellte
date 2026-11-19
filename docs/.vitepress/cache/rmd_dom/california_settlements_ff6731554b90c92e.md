---
title: "Settlement Gazetteer of Pre-Colonial California (HU 18)"
subtitle: "CENTAUR-II: Shellmounds, Delta Villages, Acorn Towns and Chumash Maritime Centres, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: california_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_california_spatial.png"
hero_caption: "Geographic distribution of 333 catalogued settlements across California (HU 18) overlaid on the four sub-regional areal masks."
hero_label: "fig:hero-california"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 333 coordinate-anchored settlement trajectories (`california_settlements.json`) and 1 excluded duplicate entry (`california_source_ledger.json5`) across California (USGS Hydrological Unit 18, 425.204 km²) from 10000BC to 1600AD. Spanning 334 ledger candidates across California (`329` sites) and the upper Klamath margin of southern Oregon (`4` sites), the inventory reaches its maximum concentration in the final pre-contact century (`255` sites peaking between `1500AD` and `1600AD`), consistent with Kelly et al. [@kelly2025] and Jones et al. [@jones2021california]. Leading centres comprise the Telamni Yokuts delta town of `Tulare-Telamni` (`1.800` inhabitants in `1600AD`), Chumash coastal capital `Syuxtun` (`1.550`), Sacramento River `Patwin-Koru` (`1.300`), `Emeryville Shellmound` on San Francisco Bay (`1.200`, occupied from `1000BC`), Los Angeles basin `Yaanga` (`1.050`), `Syukhtun` (`850`), `Helo'` (`780`), `Chaw'se-Grinding Rock` (`740`), Klamath-mouth `Rek'woi` (`680`) and Owens Valley `Bishop (Payahuunadu)` (`640`) [@cook1976california; @broughton1999emeryville; @johnson1988chumash].

# Background

Pre-mission Californian demography was structured around hundreds of autonomous triblet village communities rather than centralised urban states, yet major river deltas, shellmound estuaries and Santa Barbara Channel ports achieved town-scale aggregations exceeding 1.000 residents [@kroeber1925california; @cook1976california]. Earliest occupations appear at Santa Rosa Island (`Qshiwqshiw` and `Arlington Springs`, `10000BC`), `Lake Mojave` (`9500BC`), `Witt Site` (`9000BC`) and `Borax Lake` (`9000BC`) [@moratto1984california].

Bounded residential sites, shellmounds and ethnohistoric principal villages are recorded in `california_settlements.json`, while 1 duplicate entry within 2 km of `Emeryville Shellmound` is consolidated in `california_source_ledger.json5` so estuarine mound counts are never duplicated across overlapping monographs.

# Methodology

## Inclusion Criteria and Demographic Estimation

All 334 candidates in `california_source_ledger.json5` follow Operation Viscount screening rules. One duplicate coordinate entry (`Emeryville Shellmound`) is excluded under duplicate consolidation, whereas 333 distinct archaeological and ethnohistoric settlements carry `CENTAUR` provenance across four sub-regions (`71` in Klamath-North Coast, `93` in Sacramento-SF Bay-Delta, `64` in San Joaquin-Central Coast and `105` in Chumash Channel-Southern California).

Population time-series combine excavated house-pit and shellmound volume trajectories at `Emeryville Shellmound`, `Ryan Mound` and `Ellis Landing` [@broughton1999emeryville], Chumash mission-baptismal and plank-canoe reconstructions at `Syuxtun`, `Syukhtun`, `Helo'`, `Mikiw`, `Shisholop` and `Muwu` [@johnson1988chumash; @arnold2001chumash], Central Valley Yokuts and Patwin village counts at `Tulare-Telamni`, `Tulamniu` and `Patwin-Koru` [@cook1976california], Yurok redwood-plank house tallies at `Rek'woi` and `Tsurai` [@kroeber1925california], Sierra bedrock-mortar aggregation at `Chaw'se-Grinding Rock` [@lightfoot2009california] and irrigated Owens Valley villages around `Bishop (Payahuunadu)` [@bettinger1982owens].

# Testing and Validation

Gazetteer auditing passed all reconciliation checks at 0 errors at GMT+0:

1. **Ledger Parity**: All 334 ledger candidates (333 included, 1 excluded) match `california_settlements.json` keys with zero discrepancies.
2. **Coordinate Compliance**: All 333 included records carry valid coordinates (`32,62 N` to `42,93 N`, `115,64 W` to `124,38 W`), strictly positive integer populations and uniform `CENTAUR` source attribution.
3. **Sub-Regional Mass Conservation**: Explicit settlement totals sum to `67.435` in `1500AD` (`21,75%` of HU 18 total `310,0k`) and `80.540` in `1600AD` (`23,97%` of `336,0k`), leaving strictly positive rural residuals in every sub-region.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tulare-Telamni</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">36,2 N, 119,45 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.800</td></tr>
<tr><td class="crd-td"><strong>Syuxtun</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,46 N, 119,71 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.550</td></tr>
<tr><td class="crd-td"><strong>Patwin-Koru</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">39,21 N, 122,01 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.300</td></tr>
<tr><td class="crd-td"><strong>Emeryville Shellmound</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,84 N, 122,29 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Yaanga</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,05 N, 118,24 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.050</td></tr>
<tr><td class="crd-td"><strong>Syukhtun</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,46 N, 119,71 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">850</td></tr>
<tr><td class="crd-td"><strong>Helo'</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,42 N, 119,84 W</td><td class="crd-td">500BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">780</td></tr>
<tr><td class="crd-td"><strong>Chaw'se-Grinding Rock</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,42 N, 120,64 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">740</td></tr>
<tr><td class="crd-td"><strong>Rek'woi</strong></td><td class="crd-td">California</td><td class="crd-td">Klamath-N. Coast</td><td class="crd-td">41,55 N, 124,07 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Bishop (Payahuunadu)</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,36 N, 118,39 W</td><td class="crd-td">600AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Mikiw</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,44 N, 119,96 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Shisholop</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,27 N, 119,3 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">610</td></tr>
<tr><td class="crd-td"><strong>Tulamniu</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">35,22 N, 119,34 W</td><td class="crd-td">5000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">580</td></tr>
<tr><td class="crd-td"><strong>Muwu</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,09 N, 119,08 W</td><td class="crd-td">500BC-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">540</td></tr>
<tr><td class="crd-td"><strong>Ryan Mound</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,55 N, 122,08 W</td><td class="crd-td">500BC-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">540</td></tr>
<tr><td class="crd-td"><strong>Hotchkiss</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,99 N, 121,68 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Pujune</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,6 N, 121,5 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Yukisma</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,44 N, 121,91 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">510</td></tr>
<tr><td class="crd-td"><strong>Ellis Landing</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,91 N, 122,35 W</td><td class="crd-td">1500BC-1400AD</td><td class="crd-td">800AD</td><td class="crd-td">490</td></tr>
<tr><td class="crd-td"><strong>Puvungna</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">33,78 N, 118,12 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">490</td></tr>
<tr><td class="crd-td"><strong>Wukchumni</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">36,38 N, 119,03 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">490</td></tr>
<tr><td class="crd-td"><strong>Castro Mound</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,4 N, 122,09 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1300AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Olompali</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,15 N, 122,57 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Tolowot</strong></td><td class="crd-td">California</td><td class="crd-td">Klamath-N. Coast</td><td class="crd-td">40,81 N, 124,17 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Pano</strong></td><td class="crd-td">California</td><td class="crd-td">Klamath-N. Coast</td><td class="crd-td">39,72 N, 121,84 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">470</td></tr>
<tr><td class="crd-td"><strong>Augustine</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,3 N, 121,41 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Buena Vista (CA-KER-39)</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">35,21 N, 119,3 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Elem</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">39,01 N, 122,67 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Humaliwo</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,04 N, 118,68 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>West Berkeley</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,87 N, 122,3 W</td><td class="crd-td">3000BC-800AD</td><td class="crd-td">800AD</td><td class="crd-td">460</td></tr>
<tr><td class="crd-td"><strong>Bakersfield (Woilo)</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">35,37 N, 119,02 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Carpinteria (Mishopshno)</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,4 N, 119,52 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>San Jose (Tamien)</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">37,34 N, 121,89 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Shanel</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,97 N, 123,12 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Xaxas</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,04 N, 119,79 W</td><td class="crd-td">6500BC-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">450</td></tr>
<tr><td class="crd-td"><strong>Knights Landing (Yo'doi)</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,8 N, 121,72 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Lodi (Mokelumne)</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">38,13 N, 121,27 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Suangna</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">33,8 N, 118,27 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Cosoy</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">32,75 N, 117,2 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Hock Farm</strong></td><td class="crd-td">California</td><td class="crd-td">Sacramento-Delta</td><td class="crd-td">39,03 N, 121,62 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>La Ballona</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">33,97 N, 118,43 W</td><td class="crd-td">1000BC-1500AD</td><td class="crd-td">1500AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Lake Cahuilla (Coachella)</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">33,54 N, 116,17 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Lemoore (Tachi)</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">36,3 N, 119,78 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Quiroste</strong></td><td class="crd-td">California</td><td class="crd-td">San Joaquin-Coast</td><td class="crd-td">37,14 N, 122,31 W</td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Sibagna</strong></td><td class="crd-td">California</td><td class="crd-td">Chumash-South</td><td class="crd-td">34,03 N, 118,07 W</td><td class="crd-td">500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">420</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements by peak population across the 333 catalogued sites in the California (HU 18) gazetteer.</figcaption>
</figure>

# Results

## Central Valley, Delta and North Coast Villages

In the Central Valley, Bay-Delta and Klamath sub-regions, nucleated riverside and marsh-edge towns expanded across the Late Holocene (Table 1 and Figure 1). `Emeryville Shellmound` (`37,84 N, 122,29 W`) on San Francisco Bay grew from `240` inhabitants in `1000BC` to `520` at `0AD`, `950` in `1200AD` and `1.200` in `1600AD` [@broughton1999emeryville], complemented by `Ryan Mound` (`540` in `1500AD`), `Hotchkiss` (`520` in `1600AD`), `Pujune` (`520` in `1600AD`), `Yukisma` (`510` in `1500AD`) and `Ellis Landing` (`490` in `800AD`). On the Sacramento River, `Patwin-Koru` reached `1.300` in `1600AD`, while further south `Tulare-Telamni` on the Kaweah Delta rose from `480` in `600AD` to `1.650` in `1500AD` and `1.800` in `1600AD`, flanked by `Tulamniu` (`580` in `1600AD`, active from `5000BC`) and `Wukchumni` (`490`) [@cook1976california].

Along the Sierra and eastern margin, `Chaw'se-Grinding Rock` expanded from `340` in `1000AD` to `740` in `1600AD` and Owens Valley irrigation hub `Bishop (Payahuunadu)` reached `640` in `1600AD` [@bettinger1982owens; @lightfoot2009california]. Across the Klamath-North Coast tier (`71` sites), Yurok, Wiyot, Tolowa and Hupa villages at `Rek'woi` (`680`), `Tolowot` (`480`), `Pano` (`470`), `Yontocket` (`420`), `Takimilding` (`410`) and `Tsurai` (`310`) anchored the northern littoral [@kroeber1925california].

<figure class="crd-figure-block" id="fig:sett-california">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-california-settlements/fig4_california_settlements.png" alt="fig:sett-california" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 333 sites in the California (HU 18) gazetteer.</figcaption>
</figure>

## Chumash Channel and Southern California Centres

Along the Santa Barbara Channel and southern littoral (`105` sites), maritime plank-canoe (*tomol*) trade and island-mainland craft specialisation supported dense coastal capitals [@arnold2001chumash; @johnson1988chumash]. `Syuxtun` (`34,46 N, 119,71 W`) expanded from `420` residents at `0AD` to `1.150` in `1200AD` and `1.550` in `1600AD`, flanked by `Syukhtun` (`850`), `Helo'` (`780`), `Mikiw` (`620` in `1500AD`), `Shisholop` (`610` in `1600AD`) and `Muwu` (`540` in `1500AD`, `520` in `1600AD`). Across the Los Angeles basin and interior southern valleys, `Yaanga` reached `1.050` in `1600AD`, `Puvungna` reached `490` and `Humaliwo` reached `460` [@cook1976california].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State/Country</th><th class="crd-th">Status</th><th class="crd-th">Exclusion Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Emeryville Shellmound</strong></td><td class="crd-td">California</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Emeryville Shellmound' (Uhle, M. (1907). The Emeryville Shellmound. UCPAAE 7(1); Broughton, J.M. (1999). Resource Depression and Intensification During the Late Holocene, San Francisco Bay. UC Press.).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidates (1 of 334 total) in the California (HU 18) source ledger.</figcaption>
</figure>

# Limitations

Because pre-contact California comprised hundreds of autonomous triblet villages averaging 100 to 300 inhabitants each [@kroeber1925california; @cook1976california], the `333` catalogued settlements capture `23,97%` (`80.540` of `336,0k`) of the `1600AD` regional total, leaving `76,03%` of rural inhabitants allocated across the non-stationary Matérn radiocarbon surface [@kelly2025]. In addition, small seasonal camps in the High Sierra and Mojave Desert remain subsumed inside sub-regional background totals rather than fixed point coordinates [@moratto1984california].

# Sources

<div id="refs"></div>
