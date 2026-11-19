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
hero_caption: "Spatial distribution of 216 Polynesian royal centres, ahupua'a valleys and bay villages mapped onto the five CENTAUR-II areal masks."
hero_label: "fig:hero-hawaii-and-american-polynesia"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the 216 catalogued settlements compiled for Hawai'i and American Polynesia under CENTAUR-II from 1000BC to 1898AD (16.600 km²). Drawn from archaeological valley surveys, royal court chronologies, USGS Geographic Names Information System (GNIS) and GeoNames coordinate registers and Hawaiian Kingdom censuses [@kirch2010how; @schmitt1968demographic; @schmitt1977historical], the catalogue records 65 centres on Hawai'i Island, 61 in Maui Nui, 45 on O'ahu, 31 on Kaua'i-Ni'ihau and 14 across Tutuila and Manu'a in Eastern Samoa, spanning 1.587 temporal benchmark observations (mean 7,35 observations per locus; all 216 carrying at least three anchors). At the 1778AD pre-contact peak, the largest concentrated settlements were Waikīkī (8,5k), Waipi'o Valley (6,8k), Kailua-Kona (6,5k), Lāhainā (6,2k), Hilo (5,8k) and Wailuku (4,9k) [@kirch2010how]. During the nineteenth century, port-driven nucleation shifted urban primacy to Honolulu (29,92k in 1896AD and 34,2k in 1898AD), while Pago Pago (1,22k in 1898AD) and Leone (870 in 1898AD; 1,05k at contact) anchored settlement in Eastern Samoa [@schmitt1977historical; @uscensus1901twelfth]. Out of 477 total candidates in the regional source ledger, 261 duplicate-alias candidates within 2 km were excluded to prevent close-pair double counting.

# Background

Unlike continental urban grids, pre-contact Polynesian population distributed across radially bounded *ahupua'a* catchment strips in Hawai'i and bay-centred *nu'u* villages in Samoa [@kirch2010how; @rieth2008radiocarbon]. High-density clusters formed where irrigated wetland *lo'i* plains met protected reef or fishpond coastlines, or where high chiefs (*ali'i nui*) maintained seasonal royal courts such as Waikīkī, Lāhainā, Kailua-Kona, Hōnaunau and Waipi'o Valley [@kirch2010how; @ladefoged2009opportunities]. Following Western contact in 1778AD, whaling, sandalwood trade and sugar-export infrastructure redirected settlement away from dryland leeward districts toward deep-water harbours at Honolulu, Lāhainā, Hilo and Pago Pago [@schmitt1968demographic].

# Methodology

Every candidate locus in the regional literature was evaluated against the regional source ledger and assigned exclusively to CENTAUR provenance. All 216 included Hawaiian and American Samoan loci were re-anchored onto USGS GNIS and GeoNames WGS84 decimal coordinates and mapped to the five five-arcminute areal masks using a 12-pixel coastal snap radius. Two hundred and sixty-one duplicate coordinate or alias candidates (230 across Hawai'i, including coastal and upland localities such as 'Ele'ele, Ke'ei, Kealaikahiki, Kuli'ou'ou and Wai'alae, alongside 31 across Eastern Samoa such as Futiga, Ili'ili, Tula and Āmouli) lying within 2 km of a canonical valley, bay or port centre were consolidated into their parent records and marked excluded in the source ledger.

# Testing and Validation

Ledger reconciliation confirms 216 included settlements and 261 excluded candidates (477 total candidates, 0 unaccounted), covering 1.587 benchmark observations across 1000BC to 1898AD. All 216 records map cleanly onto their host island masks (18,97 N to 22,22 N and 154,85 W to 160,23 W in Hawai'i; 14,26 S to 14,35 S and 170,58 W to 170,83 W in Eastern Samoa) with non-zero integer population counts across each locus's active span. Figure \ref{fig:sett-hawaii} presents the rank-size curve and the top fifteen settlements across the gazetteer.

<figure class="crd-figure-block" id="fig:sett-hawaii">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hawaii-and-american-polynesia-settlements/fig4_hawaii_and_american_polynesia_settlements.png" alt="fig:sett-hawaii" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen settlement peaks across the 216 catalogued centres of Hawai'i and American Polynesia.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:gazetteer-hawaii} lists the top 45 settlements by peak population from the 216-entry gazetteer, reporting USGS GNIS and GeoNames coordinates, island group, occupation span and benchmark estimates across 1778AD, 1832AD and 1896AD.

<figure class="crd-table-figure" id="tab:gazetteer-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Island Group</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1778AD</th><th class="crd-th">1832AD</th><th class="crd-th">1896AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Honolulu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,31, -157,86</td><td class="crd-td">1100AD-1898AD</td><td class="crd-td">2,8k</td><td class="crd-td">6,2k</td><td class="crd-td">29,9k</td><td class="crd-td">34,2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Waikīkī</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,28, -157,83</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">8,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td><td class="crd-td">8,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waipi'o Valley</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">20,11, -155,6</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">6,8k</td><td class="crd-td">1,8k</td><td class="crd-td">480</td><td class="crd-td">6,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kailua-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,64, -156</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">6,5k</td><td class="crd-td">3,2k</td><td class="crd-td">1,4k</td><td class="crd-td">6,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Lāhainā</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,87, -156,68</td><td class="crd-td">1100AD-1898AD</td><td class="crd-td">6,2k</td><td class="crd-td">4,2k</td><td class="crd-td">3k</td><td class="crd-td">6,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hilo</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,72, -155,09</td><td class="crd-td">1000AD-1898AD</td><td class="crd-td">5,8k</td><td class="crd-td">4,1k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Wailuku</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,89, -156,5</td><td class="crd-td">1200AD-1898AD</td><td class="crd-td">4,9k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">4,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hanalei Valley</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">22,2, -159,5</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">3,8k</td><td class="crd-td">1,4k</td><td class="crd-td">940</td><td class="crd-td">3,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hāna</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,79, -156,04</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,2k</td><td class="crd-td">3,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kealakekua</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,52, -155,92</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,4k</td><td class="crd-td">940</td><td class="crd-td">3,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Wailua-Kaua'i</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">22,05, -159,34</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,2k</td><td class="crd-td">680</td><td class="crd-td">3,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Līhu'e</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,98, -159,37</td><td class="crd-td">1200AD-1898AD</td><td class="crd-td">2,6k</td><td class="crd-td">1,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kāneʻohe</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,41, -157,8</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,1k</td><td class="crd-td">3k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Wai'ōhinu</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,07, -155,61</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,9k</td><td class="crd-td">1,4k</td><td class="crd-td">750</td><td class="crd-td">2,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waimea-Kauaʻi</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,96, -159,67</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,8k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waiākea</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,71, -155,07</td><td class="crd-td">1000AD-1898AD</td><td class="crd-td">2,8k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Honouliuli</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,36, -158,03</td><td class="crd-td">1100AD-1898AD</td><td class="crd-td">2,5k</td><td class="crd-td">960</td><td class="crd-td">1,7k</td><td class="crd-td">2,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waialua</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,57, -158,13</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,5k</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">2,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hōnaunau</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,42, -155,91</td><td class="crd-td">1300AD-1896AD</td><td class="crd-td">2,5k</td><td class="crd-td">1,1k</td><td class="crd-td">680</td><td class="crd-td">2,5k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Nuʻuanu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,35, -157,83</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">960</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waihe'e</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,93, -156,51</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">1,1k</td><td class="crd-td">580</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hālawa Valley</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">21,16, -156,74</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">820</td><td class="crd-td">190</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kawaihae</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">20,04, -155,83</td><td class="crd-td">1400AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">950</td><td class="crd-td">420</td><td class="crd-td">2,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kailua-O'ahu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,4, -157,74</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">920</td><td class="crd-td">740</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Mānoa</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,33, -157,8</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,4k</td><td class="crd-td">890</td><td class="crd-td">920</td><td class="crd-td">2,4k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>He'eia</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,43, -157,81</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">890</td><td class="crd-td">840</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kahalu'u-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,58, -155,97</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">820</td><td class="crd-td">310</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kula</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,76, -156,33</td><td class="crd-td">1300AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">1k</td><td class="crd-td">790</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Pearl City</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,4, -157,96</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2,2k</td><td class="crd-td">840</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kawainui</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,4, -157,76</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">760</td><td class="crd-td">390</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Keauhou-Kona</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,56, -155,96</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">780</td><td class="crd-td">350</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waikapū</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,86, -156,5</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">980</td><td class="crd-td">790</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kaʻawaloa</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,54, -155,96</td><td class="crd-td">1200AD-1896AD</td><td class="crd-td">2,1k</td><td class="crd-td">720</td><td class="crd-td">120</td><td class="crd-td">2,1k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kaupō</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,64, -156,12</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2k</td><td class="crd-td">790</td><td class="crd-td">210</td><td class="crd-td">2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Spreckelsville</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,9, -156,42</td><td class="crd-td">1400AD-1898AD</td><td class="crd-td">490</td><td class="crd-td">190</td><td class="crd-td">1,6k</td><td class="crd-td">2k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Waiʻanae</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,44, -158,19</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2k</td><td class="crd-td">820</td><td class="crd-td">980</td><td class="crd-td">2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kalihi</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,33, -157,87</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">2k</td><td class="crd-td">840</td><td class="crd-td">1,6k</td><td class="crd-td">2k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Hanapēpē</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,91, -159,59</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">760</td><td class="crd-td">980</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kaunakakai</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">21,09, -157,02</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">920</td><td class="crd-td">680</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waimānalo</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,35, -157,72</td><td class="crd-td">900AD-1896AD</td><td class="crd-td">1,9k</td><td class="crd-td">740</td><td class="crd-td">820</td><td class="crd-td">1,9k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kalapana</strong></td><td class="crd-td">Hawai'i Island</td><td class="crd-td">19,38, -155</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">720</td><td class="crd-td">320</td><td class="crd-td">1,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Waipahu</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,39, -158,01</td><td class="crd-td">1200AD-1898AD</td><td class="crd-td">1,2k</td><td class="crd-td">440</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Kīpahulu</strong></td><td class="crd-td">Maui Nui</td><td class="crd-td">20,65, -156,06</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">740</td><td class="crd-td">410</td><td class="crd-td">1,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Kōloa</strong></td><td class="crd-td">Kaua'i and Ni'ihau</td><td class="crd-td">21,9, -159,46</td><td class="crd-td">1000AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">790</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Moanalua</strong></td><td class="crd-td">O'ahu</td><td class="crd-td">21,37, -157,89</td><td class="crd-td">1100AD-1896AD</td><td class="crd-td">1,8k</td><td class="crd-td">720</td><td class="crd-td">680</td><td class="crd-td">1,8k (1778AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in the Hawai'i and American Polynesia gazetteer ordered by peak population (n=216 total).</figcaption>
</figure>

## Sub-Regional Summary

Table \ref{tab:regsum-hawaii} aggregates catalogued nodal populations by island group at 1778AD, 1832AD, 1896AD and 1898AD. At 1778AD, the 216 named centres sum to 280,2k persons (73,3% of the 382,2k regional total), reflecting wide coverage across Hawaiian *ahupua'a* valleys and Samoan coastal villages [@kirch2010how; @schmitt1977historical].

<figure class="crd-table-figure" id="tab:regsum-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">1778AD Nodes</th><th class="crd-th">1832AD Nodes</th><th class="crd-th">1896AD Nodes</th><th class="crd-th">1898AD Nodes</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hawai'i Island (Kohala, Kona, Ka'u, Puna, Hilo and Hamakua)</strong></td><td class="crd-td">65</td><td class="crd-td">88,2k</td><td class="crd-td">35,2k</td><td class="crd-td">36,7k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Maui Nui (Maui, Moloka'i, Lana'i and Kaho'olawe)</strong></td><td class="crd-td">61</td><td class="crd-td">74,5k</td><td class="crd-td">32,2k</td><td class="crd-td">26,4k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>O'ahu (Waikiki, Ewa, Ko'olau and Wai'anae)</strong></td><td class="crd-td">45</td><td class="crd-td">71,8k</td><td class="crd-td">32,1k</td><td class="crd-td">59,6k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Kaua'i and Ni'ihau</strong></td><td class="crd-td">31</td><td class="crd-td">39,1k</td><td class="crd-td">15,2k</td><td class="crd-td">19,5k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Eastern Samoa and American Polynesia (Tutuila, Aunu'u and Manu'a)</strong></td><td class="crd-td">14</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement count and summed nodal population by sub-region at 1778AD, 1832AD, 1896AD and 1898AD.</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded-hawaii} lists the first 30 representative duplicate-alias entries out of 261 excluded candidates recorded in the regional source ledger together with their target canonical settlements.

<figure class="crd-table-figure" id="tab:excluded-hawaii">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Reason</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Honolulu</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Honolulu' (Kirch (2010) Kou harbor chiefdom; Schmitt (1968, 1977) 1831-32 Missionary and 1853-1896 Hawaiian Kingdom Censuses of Honolulu; U.S. Census Office (1901)).</td></tr>
<tr><td class="crd-td"><strong>Waikīkī</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waikīkī' (Kirch (2010) Kamehameha I &amp; Kākuhihewa royal court, Helumoa &amp; Ulukou lo'i-loko i'a complex; Schmitt (1968, 1977) Kona-O'ahu Kingdom Censuses).</td></tr>
<tr><td class="crd-td"><strong>Waipi'o Valley</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waipi'o Valley' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lāhainā</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lāhainā' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Hilo</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Hilo' (Kirch (1985, 2010) Hilo Bay chiefdom &amp; wetland core; Schmitt (1968, 1977) 1831-32 Missionary and 1853-1896 Hawaiian Kingdom Censuses (Hilo District); U.S. Census Office (1901)).</td></tr>
<tr><td class="crd-td"><strong>Waiākea</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waiākea' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kailua-Kona</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kailua-Kona' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Wailuku</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Wailuku' (Kirch (2010) Kahekili royal capital &amp; Kepaniwai/'Īao wetland complex; Schmitt (1968, 1977) Wailuku District 1831-1896 Kingdom Censuses).</td></tr>
<tr><td class="crd-td"><strong>Hanalei Valley</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Hanalei Valley' (Kirch (1985, 2010) &amp; Ladefoged et al. (2009) Hanalei-Wai'oli monumental lo'i kalo floodplain; Dye (2011); Schmitt (1968, 1977)).</td></tr>
<tr><td class="crd-td"><strong>Hāna</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Hāna' (Kirch (2010) Ka'uiki fortress &amp; Hāna East Maui chiefdom; Schmitt (1968, 1977) Hāna 1831-32 Missionary and 1853-1896 Kingdom Censuses).</td></tr>
<tr><td class="crd-td"><strong>Wailua-Kaua'i</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Wailua-Kaua'i' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Līhu'e</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Līhu'e' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Waimea-Kaua'i</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waimea-Kauaʻi' (Kirch (2010) Kaumuali'i royal capital, Kīkī a Ola (Menehune Ditch) &amp; Pa'ula'ula; Schmitt (1968, 1977) Waimea-Kaua'i 1831-1896 Censuses).</td></tr>
<tr><td class="crd-td"><strong>Honouliuli</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Honouliuli' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Hālawa Valley</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Hālawa Valley' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kealakekua</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kealakekua' (Kirch (2010) Kealakekua Bay royal complex &amp; Hikiau Heiau; Ladefoged et al. (2009) Kona Field System; Schmitt (1968, 1977) South Kona Censuses).</td></tr>
<tr><td class="crd-td"><strong>Kāne'ohe</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kāneʻohe' (Kirch (2010) Kāne'ohe chiefdom &amp; fishpond bay; Ladefoged et al. (2009); Schmitt (1968, 1977) Ko'olaupoko 1831-1896 Censuses).</td></tr>
<tr><td class="crd-td"><strong>Wai'ōhinu</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Wai'ōhinu' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Waialua</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waialua' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Waihe'e</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waihe'e' (Kirch (2010) Nā Wai 'Ehā (Four Great Waters) irrigated taro core; Ladefoged et al. (2009); Schmitt (1968, 1977) Wailuku Kingdom Censuses).</td></tr>
<tr><td class="crd-td"><strong>Nu'uanu</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Nuʻuanu' (Kirch (1985, 2010) Nu'uanu irrigated lo'i kalo &amp; royal valley; Ladefoged et al. (2009); Schmitt (1968, 1977) Kona-O'ahu Censuses).</td></tr>
<tr><td class="crd-td"><strong>Kawaihae</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kawaihae' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kailua-O'ahu</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kailua-O'ahu' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Mānoa</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Mānoa' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pearl City</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Pearl City' (Kirch (2010) &amp; Kikuchi (1976) Pu'uloa/Mānana Pearl Harbor loko i'a fishpond basin; Schmitt (1968, 1977) 'Ewa District Censuses).</td></tr>
<tr><td class="crd-td"><strong>He'eia</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'He'eia' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Waikapū</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waikapū' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Wai'anae</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Waiʻanae' (Kirch (2010) Wai'anae Valley lo'i &amp; Kū'īlioloa Heiau; Schmitt (1968, 1977) Wai'anae District 1831-1896 Kingdom Censuses).</td></tr>
<tr><td class="crd-td"><strong>Kaupō</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kaupō' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kalihi</strong></td><td class="crd-td">Hawaii</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kalihi' (Kirch (2010) &amp; Ladefoged et al. (2009) Kalihi lo'i valley &amp; Keehi fishponds; Schmitt (1968, 1977) Kona-O'ahu Kingdom Censuses).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Representative excluded duplicate candidates in the Hawai'i and American Polynesia source ledger (first 30 of n=261, all consolidated within 2 km into canonical loci).</figcaption>
</figure>

# Limitations

Because pre-contact Hawaiian settlement formed continuous *ahupua'a* bands rather than nucleated European towns, point coordinates represent chiefdom and valley centroids anchored to USGS GNIS and GeoNames features rather than walled urban boundaries [@kirch2010how; @dye2011model]. On O'ahu, the 45 catalogued entries sum to 59,58k in 1896AD, exceeding the island census total of 40.205, because Honolulu's municipal enumeration (29.920 in 1896AD) already includes inner Kona-O'ahu valleys (Waikīkī, Kalihi, Nu'uanu, Mānoa and Makiki) that remain tracked independently across pre-contact benchmarks. Similarly, Eastern Samoa entries anchor on 1836AD, 1850AD, 1890AD and 1898AD rather than the Hawaiian Kingdom censuses of 1832AD and 1896AD, and the 14 bay villages sum to 5,85k in 1898AD (5,66k sub-regional total) where overlapping Pago Pago Harbor communities share coastal basins [@kirch1993toaga; @uscensus1901twelfth].

# Sources

<div id="refs"></div>
