---
title: "Settlement Gazetteer of Pre-Annexation Hawai'i and American Polynesia"
subtitle: "CENTAUR-II: Royal Centres, Ahupua'a Nodes and Mission Ports, 1000BC to 1898AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hawaii_and_american_polynesia_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hawaii_and_american_polynesia_spatial.png"
hero_caption: "Spatial distribution of 218 Polynesian royal centres, ahupua'a valleys and bay villages mapped onto the five CENTAUR-II areal masks."
hero_label: "fig:hero-hawaii-and-american-polynesia"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 218 catalogued settlements compiled for Hawai'i and American Polynesia under CENTAUR-II from 1000BC to 1898AD (`15.068 km²`). Drawn from archaeological valley surveys, royal court chronologies, USGS Geographic Names Information System (GNIS) and GeoNames coordinate registers and Hawaiian Kingdom censuses [@kirch2010how; @schmitt1968demographic; @schmitt1977historical], the catalogue records 66 centres on Hawai'i Island, 61 in Maui Nui, 43 on O'ahu, 30 on Kaua'i-Ni'ihau and 18 across Tutuila and Manu'a in Eastern Samoa. At the 1778AD pre-contact peak, the largest concentrated settlements were Waikīkī (8,5k), Waipi'o Valley (6,8k), Kailua-Kona (6,5k), Lāhainā (6,2k), Hilo (5,8k) and Wailuku (4,9k) [@kirch2010how]. During the nineteenth century, port-driven nucleation shifted urban primacy to Honolulu (29,92k in 1896AD and 34,2k in 1898AD), while Pago Pago (1,22k in 1898AD) and Leone (1,05k) anchored settlement in Eastern Samoa [@schmitt1977historical; @uscensus1901twelfth]. Eleven duplicate alias candidates in `hawaii_and_american_polynesia_source_ledger.json5` (out of 229 total candidates) were excluded to prevent close-pair double counting.

# Background

Unlike continental urban grids, pre-contact Polynesian population distributed across radially bounded *ahupua'a* catchment strips in Hawai'i and bay-centred *nu'u* villages in Samoa [@kirch2010how; @rieth2008radiocarbon]. High-density clusters formed where irrigated wetland *lo'i* plains met protected reef or fishpond coastlines, or where high chiefs (*ali'i nui*) maintained seasonal royal courts such as Waikīkī, Lāhainā, Kailua-Kona, Hōnaunau and Waipi'o Valley [@kirch2010how; @ladefoged2009opportunities]. Following Western contact in 1778AD, whaling, sandalwood trade and sugar-export infrastructure redirected settlement away from dryland leeward districts toward deep-water harbours at Honolulu, Lāhainā, Hilo and Pago Pago [@schmitt1968demographic].

# Methodology

Every candidate locus in the regional literature was evaluated against `hawaii_and_american_polynesia_source_ledger.json5` and assigned exclusively to `CENTAUR` provenance. All 218 included Hawaiian and American Samoan loci were re-anchored onto USGS GNIS and GeoNames WGS84 decimal coordinates and mapped to the five five-arcminute areal masks using a 12-pixel coastal snap radius. Ten adjacent *ahupua'a* and Samoan bay localities lying within `1,55 km` of a canonical valley or bay centre (`'Ele'ele`, `Futiga`, `Ili'ili`, `Kapālama`, `Ke'ei`, `Kealaikahiki`, `Kuli'ou'ou`, `Tula`, `Wai'alae` and `Āmouli`), together with a duplicate `Honolulu` census-ingest alias within `2 km`, were consolidated into their parent records and marked excluded in the source ledger.

# Testing and Validation

Ledger reconciliation confirms `218` included settlements and `11` excluded candidates (`229` total candidates, `0` unaccounted). All 218 records map cleanly onto their host island masks (`18,97 N` to `22,22 N` and `154,85 W` to `160,23 W` in Hawai'i; `14,26 S` to `14,36 S` and `170,56 W` to `170,83 W` in Eastern Samoa) with non-zero integer population counts across the `1000BC` to `1898AD` settlement span. Figure \ref{fig:sett-hawaii} presents the rank-size curve and the top twelve settlements across the gazetteer.

<figure class="crd-figure-block" id="fig:sett-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia-settlements/fig4_hawaii_and_american_polynesia_settlements.png" alt="fig:sett-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading twelve settlement peaks across the 218 catalogued centres of Hawai'i and American Polynesia.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:gazetteer-hawaii} lists the top 45 settlements by peak population from the 218-entry gazetteer, reporting USGS GNIS and GeoNames coordinates, island group, occupation span and benchmark estimates across `1778AD`, `1832AD` and `1896AD`.

<figure class="crd-table-figure" id="tab:gazetteer-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Island Group</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1778AD</th><th class="crd-th">1832AD</th><th class="crd-th">1896AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Honolulu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,31, -157,86</td><td class="crd-td">1100AD-1898AD</td><td class="crd-td">2,8k</td><td class="crd-td">6,2k</td><td class="crd-td">29,9k</td><td class="crd-td">34,2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Waikīkī</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,28, -157,83</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">8,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td><td class="crd-td">8,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waipiʻo Valley</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">20,11, -155,6</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">6,8k</td><td class="crd-td">1,8k</td><td class="crd-td">480</td><td class="crd-td">6,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kailua-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,64, -155,99</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">6,5k</td><td class="crd-td">3,2k</td><td class="crd-td">1,4k</td><td class="crd-td">6,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Lāhainā</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,87, -156,68</td><td class="crd-td">1100AD-1898AD</td><td class="crd-td">6,2k</td><td class="crd-td">4,2k</td><td class="crd-td">3k</td><td class="crd-td">6,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hilo</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,72, -155,09</td><td class="crd-td">1000AD-1898AD</td><td class="crd-td">5,8k</td><td class="crd-td">4,1k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Wailuku</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,89, -156,5</td><td class="crd-td">1200AD-1898AD</td><td class="crd-td">4,9k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">4,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hanalei Valley</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">22,2, -159,5</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">3,8k</td><td class="crd-td">1,4k</td><td class="crd-td">940</td><td class="crd-td">3,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hāna</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,76, -155,99</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,2k</td><td class="crd-td">3,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kealakekua</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,52, -155,92</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,4k</td><td class="crd-td">940</td><td class="crd-td">3,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Wailua-Kauaʻi</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">22,05, -159,34</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,2k</td><td class="crd-td">680</td><td class="crd-td">3,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Līhuʻe</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,97, -159,36</td><td class="crd-td">1200AD-1898AD</td><td class="crd-td">2,6k</td><td class="crd-td">1,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kāneʻohe</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,41, -157,8</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,1k</td><td class="crd-td">3k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waiʻōhinu</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,07, -155,61</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,9k</td><td class="crd-td">1,4k</td><td class="crd-td">750</td><td class="crd-td">2,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waimea-Kauaʻi</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,96, -159,67</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,8k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waiākea</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,71, -155,07</td><td class="crd-td">1000AD-1898AD</td><td class="crd-td">2,8k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Honouliuli</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,36, -158,03</td><td class="crd-td">1100AD-1898AD</td><td class="crd-td">2,5k</td><td class="crd-td">960</td><td class="crd-td">1,7k</td><td class="crd-td">2,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waialua</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,57, -158,13</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,5k</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">2,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hōnaunau</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,42, -155,91</td><td class="crd-td">1300AD-1896AD</td><td class="crd-td">2,5k</td><td class="crd-td">1,1k</td><td class="crd-td">680</td><td class="crd-td">2,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Nuʻuanu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,35, -157,83</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">960</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waiheʻe</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,93, -156,51</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">1,1k</td><td class="crd-td">580</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hālawa Valley</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">21,16, -156,74</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">820</td><td class="crd-td">190</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kawaihae</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">20,04, -155,83</td><td class="crd-td">1400AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">950</td><td class="crd-td">420</td><td class="crd-td">2,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kailua-Oʻahu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,4, -157,74</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">920</td><td class="crd-td">740</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Mānoa</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,33, -157,8</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">890</td><td class="crd-td">920</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Heʻeia</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,43, -157,81</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">890</td><td class="crd-td">840</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kahaluʻu-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,58, -155,97</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">820</td><td class="crd-td">310</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kula</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,76, -156,33</td><td class="crd-td">1300AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">1k</td><td class="crd-td">790</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Pearl City</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,4, -157,96</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">840</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kawainui</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,4, -157,76</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">760</td><td class="crd-td">390</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Keauhou-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,56, -155,96</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">780</td><td class="crd-td">350</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waikapū</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,86, -156,5</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">980</td><td class="crd-td">790</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kaʻawaloa</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,48, -155,94</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">720</td><td class="crd-td">120</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kaupō</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,64, -156,12</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2k</td><td class="crd-td">790</td><td class="crd-td">210</td><td class="crd-td">2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Spreckelsville</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,9, -156,42</td><td class="crd-td">1400AD-1898AD</td><td class="crd-td">490</td><td class="crd-td">190</td><td class="crd-td">1,6k</td><td class="crd-td">2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Waiʻanae</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,44, -158,19</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2k</td><td class="crd-td">820</td><td class="crd-td">980</td><td class="crd-td">2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kalihi</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,33, -157,87</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2k</td><td class="crd-td">840</td><td class="crd-td">1,6k</td><td class="crd-td">2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hanapēpē</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,91, -159,59</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">760</td><td class="crd-td">980</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kaunakakai</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">21,09, -157,02</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">920</td><td class="crd-td">680</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Nāpōʻopoʻo</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,47, -155,92</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">760</td><td class="crd-td">290</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waimānalo</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,35, -157,72</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">740</td><td class="crd-td">820</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kalapana</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,38, -155</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">720</td><td class="crd-td">320</td><td class="crd-td">1,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waipahu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,39, -158,01</td><td class="crd-td">1200AD-1898AD</td><td class="crd-td">1,2k</td><td class="crd-td">440</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kīpahulu</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,65, -156,06</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">740</td><td class="crd-td">410</td><td class="crd-td">1,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kōloa</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,9, -159,46</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">790</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k (1778AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in the Hawai'i and American Polynesia gazetteer ordered by peak population (n=218 total).</figcaption>
</figure>

## Sub-Regional Summary

Table \ref{tab:regsum-hawaii} aggregates catalogued nodal populations by island group at `1778AD`, `1832AD`, `1896AD` and `1898AD`. At `1778AD`, the 218 named centres sum to `279,1k` persons (`73,0%` of the `382,2k` regional total), reflecting comprehensive coverage across Hawaiian *ahupua'a* valleys and Samoan coastal villages [@kirch2010how; @schmitt1977historical].

<figure class="crd-table-figure" id="tab:regsum-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1778AD Nodes</th><th class="crd-th">1832AD Nodes</th><th class="crd-th">1896AD Nodes</th><th class="crd-th">1898AD Nodes</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hawai'i Island (Kohala, Kona, Ka'u, Puna, Hilo and Hamakua)</strong></td><td class="crd-td">66</td><td class="crd-td">90,2k</td><td class="crd-td">36k</td><td class="crd-td">37k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Maui Nui (Maui, Moloka'i, Lana'i and Kaho'olawe)</strong></td><td class="crd-td">61</td><td class="crd-td">74,5k</td><td class="crd-td">32,2k</td><td class="crd-td">26,4k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>O'ahu (Waikiki, Ewa, Ko'olau and Wai'anae)</strong></td><td class="crd-td">43</td><td class="crd-td">69,2k</td><td class="crd-td">30,9k</td><td class="crd-td">57,6k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Kaua'i and Ni'ihau</strong></td><td class="crd-td">30</td><td class="crd-td">37,7k</td><td class="crd-td">14,7k</td><td class="crd-td">19,2k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Eastern Samoa / American Polynesia (Tutuila, Aunu'u and Manu'a)</strong></td><td class="crd-td">18</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement count and summed nodal population by sub-region at 1778AD, 1832AD, 1896AD and 1898AD.</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded-hawaii} lists the 11 excluded duplicate entries recorded in `hawaii_and_american_polynesia_source_ledger.json5` together with their target canonical settlements.

<figure class="crd-table-figure" id="tab:excluded-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>'Ele'ele</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Hanapēpē-Hawaii.</td></tr>
<tr><td class="crd-td"><strong>Futiga</strong></td><td class="crd-td">American Samoa</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Pava'ia'i-American Samoa.</td></tr>
<tr><td class="crd-td"><strong>Ili'ili</strong></td><td class="crd-td">American Samoa</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Vaitogi-American Samoa.</td></tr>
<tr><td class="crd-td"><strong>Kapālama</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Kalihi-Hawaii.</td></tr>
<tr><td class="crd-td"><strong>Ke'ei</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Nāpō'opo'o-Hawaii.</td></tr>
<tr><td class="crd-td"><strong>Kealaikahiki</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Honokanai'a-Hawaii.</td></tr>
<tr><td class="crd-td"><strong>Kuli'ou'ou</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Niu-Hawaii.</td></tr>
<tr><td class="crd-td"><strong>Tula</strong></td><td class="crd-td">American Samoa</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Alao-American Samoa.</td></tr>
<tr><td class="crd-td"><strong>Wai'alae</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical Kaimukī-Hawaii.</td></tr>
<tr><td class="crd-td"><strong>Āmouli</strong></td><td class="crd-td">American Samoa</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Adjacent Hawaiian/Polynesian ahupua'a locality within 1,55 km consolidated under canonical 'Aoa-American Samoa.</td></tr>
<tr><td class="crd-td"><strong>Honolulu</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Honolulu' (Kirch (2010) Kou harbor chiefdom; Schmitt (1968, 1977) 1831-32 Missionary and 1853-1896 Hawaiian Kingdom Censuses of Honolulu; U.S. Census Office (1901)).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate candidates in the Hawai'i and American Polynesia source ledger (n=11, all consolidated into nearby canonical loci).</figcaption>
</figure>

# Limitations

Because pre-contact Hawaiian settlement formed continuous *ahupua'a* bands rather than nucleated European towns, point coordinates represent chiefdom and valley centroids anchored to USGS GNIS and GeoNames features rather than walled urban boundaries [@kirch2010how; @dye2011model]. On O'ahu, the 43 catalogued entries sum to `57,6k` in `1896AD`, exceeding the island census total of `40.205`, because Honolulu's municipal enumeration (`29.920` in `1896AD`) already includes inner Kona-O'ahu valleys (`Waikīkī`, `Kalihi`, `Nu'uanu`, `Mānoa` and `Makiki`) that remain tracked independently across pre-contact benchmarks. Similarly, Eastern Samoa entries anchor on `1836AD`, `1850AD`, `1890AD` and `1898AD` rather than the Hawaiian Kingdom censuses of `1832AD` and `1896AD`, and the 18 bay villages sum to `6,71k` in `1898AD` (`5,66k` sub-regional total) where overlapping Pago Pago Harbor communities share coastal basins [@kirch1993toaga; @uscensus1901twelfth].

# Sources

<div id="refs"></div>
