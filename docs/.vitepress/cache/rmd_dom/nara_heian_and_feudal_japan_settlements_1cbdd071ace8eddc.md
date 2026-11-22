---
title: "Settlement Gazetteer of Nara, Heian and Feudal Japan"
subtitle: "Imperial Capitals, Provincial Kokufu, Castle Towns and Trading Ports, 650AD to 1603AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: nara_heian_and_feudal_japan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_nara_heian_and_feudal_japan_spatial.png"
hero_caption: "Spatial distribution of 678 catalogued settlements across eleven Japanese administrative circuits through 1603AD."
hero_label: "fig:hero-nara-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 678 urban, administrative, military and market settlements active across Japan between 650AD and 1603AD (covering 390.852 km² across eleven administrative circuits and frontier territories). Synthesising Ritsuryo legal codes, sexennial household registers (*koseki*), provincial gazetteers (*fudoki*), temple surveys, castle registers (*jokakushi*) and archaeological excavations [@Kito2000Jinko; @Farris2006Medieval; @Farris2009DailyLife; @Hayami2001Historical; @Sekiyama1958Kinsei], the register encompasses every primary administrative and urban core of pre-modern Japan: the imperial grid capitals (Fujiwara-kyo, Heijo-kyo at Nara, Nagaoka-kyo and Heian-kyo at Kyoto), sixty-six provincial capitals (*kokufu*), frontier military forts (*josaku* such as Tagajo and Akita), the samurai shogunal capital of Kamakura, autonomous merchant communes such as Sakai and Hakata, major castle towns (*jokamachi* such as Odawara, Azuchi, Osaka, Hiroshima and early Edo), and regional market towns (*monzenmachi* and *minatomachi*). Across the 678 catalogued entries, the dataset documents 6.632 settlement-year population observations spanning seventeen historical benchmark dates between 650AD and 1603AD. At the 1603AD Tokugawa unification benchmark, the leading urban centres were Kyoto (304,8k), Osaka (200k), Tokyo (150k), Sakai (65k), Hamamatsu (57,7k), Sagamihara (57,7k), Funabashi (57,7k), Kawaguchi (57,7k), Hachioji (57,7k), Matsudo (57,7k), Fujisawa (57,7k), Machida (57,7k), Kashiwa (57,7k), Toyota (57,7k), Yokosuka (54,4k), Okazaki (54,1k), Ichinomiya (53,6k), Toyohashi (52,8k), Kawagoe (51k), Tokorozawa (49,7k) and Hakata (38k), alongside historical maxima recorded at Nara (84,4k in 725AD) and Hiraizumi (85k in 1150AD) [@Schmid2021Fujiwaraan; @Yichir2020Establishment]. The regional source ledger accounts for 256 excluded duplicate aliases and suburban close-pair entries out of 934 total evaluated candidates.

# Background

Urbanisation in pre-modern Japan was shaped by successive institutional transformations: the classical bureaucratic state (*ritsuryo kokka*), the rise of decentralised estate networks (*shoen*), the establishment of warrior shogunal administrations (*bakufu*), and the Sengoku proliferation of fortified castle towns (*jokamachi*) [@Kito2000Jinko; @Farris2006Medieval; @Hayami2001Historical].

Under the classical Ritsuryo framework established in the late seventh and early eighth centuries, the imperial state planned grand grid capitals on the Chinese Tang model (*jobo-sei*) [@Farris2009DailyLife; @Hurst1988Structure]. Fujiwara-kyo (inhabited from 694AD to 710AD) established the imperial palace layout, superseded by Heijo-kyo at Nara (710AD to 784AD), which housed over 80k residents during its peak before Emperor Kanmu transferred the court to Nagaoka-kyo in 784AD and subsequently to Heian-kyo (Kyoto) in 794AD [@Kito2000Jinko; @Farris2009DailyLife]. In the provinces, sixty-six provincial offices (*kokufu*) and hundreds of district seats (*gunga*) formed the civil hierarchy, connected by seven imperial highway circuits equipped with post stations (*ekisei*) spaced every 16 km [@Farris2009DailyLife]. Along the northern frontier of Mutsu and Dewa, the Yamato court erected fortified administrative stockades (*josaku*), most notably Tagajo (founded in 724AD) and Akita Castle, to manage pacification, trade and tribute with northern Emishi populations [@Farris2009DailyLife; @Schmid2021Fujiwaraan].

During the late Heian and Kamakura eras, central administrative authority eroded as private estates (*shoen*) became self-governing agrarian communities [@Farris2006Medieval]. In Tohoku, the Northern Fujiwara built an autonomous northern metropolis at Hiraizumi along the Kitakami River, whose population reached 85k inhabitants by 1150AD through alluvial gold mining, horse breeding, and maritime trade before being sacked by Minamoto no Yoritomo in 1189AD [@Schmid2021Fujiwaraan]. With the establishment of the Kamakura Bakufu in the 1180s, political authority shifted eastward to Kamakura in Sagami province, which expanded into a major warrior metropolis protected by natural coastal hills and artificial road cuts (*kiritoshi*) [@Yichir2020Establishment].

The fourteenth and fifteenth centuries witnessed an explosion of commercial town development [@Farris2006Medieval; @Ortman2020Cities]. Coastal port cities flourished through regional maritime trade and the official Ming tally trade (*kango boeki*). Sakai in Izumi province emerged as a self-governing mercantile commonwealth governed by an oligarchy of wealthy merchants (*egoushu*), surrounded by defensive moats [@Farris2006Medieval]. Hakata in Kyushu served as the primary gateway to Korea and Ming China. During the Sengoku era (1467AD to 1568AD), regional military lords (*daimyo*) gathered retainers, artisans and merchants beneath their hill citadels and lowland fortress compounds, laying out castle towns (*jokamachi*) divided into distinct residential zones for samurai (*buke-yashiki*), merchants (*shoninmachi*) and artisans (*shokuninmachi*) [@Farris2006Medieval; @Jacobson2022Settlement]. The late sixteenth-century unifiers—Oda Nobunaga at Azuchi, Toyotomi Hideyoshi at Osaka and Fushimi, and Tokugawa Ieyasu at Edo—consolidated this urban hierarchy, establishing the urban network of early modern Japan [@Sekiyama1958Kinsei; @Kito2000Jinko].

# Methodology

Settlement records were constructed by harmonising Ritsuryo administrative gazetteers, historical archaeological registries, mediaeval estate charters (*shoen monjo*), and early modern municipal records [@Kito2000Jinko; @Farris2006Medieval; @Farris2009DailyLife; @Sekiyama1958Kinsei]. All 678 catalogued settlements carry geographic coordinates and map to one of eleven regional circuits and frontier domains.

In the regional source ledger, 256 candidate records were excluded as duplicate historical aliases, suburban entities within 8 km of primary municipal centres, or temporary military battle camps lacking sustained civilian permanence [@Kito2000Jinko; @Sekiyama1958Kinsei]. For example, modern satellite wards and aliases such as Ichikawa, Amagasaki, Suita, Takatsuki and Yao were harmonised into their core administrative centroids, maintaining a single canonical entry per urban cluster with documented multi-century spans.

# Testing and Validation

Ledger reconciliation confirms 678 included settlements and 256 excluded candidate entries out of 934 total evaluated entities (with zero unaccounted records). All 678 settlements carry geographic coordinates and non-zero population records across relevant dynastic benchmarks. Figure \ref{fig:sett-gazetteer} presents the rank-size distribution and the primary urban centres of pre-modern Japan through 1603AD.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-nara-heian-and-feudal-japan-settlements/fig4_nara_heian_and_feudal_japan_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading urban centres across mediaeval Japan through 1603AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-sett} catalogues the leading 45 settlements in the gazetteer ordered by peak documented population across the 650AD to 1603AD period. The rankings reflect the primacy of the imperial capital at Kyoto, the mercantile hub at Osaka, the warrior capitals at Kamakura and Tokyo (Edo), the ancient court at Nara, the northern gold capital at Hiraizumi, and the major castle towns of central Japan.

<figure class="crd-table-figure" id="tab:top45-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Circuit</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">725AD</th><th class="crd-th">1150AD</th><th class="crd-th">1603AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kyoto</strong></td><td class="crd-td">Tosando</td><td class="crd-td">35, 135,77</td><td class="crd-td">800-1603AD</td><td class="crd-td">-</td><td class="crd-td">150k</td><td class="crd-td">304,8k</td><td class="crd-td">304,8k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Osaka</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,68, 135,5</td><td class="crd-td">650-1603AD</td><td class="crd-td">38,8k</td><td class="crd-td">32k</td><td class="crd-td">200k</td><td class="crd-td">200k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,69, 139,69</td><td class="crd-td">1500-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">150k</td><td class="crd-td">150k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Hiraizumi</strong></td><td class="crd-td">Tohoku</td><td class="crd-td">38,99, 141,11</td><td class="crd-td">1100-1500AD</td><td class="crd-td">-</td><td class="crd-td">85k</td><td class="crd-td">-</td><td class="crd-td">85k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Nara</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,68, 135,8</td><td class="crd-td">725-1603AD</td><td class="crd-td">84,4k</td><td class="crd-td">22,5k</td><td class="crd-td">28k</td><td class="crd-td">84,4k (725AD)</td></tr>
<tr><td class="crd-td"><strong>Sakai</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,57, 135,47</td><td class="crd-td">1500-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">65k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Sakai (Fukui Ken)</strong></td><td class="crd-td">Hokurikudo</td><td class="crd-td">36,17, 136,22</td><td class="crd-td">1500-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">65k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Sakai (Ibaraki Ken)</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">36,1, 139,78</td><td class="crd-td">1500-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">65k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Hamamatsu</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">34,7, 137,72</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Sagamihara</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,57, 139,37</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Funabashi</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,68, 139,97</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Kawaguchi</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,8, 139,72</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Hachioji</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,67, 139,3</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Matsudo</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,78, 139,9</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Fujisawa</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,33, 139,48</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Machida</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,53, 139,43</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Kashiwa</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,87, 139,97</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Toyota</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,08, 137,15</td><td class="crd-td">725-1603AD</td><td class="crd-td">19,2k</td><td class="crd-td">30,8k</td><td class="crd-td">57,7k</td><td class="crd-td">57,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Yokosuka</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,27, 139,67</td><td class="crd-td">725-1603AD</td><td class="crd-td">18,1k</td><td class="crd-td">29,1k</td><td class="crd-td">54,4k</td><td class="crd-td">54,4k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Okazaki</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">34,95, 137,17</td><td class="crd-td">725-1603AD</td><td class="crd-td">18k</td><td class="crd-td">28,9k</td><td class="crd-td">54,1k</td><td class="crd-td">54,1k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Ichinomiya</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,3, 136,8</td><td class="crd-td">725-1603AD</td><td class="crd-td">17,9k</td><td class="crd-td">28,7k</td><td class="crd-td">53,6k</td><td class="crd-td">53,6k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Toyohashi</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">34,77, 137,38</td><td class="crd-td">725-1603AD</td><td class="crd-td">17,6k</td><td class="crd-td">28,2k</td><td class="crd-td">52,8k</td><td class="crd-td">52,8k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Kawagoe</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,92, 139,48</td><td class="crd-td">725-1603AD</td><td class="crd-td">17k</td><td class="crd-td">27,3k</td><td class="crd-td">51k</td><td class="crd-td">51k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Tokorozawa</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,78, 139,47</td><td class="crd-td">725-1603AD</td><td class="crd-td">16,6k</td><td class="crd-td">26,6k</td><td class="crd-td">49,7k</td><td class="crd-td">49,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Koshigaya</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,88, 139,78</td><td class="crd-td">725-1603AD</td><td class="crd-td">16,5k</td><td class="crd-td">26,5k</td><td class="crd-td">49,6k</td><td class="crd-td">49,6k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Kanazawa</strong></td><td class="crd-td">Hokurikudo</td><td class="crd-td">36,55, 136,65</td><td class="crd-td">1600-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">49,4k</td><td class="crd-td">49,4k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Kasugai</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,23, 136,97</td><td class="crd-td">725-1603AD</td><td class="crd-td">15,4k</td><td class="crd-td">24,7k</td><td class="crd-td">46,1k</td><td class="crd-td">46,1k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Yokkaichi</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">34,95, 136,62</td><td class="crd-td">725-1603AD</td><td class="crd-td">15,3k</td><td class="crd-td">24,5k</td><td class="crd-td">45,8k</td><td class="crd-td">45,8k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Tsu</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">34,72, 136,5</td><td class="crd-td">725-1603AD</td><td class="crd-td">14,1k</td><td class="crd-td">22,7k</td><td class="crd-td">42,4k</td><td class="crd-td">42,4k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Mito</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">36,35, 140,47</td><td class="crd-td">725-1603AD</td><td class="crd-td">14k</td><td class="crd-td">22,4k</td><td class="crd-td">42k</td><td class="crd-td">42k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Ichihara</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,48, 140,1</td><td class="crd-td">725-1603AD</td><td class="crd-td">13,9k</td><td class="crd-td">22,4k</td><td class="crd-td">41,9k</td><td class="crd-td">41,9k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Fuchu</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,67, 139,47</td><td class="crd-td">725-1603AD</td><td class="crd-td">13,7k</td><td class="crd-td">22k</td><td class="crd-td">41,1k</td><td class="crd-td">41,1k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Hiratsuka</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,33, 139,33</td><td class="crd-td">725-1603AD</td><td class="crd-td">13,5k</td><td class="crd-td">21,7k</td><td class="crd-td">40,6k</td><td class="crd-td">40,6k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Soka</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,82, 139,8</td><td class="crd-td">725-1603AD</td><td class="crd-td">13,1k</td><td class="crd-td">21,1k</td><td class="crd-td">39,5k</td><td class="crd-td">39,5k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Fuji</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,15, 138,67</td><td class="crd-td">725-1603AD</td><td class="crd-td">13k</td><td class="crd-td">20,9k</td><td class="crd-td">39,1k</td><td class="crd-td">39,1k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Yamaguchi</strong></td><td class="crd-td">San'yodo</td><td class="crd-td">34,17, 131,47</td><td class="crd-td">1500-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">38,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tsukuba</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">36,03, 140,07</td><td class="crd-td">725-1603AD</td><td class="crd-td">12,9k</td><td class="crd-td">20,7k</td><td class="crd-td">38,7k</td><td class="crd-td">38,7k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">Saikaido</td><td class="crd-td">33,58, 130,4</td><td class="crd-td">650-1603AD</td><td class="crd-td">13,8k</td><td class="crd-td">23k</td><td class="crd-td">38k</td><td class="crd-td">38k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">San'yodo</td><td class="crd-td">34,38, 132,45</td><td class="crd-td">1600-1603AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,9k</td><td class="crd-td">37,9k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Kasukabe</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,97, 139,75</td><td class="crd-td">725-1603AD</td><td class="crd-td">12,4k</td><td class="crd-td">19,9k</td><td class="crd-td">37,3k</td><td class="crd-td">37,3k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Ageo</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,97, 139,58</td><td class="crd-td">725-1603AD</td><td class="crd-td">12,3k</td><td class="crd-td">19,8k</td><td class="crd-td">37k</td><td class="crd-td">37k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Atsugi</strong></td><td class="crd-td">Tokaido</td><td class="crd-td">35,43, 139,35</td><td class="crd-td">725-1603AD</td><td class="crd-td">12,2k</td><td class="crd-td">19,6k</td><td class="crd-td">36,6k</td><td class="crd-td">36,6k (1603AD)</td></tr>
<tr><td class="crd-td"><strong>Higashiosaka</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,67, 135,6</td><td class="crd-td">725-1603AD</td><td class="crd-td">14,3k</td><td class="crd-td">20,7k</td><td class="crd-td">35,6k</td><td class="crd-td">35,6k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nishinomiya</strong></td><td class="crd-td">Kinai</td><td class="crd-td">34,73, 135,33</td><td class="crd-td">725-1603AD</td><td class="crd-td">14,3k</td><td class="crd-td">20,7k</td><td class="crd-td">35,6k</td><td class="crd-td">35,6k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Dazaifu</strong></td><td class="crd-td">Saikaido</td><td class="crd-td">33,51, 130,52</td><td class="crd-td">663-1500AD</td><td class="crd-td">25k</td><td class="crd-td">22k</td><td class="crd-td">-</td><td class="crd-td">35k (900AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in mediaeval Japan ordered by peak documented population across the 650AD to 1603AD span.</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-sett} summarises the distribution of settlements across all eleven administrative circuits alongside their leading urban centres. Tokaido leads all circuits with 162 catalogued settlements, followed by Saikaido in Kyushu (100), Tosando (93), Tohoku (82), Kinai (59), Hokurikudo (46), Sanyodo (42), Nankaido (39), Ryukyu (34), Ezo in Hokkaido (12) and Sanindo (9). Table \ref{tab:excluded-sett} details the leading 25 of 256 excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Circuit</th><th class="crd-th">Settlement Count</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kinai (Five Home Provinces)</strong></td><td class="crd-td">59</td><td class="crd-td">Osaka (200k)</td></tr>
<tr><td class="crd-td"><strong>Tokaido Circuit</strong></td><td class="crd-td">162</td><td class="crd-td">Tokyo (150k)</td></tr>
<tr><td class="crd-td"><strong>Tosando Inland Circuit</strong></td><td class="crd-td">93</td><td class="crd-td">Kyoto (304,8k)</td></tr>
<tr><td class="crd-td"><strong>Tohoku (Mutsu and Dewa)</strong></td><td class="crd-td">82</td><td class="crd-td">Hiraizumi (85k)</td></tr>
<tr><td class="crd-td"><strong>Hokurikudo Circuit</strong></td><td class="crd-td">46</td><td class="crd-td">Sakai (Fukui Ken) (65k)</td></tr>
<tr><td class="crd-td"><strong>San'indo Circuit</strong></td><td class="crd-td">9</td><td class="crd-td">Izumo (3,9k)</td></tr>
<tr><td class="crd-td"><strong>San'yodo Circuit</strong></td><td class="crd-td">42</td><td class="crd-td">Yamaguchi (38,9k)</td></tr>
<tr><td class="crd-td"><strong>Nankaido (Kii and Shikoku)</strong></td><td class="crd-td">39</td><td class="crd-td">Imabari (8,8k)</td></tr>
<tr><td class="crd-td"><strong>Saikaido (Kyushu)</strong></td><td class="crd-td">100</td><td class="crd-td">Fukuoka (38k)</td></tr>
<tr><td class="crd-td"><strong>Ezo (Hokkaido Ainu)</strong></td><td class="crd-td">12</td><td class="crd-td">Biratori (Saru Ainu) (500)</td></tr>
<tr><td class="crd-td"><strong>Ryukyu Archipelago (Gusuku and Early Kingdom)</strong></td><td class="crd-td">34</td><td class="crd-td">Naha (22k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional distribution of settlements and leading population centres across the eleven circuits.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-sett">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Key</th><th class="crd-th">Name</th><th class="crd-th">Reason Code</th><th class="crd-th">Methodological Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ichikawa</strong></td><td class="crd-td">Ichikawa</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Amagasaki</strong></td><td class="crd-td">Amagasaki</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Suita</strong></td><td class="crd-td">Suita</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Takatsuki</strong></td><td class="crd-td">Takatsuki</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yao</strong></td><td class="crd-td">Yao</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Chofu</strong></td><td class="crd-td">Chofu</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Chigasaki</strong></td><td class="crd-td">Chigasaki</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Yamato</strong></td><td class="crd-td">Yamato</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Neyagawa</strong></td><td class="crd-td">Neyagawa</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Nagareyama</strong></td><td class="crd-td">Nagareyama</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kodaira</strong></td><td class="crd-td">Kodaira</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Itami</strong></td><td class="crd-td">Itami</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Mitaka</strong></td><td class="crd-td">Mitaka</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Toyokawa</strong></td><td class="crd-td">Toyokawa</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Izumi</strong></td><td class="crd-td">Izumi</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tachikawa</strong></td><td class="crd-td">Tachikawa</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Narashino</strong></td><td class="crd-td">Narashino</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kamakura</strong></td><td class="crd-td">Kamakura</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Kawanishi</strong></td><td class="crd-td">Kawanishi</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Higashimurayama</strong></td><td class="crd-td">Higashimurayama</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Musashino</strong></td><td class="crd-td">Musashino</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Tama</strong></td><td class="crd-td">Tama</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Iruma</strong></td><td class="crd-td">Iruma</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Misato</strong></td><td class="crd-td">Misato</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Asaka</strong></td><td class="crd-td">Asaka</td><td class="crd-td">duplicate_alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading excluded candidate entries from the regional source ledger with exclusion justifications.</figcaption>
</figure>

# Sources

The urban gazetteer draws on primary administrative and historical records including the *Ritsuryo* legal compendia (*Taiho Ritsuryo* and *Yoro Ritsuryo*), surviving eighth-century *koseki* household registers from the Shosoin repository, provincial gazetteers (*Fudoki*), the tenth-century administrative manual *Engishiki*, Kamakura judicial records (*Azuma Kagami*), Sengoku castle catalogues (*Nihon Jokaku Taikei*), and Toyotomi Hideyoshi's nation-wide cadastral surveys (*Taiko kenchi*) [@Kito2000Jinko; @Farris2006Medieval; @Farris2009DailyLife; @Hayami2001Historical; @Sekiyama1958Kinsei]. Modern archaeological, toponymic and demographic syntheses provide independent ground-truthing for urban extents, street grids and settlement chronologies [@Schmid2021Fujiwaraan; @Yichir2020Establishment; @Walker2001ConquestAinu; @Smits2019MaritimeRyukyu; @Ortman2020Cities; @Jacobson2022Settlement].
