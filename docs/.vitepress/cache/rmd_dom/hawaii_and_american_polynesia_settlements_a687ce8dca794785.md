---
title: "Settlement Gazetteer of Pre-Annexation Hawai'i and American Polynesia"
subtitle: "CENTAUR-II: Royal Centres, Ahupua'a Nodes and Mission Ports, -1000 to 1898AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hawaii_and_american_polynesia_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hawaii_and_american_polynesia_spatial.png"
hero_caption: "Spatial distribution of 20 verified Polynesian royal centres, mission ports and Samoan bay villages mapped onto the five CENTAUR-II areal masks."
hero_label: "fig:hero-hawaii-and-american-polynesia"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 20 verified settlements compiled for Hawai'i and American Polynesia under Operation Viscount CENTAUR-II across -10000 to 1898AD. Drawn from archaeological valley surveys, chiefly court chronologies and Hawaiian Kingdom censuses [@kirch2010how; @schmitt1968demographic; @schmitt1977historical], the catalogue records six centres on Hawai'i Island, four in Maui Nui, four on O'ahu, two on Kaua'i-Ni'ihau and four across Tutuila in Eastern Samoa. At the 1778AD pre-contact peak, the largest concentrated settlements were Waikīkī (8,5k), Waipi'o (6,8k), Kailua-Kona (6,5k), Lahaina (6,2k), Hilo (5,8k) and Kāne'ohe-He'eia (5,2k) [@kirch2010how]. During the nineteenth century, port-driven nucleation shifted urban primacy to Honolulu (29,92k in 1896AD), whilst Pago Pago (1,22k in 1898AD) emerged as the principal harbour node in Eastern Samoa [@schmitt1977historical; @uscensus1901twelfth]. Two unquantified or subordinate candidate sites documented in the source ledger (`Kawaihae Coastal Camps` and `Nu'uli Lagoon Fishponds`) were excluded to prevent double counting.

# Background

Unlike continental urban grids, pre-contact Polynesian population distributed across radially bounded *ahupua'a* catchment strips in Hawai'i and bay-centred *nu'u* villages in Samoa [@kirch2010how; @rieth2008radiocarbon]. High-density clusters formed where irrigated wetland *lo'i* plains met protected reef or fishpond coastlines, or where high chiefs (*ali'i nui*) maintained seasonal royal courts such as Waikīkī, Lahaina, Kailua-Kona, Hōnaunau and Waipi'o [@kirch2010how; @ladefoged2009opportunities]. Following Western contact in 1778AD, whaling, sandalwood trade and sugar-export infrastructure redirected settlement away from dryland leeward districts toward deep-water harbours at Honolulu, Lahaina, Hilo and Pago Pago [@schmitt1968demographic].

# Methodology

Every candidate locus in the regional literature was evaluated against the `CENTAUR` exhaustiveness ledger (`hawaii_and_american_polynesia_source_ledger.json5`) and assigned exclusively to the canonical project source array `["CENTAUR"]`. Coordinates in WGS84 decimal degrees were mapped to the five 5-arcminute areal masks using a 12-pixel coastal snap radius. Where minor seasonal camps lacked independent residential populations (`Kawaihae Coastal Camps` below Pu'ukoholā) or where lagoon catchments overlapped a primary harbour (`Nu'uli Lagoon Fishponds` adjacent to Pago Pago and Fagatogo), entries were recorded as `"excluded"` in the ledger with explicit justification.

# Testing and Validation

Ledger reconciliation confirms `20` included settlements and `2` excluded candidates (`22` total candidates, `0` unaccounted). All 20 records map cleanly onto their host island masks without missing coordinates or negative population values. Figure \ref{fig:sett-hawaii} presents the rank-size curve and leading settlements across the gazetteer.

<figure class="crd-figure-block" id="fig:sett-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia-settlements/fig4_hawaii_and_american_polynesia_settlements.png" alt="fig:sett-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement population peaks across the 20 catalogued centres of Hawai'i and American Polynesia.</figcaption>
</figure>

# Results

## Complete Settlement Catalogue

Table \ref{tab:gazetteer-hawaii} lists all 20 verified settlements ordered by peak recorded population, reporting coordinates, island region and benchmark population estimates. Note that `Honolulu` and `Honolulu CDP` appear as paired historical and US Census Bureau place records sharing the 1870-1910 urban trajectory on O'ahu.

<figure class="crd-table-figure" id="tab:gazetteer-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Island Group</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1778AD</th><th class="crd-th">1832AD</th><th class="crd-th">1896AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Honolulu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,31, -157,86</td><td class="crd-td">1300-1910</td><td class="crd-td">2,8k</td><td class="crd-td">6,2k</td><td class="crd-td">29,9k</td><td class="crd-td">52,2k (1910)</td></tr>
<tr><td class="crd-td"><strong>Honolulu CDP</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,31, -157,86</td><td class="crd-td">1870-1910</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,2k (1910)</td></tr>
<tr><td class="crd-td"><strong>Waikīkī</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,28, -157,83</td><td class="crd-td">1100-1896</td><td class="crd-td">8,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td><td class="crd-td">8,5k (1778)</td></tr>
<tr><td class="crd-td"><strong>Waipi'o</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">20,12, -155,59</td><td class="crd-td">1100-1896</td><td class="crd-td">6,8k</td><td class="crd-td">1,8k</td><td class="crd-td">480</td><td class="crd-td">6,8k (1778)</td></tr>
<tr><td class="crd-td"><strong>Kailua-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,64, -156</td><td class="crd-td">1000-1896</td><td class="crd-td">6,5k</td><td class="crd-td">3,2k</td><td class="crd-td">1,4k</td><td class="crd-td">6,5k (1778)</td></tr>
<tr><td class="crd-td"><strong>Lahaina</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,88, -156,68</td><td class="crd-td">1100-1896</td><td class="crd-td">6,2k</td><td class="crd-td">4,2k</td><td class="crd-td">3k</td><td class="crd-td">6,2k (1778)</td></tr>
<tr><td class="crd-td"><strong>Hilo</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,73, -155,09</td><td class="crd-td">1000-1896</td><td class="crd-td">5,8k</td><td class="crd-td">4,1k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k (1778)</td></tr>
<tr><td class="crd-td"><strong>Kāne'ohe-He'eia</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,42, -157,8</td><td class="crd-td">1100-1896</td><td class="crd-td">5,2k</td><td class="crd-td">2,1k</td><td class="crd-td">1,9k</td><td class="crd-td">5,2k (1778)</td></tr>
<tr><td class="crd-td"><strong>Wailuku</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,89, -156,5</td><td class="crd-td">1200-1896</td><td class="crd-td">4,9k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">4,9k (1778)</td></tr>
<tr><td class="crd-td"><strong>Hanalei-Wailua</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">22,2, -159,5</td><td class="crd-td">1100-1896</td><td class="crd-td">4,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,2k</td><td class="crd-td">4,4k (1778)</td></tr>
<tr><td class="crd-td"><strong>Līhu'e</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,98, -159,37</td><td class="crd-td">1200-1896</td><td class="crd-td">3,8k</td><td class="crd-td">1,4k</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k (1778)</td></tr>
<tr><td class="crd-td"><strong>Pi'ilanihale</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,8, -156,04</td><td class="crd-td">1300-1896</td><td class="crd-td">3,2k</td><td class="crd-td">1,4k</td><td class="crd-td">850</td><td class="crd-td">3,2k (1778)</td></tr>
<tr><td class="crd-td"><strong>Kaunakakai-Hālawa</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">21,09, -157,02</td><td class="crd-td">1100-1896</td><td class="crd-td">3,1k</td><td class="crd-td">1,6k</td><td class="crd-td">950</td><td class="crd-td">3,1k (1778)</td></tr>
<tr><td class="crd-td"><strong>Waiohinu-Ka'ū</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,07, -155,61</td><td class="crd-td">1200-1896</td><td class="crd-td">2,9k</td><td class="crd-td">1,4k</td><td class="crd-td">750</td><td class="crd-td">2,9k (1778)</td></tr>
<tr><td class="crd-td"><strong>Hōnaunau</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,42, -155,91</td><td class="crd-td">1300-1896</td><td class="crd-td">2,5k</td><td class="crd-td">1,1k</td><td class="crd-td">680</td><td class="crd-td">2,5k (1778)</td></tr>
<tr><td class="crd-td"><strong>Pu'ukoholā</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">20,03, -155,82</td><td class="crd-td">1400-1896</td><td class="crd-td">1,8k</td><td class="crd-td">950</td><td class="crd-td">420</td><td class="crd-td">2,4k (1800)</td></tr>
<tr><td class="crd-td"><strong>Pago Pago</strong></td><td class="crd-td">Eastern Samoa / American Polynesia</td><td class="crd-td">-14,28, -170,7</td><td class="crd-td">0-1898</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1898)</td></tr>
<tr><td class="crd-td"><strong>Leone</strong></td><td class="crd-td">Eastern Samoa / American Polynesia</td><td class="crd-td">-14,34, -170,78</td><td class="crd-td">600-1890</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1778)</td></tr>
<tr><td class="crd-td"><strong>Fagatogo</strong></td><td class="crd-td">Eastern Samoa / American Polynesia</td><td class="crd-td">-14,28, -170,69</td><td class="crd-td">1000-1898</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">780 (1898)</td></tr>
<tr><td class="crd-td"><strong>'Aoa</strong></td><td class="crd-td">Eastern Samoa / American Polynesia</td><td class="crd-td">-14,26, -170,58</td><td class="crd-td">-1000-1890</td><td class="crd-td">750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">750 (1778)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> All 20 verified settlements in the CENTAUR-II Hawai'i and American Polynesia gazetteer ordered by peak population.</figcaption>
</figure>

## Sub-Regional Summary

Table \ref{tab:regsum-hawaii} aggregates catalogued urban and nodal populations by island group against total regional populations in 1778AD and 1896AD. At 1778AD, the 20 named centres capture 68,8k persons (18% of the 382,2k regional total), reflecting dispersed *ahupua'a* rural settlement; by 1896AD, Honolulu's expansion raised urban concentration on O'ahu above 82% [@schmitt1977historical].

<figure class="crd-table-figure" id="tab:regsum-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1778AD Nodes</th><th class="crd-th">1832AD Nodes</th><th class="crd-th">1896AD Nodes</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hawai'i Island (Kohala, Kona, Ka'u, Puna, Hilo and Hamakua)</strong></td><td class="crd-td">6</td><td class="crd-td">26,3k</td><td class="crd-td">12,6k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Maui Nui (Maui, Moloka'i, Lana'i and Kaho'olawe)</strong></td><td class="crd-td">4</td><td class="crd-td">17,4k</td><td class="crd-td">10,1k</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>O'ahu (Waikiki, Ewa, Ko'olau and Wai'anae)</strong></td><td class="crd-td">4</td><td class="crd-td">16,5k</td><td class="crd-td">10,7k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Kaua'i and Ni'ihau</strong></td><td class="crd-td">2</td><td class="crd-td">8,2k</td><td class="crd-td">3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Eastern Samoa / American Polynesia (Tutuila, Aunu'u and Manu'a)</strong></td><td class="crd-td">4</td><td class="crd-td">3,6k</td><td class="crd-td">0</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement count and summed nodal population by sub-region at 1778, 1832 and 1896AD.</figcaption>
</figure>

# Limitations

Because pre-contact Hawaiian settlement formed continuous *ahupua'a* bands rather than nucleated European towns, point coordinates represent chiefdom and valley centroids rather than walled urban boundaries [@kirch2010how; @dye2011model]. In addition, `Honolulu` and `Honolulu CDP` represent duplicate census-ingest aliases of the same urban core retained for downstream Stadestér linkage and must not be summed together without deduplication, while Eastern Samoan sites reflect coastal *nu'u* continuity [@kirch1993toaga].

# Sources

<div id="refs"></div>
