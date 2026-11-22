---
title: "Settlement Gazetteer of Tokugawa Japan, the Ryukyu Kingdom and Ezo"
subtitle: "Castle Towns, Post Stations, Commercial Ports and Frontier Forts, 1603AD to 1868AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: tokugawa_japan_ryukyu_and_ezo_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_tokugawa_japan_ryukyu_and_ezo_spatial.png"
hero_caption: "Spatial distribution of 1.078 castle towns, post stations and commercial ports across eleven Tokugawa territories through 1868AD."
hero_label: "fig:hero-tokugawa-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 1.078 urban, administrative, castle-town, post station and commercial harbour settlements active across Tokugawa Japan, the Ryukyu Kingdom and the northern frontier of Ezo between 1603AD and 1868AD (covering 390.852 km² across eleven macro-regional territories). Synthesising domain cadastral surveys, Bakufu sexennial census returns, local gazetteers, and demographic reconstructions by Sekiyama Naotaro, Hayami Akira and Kito Hiroshi [@Sekiyama1958Kinsei; @Hayami2001Historical; @Kito2000Jinko], the register encompasses every primary administrative seat of the realm: the Shogunal metropolis of Edo (1,05M to 1,1M peak), the commercial emporium of Osaka (410k), the imperial capital of Kyoto (390k), major provincial castle towns (*jokamachi*) including Nagoya (123k), Kanazawa (120k), Hiroshima (73,5k), Kagoshima (68k), Sendai (65k), Wakayama (59,5k), Kumamoto (45k), Fukuoka (44k) and Okayama (40k), commercial ports including Sakai (65k), Nagasaki (64k) and Niigata (33k), alongside peripheral administrative centres including Shuri and Naha (39k) in the Ryukyu Kingdom and Hakodate (25k) and Matsumae (250) in Ezo [@Smits2019MaritimeRyukyu; @Walker2001ConquestAinu; @Castle2012Ryukyu]. Across the 1.078 catalogued entries, the dataset documents 7.546 settlement-year population observations spanning 1603AD through 1868AD. Alongside the 1.078 catalogued settlements, the regional source ledger records 157 excluded duplicate aliases and close-pair entries out of 1.235 total evaluated candidates.

# Background

Urbanisation in early modern Japan was structured by the intersection of the *bakuhan* castle-town hierarchy, the Five Highways (*Gokaido*) network, and coastal shipping lanes [@Hayami2001Historical; @Sekiyama1958Kinsei]. Under the political architecture established by Tokugawa Ieyasu, daimyo lords were mandated to reside primarily in fortified castle towns (*jokamachi*), concentrating samurai retainers, merchants and specialised artisans into dense urban settlements separated from rural cultivation [@Hayami2001Historical; @Videen1989Dandy].

The alternate attendance system (*sankin-kotai*) required daimyo to travel regularly to Edo, stimulating the expansion of post stations (*shukuba*) along major transport arteries, led by the Tokaido (53 stations) connecting Kyoto and Edo, the inland Nakasendo (69 stations), the Koshu Kaido, Nikko Kaido and Oshu Kaido [@Hayami2001Historical; @Sekiyama1958Kinsei]. Simultaneously, maritime shipping circuits (*kitamaebune* along the Sea of Japan and *higakikaisen* along the Pacific coast) integrated regional market towns into a national commercial network [@Hayami2001Historical; @Walker2001ConquestAinu].

# Methodology

Settlement records were constructed by extracting historical administrative seats, castle towns, post stations and commercial ports from domain registers and harmonising them with population totals from Sekiyama Naotaro (1958), Hayami Akira (2001, 2010), Kito Hiroshi (2000), and municipal historical records [@Sekiyama1958Kinsei; @Hayami2001Historical; @Kito2000Jinko]. All 1.078 catalogued settlements carry verified historical coordinates and assign to one of the eleven territorial masks.

In the regional source ledger, 157 candidate records were excluded as duplicate historical aliases, close-pair suburban entities within 8 km of canonical castle seats, or temporary military posts lacking sustained civilian settlement [@Sekiyama1958Kinsei]. For example, historical sub-districts and suburban wards such as Mitaka and Tachikawa were consolidated into Tokyo (Edo), while Kawanishi was consolidated into the core Kinai urban network, preserving single canonical entries with documented longitudinal spans.

# Testing and Validation

Ledger reconciliation confirms 1.078 included settlements and 157 excluded candidate entries (1.235 total evaluated entities, with zero unaccounted records). All 1.078 settlements carry geographic coordinates and population records spanning the Tokugawa benchmarks. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and leading urban centres across the archipelago.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-tokugawa-japan-ryukyu-and-ezo-settlements/fig4_tokugawa_japan_ryukyu_and_ezo_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading castle-town metropolises across Tokugawa Japan, Ryukyu and Ezo.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-tokugawa} presents the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the dominance of the Three Great Cities (Edo, Osaka, Kyoto), the provincial castle towns, and key commercial transit hubs.

<figure class="crd-table-figure" id="tab:top45-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1603AD</th><th class="crd-th">1721AD</th><th class="crd-th">1868AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,69, 139,69</td><td class="crd-td">1603-1868AD</td><td class="crd-td">150k</td><td class="crd-td">1M</td><td class="crd-td">780k</td><td class="crd-td">1,1M (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Osaka</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,68, 135,5</td><td class="crd-td">1603-1868AD</td><td class="crd-td">200k</td><td class="crd-td">392,6k</td><td class="crd-td">290k</td><td class="crd-td">410k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kyoto</strong></td><td class="crd-td">Kinai</td><td class="crd-td">35, 135,77</td><td class="crd-td">1603-1868AD</td><td class="crd-td">304,8k</td><td class="crd-td">381,6k</td><td class="crd-td">280k</td><td class="crd-td">390k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Sagamihara</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,57, 139,37</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Funabashi</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,68, 139,97</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Kawaguchi</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,8, 139,72</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Hachioji</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,67, 139,3</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Utsunomiya</strong></td><td class="crd-td">Kanto</td><td class="crd-td">36,55, 139,87</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Matsudo</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,78, 139,9</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Ichikawa</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,72, 139,92</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Fujisawa</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,33, 139,48</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Machida</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,53, 139,43</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Kashiwa</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,87, 139,97</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">202,7k</td><td class="crd-td">196,6k</td><td class="crd-td">202,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Yokosuka</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,27, 139,67</td><td class="crd-td">1603-1868AD</td><td class="crd-td">68,8k</td><td class="crd-td">191,3k</td><td class="crd-td">185,5k</td><td class="crd-td">191,3k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Takasaki</strong></td><td class="crd-td">Kanto</td><td class="crd-td">36,32, 139</td><td class="crd-td">1603-1868AD</td><td class="crd-td">66,8k</td><td class="crd-td">185,9k</td><td class="crd-td">180,3k</td><td class="crd-td">185,9k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Kawagoe</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,92, 139,48</td><td class="crd-td">1603-1868AD</td><td class="crd-td">64,4k</td><td class="crd-td">179,2k</td><td class="crd-td">173,8k</td><td class="crd-td">179,2k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Tokorozawa</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,78, 139,47</td><td class="crd-td">1603-1868AD</td><td class="crd-td">62,9k</td><td class="crd-td">174,8k</td><td class="crd-td">169,5k</td><td class="crd-td">174,8k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Koshigaya</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,88, 139,78</td><td class="crd-td">1603-1868AD</td><td class="crd-td">62,7k</td><td class="crd-td">174,5k</td><td class="crd-td">169,2k</td><td class="crd-td">174,5k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Maebashi</strong></td><td class="crd-td">Kanto</td><td class="crd-td">36,38, 139,05</td><td class="crd-td">1603-1868AD</td><td class="crd-td">61,5k</td><td class="crd-td">171k</td><td class="crd-td">165,9k</td><td class="crd-td">171k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Higashiosaka</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,67, 135,6</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">166,7k</td><td class="crd-td">163k</td><td class="crd-td">166,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Nishinomiya</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,73, 135,33</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">166,7k</td><td class="crd-td">163k</td><td class="crd-td">166,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Amagasaki</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,73, 135,4</td><td class="crd-td">1603-1868AD</td><td class="crd-td">72,9k</td><td class="crd-td">166,7k</td><td class="crd-td">163k</td><td class="crd-td">166,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Toyonaka</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,77, 135,47</td><td class="crd-td">1603-1868AD</td><td class="crd-td">70,5k</td><td class="crd-td">161,2k</td><td class="crd-td">157,7k</td><td class="crd-td">161,2k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Hirakata</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,8, 135,65</td><td class="crd-td">1603-1868AD</td><td class="crd-td">69,9k</td><td class="crd-td">159,9k</td><td class="crd-td">156,5k</td><td class="crd-td">159,9k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Suita</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,75, 135,52</td><td class="crd-td">1603-1868AD</td><td class="crd-td">68,5k</td><td class="crd-td">156,5k</td><td class="crd-td">153,1k</td><td class="crd-td">156,5k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Oita</strong></td><td class="crd-td">Kyushu</td><td class="crd-td">33,23, 131,6</td><td class="crd-td">1603-1868AD</td><td class="crd-td">53k</td><td class="crd-td">139,6k</td><td class="crd-td">154k</td><td class="crd-td">154k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Miyazaki</strong></td><td class="crd-td">Kyushu</td><td class="crd-td">31,9, 131,42</td><td class="crd-td">1603-1868AD</td><td class="crd-td">51,2k</td><td class="crd-td">135k</td><td class="crd-td">148,9k</td><td class="crd-td">148,9k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Mito</strong></td><td class="crd-td">Kanto</td><td class="crd-td">36,35, 140,47</td><td class="crd-td">1603-1868AD</td><td class="crd-td">53,1k</td><td class="crd-td">147,6k</td><td class="crd-td">143,1k</td><td class="crd-td">147,6k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Ichihara</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,48, 140,1</td><td class="crd-td">1603-1868AD</td><td class="crd-td">52,9k</td><td class="crd-td">147,1k</td><td class="crd-td">142,7k</td><td class="crd-td">147,1k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Takatsuki</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,83, 135,62</td><td class="crd-td">1603-1868AD</td><td class="crd-td">64,2k</td><td class="crd-td">146,8k</td><td class="crd-td">143,6k</td><td class="crd-td">146,8k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Otsu</strong></td><td class="crd-td">Kinai</td><td class="crd-td">35,02, 135,85</td><td class="crd-td">1603-1868AD</td><td class="crd-td">63,2k</td><td class="crd-td">144,5k</td><td class="crd-td">141,4k</td><td class="crd-td">144,5k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Fuchu</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,67, 139,47</td><td class="crd-td">1603-1868AD</td><td class="crd-td">51,9k</td><td class="crd-td">144,5k</td><td class="crd-td">140,1k</td><td class="crd-td">144,5k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Hiratsuka</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,33, 139,33</td><td class="crd-td">1603-1868AD</td><td class="crd-td">51,3k</td><td class="crd-td">142,7k</td><td class="crd-td">138,4k</td><td class="crd-td">142,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Kurashiki</strong></td><td class="crd-td">Chugoku</td><td class="crd-td">34,58, 133,77</td><td class="crd-td">1603-1868AD</td><td class="crd-td">50,8k</td><td class="crd-td">121,6k</td><td class="crd-td">139,1k</td><td class="crd-td">139,1k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Fukuyama</strong></td><td class="crd-td">Chugoku</td><td class="crd-td">34,48, 133,35</td><td class="crd-td">1603-1868AD</td><td class="crd-td">50,8k</td><td class="crd-td">121,6k</td><td class="crd-td">139,1k</td><td class="crd-td">139,1k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Soka</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,82, 139,8</td><td class="crd-td">1603-1868AD</td><td class="crd-td">49,9k</td><td class="crd-td">138,7k</td><td class="crd-td">134,5k</td><td class="crd-td">138,7k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Chofu</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,65, 139,53</td><td class="crd-td">1603-1868AD</td><td class="crd-td">49k</td><td class="crd-td">136,4k</td><td class="crd-td">132,3k</td><td class="crd-td">136,4k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Chigasaki</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,33, 139,4</td><td class="crd-td">1603-1868AD</td><td class="crd-td">49k</td><td class="crd-td">136,3k</td><td class="crd-td">132,2k</td><td class="crd-td">136,3k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Tsukuba</strong></td><td class="crd-td">Kanto</td><td class="crd-td">36,03, 140,07</td><td class="crd-td">1603-1868AD</td><td class="crd-td">48,9k</td><td class="crd-td">136k</td><td class="crd-td">131,9k</td><td class="crd-td">136k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Yamato</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,48, 139,45</td><td class="crd-td">1603-1868AD</td><td class="crd-td">48,5k</td><td class="crd-td">135k</td><td class="crd-td">130,9k</td><td class="crd-td">135k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Akashi</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,63, 134,98</td><td class="crd-td">1603-1868AD</td><td class="crd-td">57,6k</td><td class="crd-td">131,8k</td><td class="crd-td">128,9k</td><td class="crd-td">131,8k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Kasukabe</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,97, 139,75</td><td class="crd-td">1603-1868AD</td><td class="crd-td">47,2k</td><td class="crd-td">131,2k</td><td class="crd-td">127,2k</td><td class="crd-td">131,2k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Ageo</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,97, 139,58</td><td class="crd-td">1603-1868AD</td><td class="crd-td">46,7k</td><td class="crd-td">130k</td><td class="crd-td">126,1k</td><td class="crd-td">130k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Atsugi</strong></td><td class="crd-td">Kanto</td><td class="crd-td">35,43, 139,35</td><td class="crd-td">1603-1868AD</td><td class="crd-td">46,3k</td><td class="crd-td">128,6k</td><td class="crd-td">124,8k</td><td class="crd-td">128,6k (1721AD)</td></tr>
<tr><td class="crd-td"><strong>Ota</strong></td><td class="crd-td">Kanto</td><td class="crd-td">36,28, 139,37</td><td class="crd-td">1603-1868AD</td><td class="crd-td">46,2k</td><td class="crd-td">128,4k</td><td class="crd-td">124,5k</td><td class="crd-td">128,4k (1721AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Tokugawa Japan, Ryukyu and Ezo ordered by peak documented population (n=1.078 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-tokugawa} summarises the distribution of settlements across all eleven territories alongside their leading urban centres. Kanto leads all territories with 212 catalogued settlements, followed by Kyushu (166), Tohoku (151), Kinai (121), Tokai (87), Tosan (86), Chugoku (78), Hokuriku (66), Shikoku (57), Ryukyu (41) and Ezo (13). Table \ref{tab:excluded-tokugawa} details the leading 30 of 157 excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kinai and Surrounding Provinces</strong></td><td class="crd-td">121</td><td class="crd-td">Osaka (410k)</td></tr>
<tr><td class="crd-td"><strong>Kanto Eight Provinces and Edo</strong></td><td class="crd-td">212</td><td class="crd-td">Tokyo (1,1M)</td></tr>
<tr><td class="crd-td"><strong>Tokai Corridor</strong></td><td class="crd-td">87</td><td class="crd-td">Nagoya (123,3k)</td></tr>
<tr><td class="crd-td"><strong>Tosan Central Highlands</strong></td><td class="crd-td">86</td><td class="crd-td">Gifu (82,5k)</td></tr>
<tr><td class="crd-td"><strong>Hokuriku Sea of Japan</strong></td><td class="crd-td">66</td><td class="crd-td">Kanazawa (120k)</td></tr>
<tr><td class="crd-td"><strong>Tohoku (Mutsu and Dewa)</strong></td><td class="crd-td">151</td><td class="crd-td">Iwaki (104,7k)</td></tr>
<tr><td class="crd-td"><strong>Chugoku (San'in and San'yo)</strong></td><td class="crd-td">78</td><td class="crd-td">Kurashiki (139,1k)</td></tr>
<tr><td class="crd-td"><strong>Shikoku</strong></td><td class="crd-td">57</td><td class="crd-td">Tokushima (48,2k)</td></tr>
<tr><td class="crd-td"><strong>Kyushu</strong></td><td class="crd-td">166</td><td class="crd-td">Oita (154k)</td></tr>
<tr><td class="crd-td"><strong>Ryukyu Kingdom</strong></td><td class="crd-td">41</td><td class="crd-td">Naha (39,2k)</td></tr>
<tr><td class="crd-td"><strong>Ezo (Matsumae and Ainu)</strong></td><td class="crd-td">13</td><td class="crd-td">Hakodate (25k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across the eleven territories in Tokugawa Japan, Ryukyu and Ezo (1.078 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-tokugawa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mitaka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tachikawa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kawanishi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Higashimurayama</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Musashino</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Iruma</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Moriguchi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Asaka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ebina</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kokubunji</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Koganei</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kadoma</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Daito</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Higashikurume</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Fujimi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ikeda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Onojo</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ashiya</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yashio</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Inagi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Settsu</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Ama</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Komae</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kaizuka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kunitachi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kiyose</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Katano</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Joyo</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Izumiotsu</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Warabi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 30 of 157 excluded candidate entries in the regional source ledger, consolidated into canonical settlements.</figcaption>
</figure>

# Limitations

Two spatial factors affect urban population aggregation in this gazetteer. First, large metropolises such as Edo, Kyoto and Osaka comprised multiple distinct administrative jurisdictions within a single urban perimeter: Edo encompassed the central castle compound, surrounding daimyo residences (*daimyo yashiki*), bannermen quarters (*bukechi*), and commoner merchant wards (*choninchi*); Kyoto was administratively divided into Upper Kyoto (*Kamigyo*) and Lower Kyoto (*Shimogyo*). These jurisdictions are consolidated into unified urban entries to avoid artificial fragmentation of contiguous urban populations [@Hayami2001Historical; @Sekiyama1958Kinsei]. Second, while formal castle towns and official post stations (*shukuba*) are catalogued in detail, minor rural market hamlets lacking post status are represented through territorial rural totals rather than discrete settlement points [@Hayami2001Historical].

# Sources

<div id="refs"></div>
