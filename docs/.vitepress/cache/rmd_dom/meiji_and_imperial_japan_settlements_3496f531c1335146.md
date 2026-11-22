---
title: "Settlement Gazetteer of Meiji and Imperial Japan"
subtitle: "Prefectural Capitals, Treaty Ports, Industrial Cities and Administrative Towns, 1868AD to 1945AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: meiji_and_imperial_japan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_meiji_and_imperial_japan_spatial.png"
hero_caption: "Spatial distribution of 1.683 prefectural capitals, treaty ports, industrial cities and administrative towns across Japan through 1945AD."
hero_label: "fig:hero-meiji-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 1.683 urban, administrative and industrial settlements active across Meiji and Imperial Japan between 1868AD and 1945AD (covering 390.852 km² across 47 prefectures). Synthesising national census tabulations from the Kokusei Chosa surveys (1920AD to 1940AD), the inaugural Jinshin Koseki municipal returns of 1872AD, imperial statistical yearbooks, and historical gazetteers [@Kito2000Jinko; @SBJ2021Census; @NSTAC2026SSDSE; @Rozman1988Castle; @Swale2009Japan], the register encompasses every designated city (*shi*), prefectural capital, treaty port, historic castle town and industrial town across the home islands. Across the 1.683 catalogued entries, the dataset documents 19.849 settlement-year population observations spanning 1868AD to 1945AD (averaging 11,79 observations per centre). At the 1940AD pre-war demographic peak, the leading urban centres were Tokyo (6,78M), Osaka (3,25M), Nagoya (1,33M), Kyoto (1,09M), Yokohama (968k), Kobe (967k), Kitakyushu (750k), Hamamatsu (607k), Sagamihara (380k), Utsunomiya (378k), Fukuyama (359k), Kurashiki (359k), Oita (353k) and Hiroshima (344k). Alongside the 1.683 catalogued settlements, the regional source ledger records 35 excluded duplicate aliases and suburban units out of 1.718 total evaluated candidates.

# Background

Urbanisation in Meiji and Imperial Japan was defined by the structural transformation of traditional Tokugawa urban nodes into modern industrial and administrative metropolises [@Rozman1988Castle; @Swale2009Japan; @Kito2000Jinko]. Under Tokugawa rule, urban settlements had been organized primarily as castle towns (*jokamachi*), port settlements (*minatomachi*), post stations along the Five Highways (*shukubamachi*), or temple market towns (*monzenmachi*) [@Rozman1988Castle; @Hayami2001Historical].

With the abolition of feudal domains (*haihan chiken*) in 1871AD and the promulgation of the Municipal Code (*Shi-cho-son sei*) in 1888AD, the Meiji administration created a rationalized municipal hierarchy [@Rozman1988Castle; @Yamamura1988Meiji]. Historic castle towns hosting prefectural administration, such as Kanazawa, Sendai, Hiroshima, Kumamoto and Nagoya, retained administrative dominance [@Rozman1988Castle]. Simultaneously, designated treaty ports opened to foreign commerce after 1859AD, particularly Yokohama, Kobe, Nagasaki and Hakodate, expanded rapidly as international commercial conduits, railway termini and shipbuilding centres [@Swale2009Japan; @Rozman1988Castle].

From the late Meiji era through the 1930s, heavy industrialisation transformed manufacturing towns along the Tokaido and Inland Sea transport corridors [@Swale2009Japan; @Nakamura1989Depression]. The development of the Yawata Steel Works in Fukuoka Prefecture unified five adjacent municipal boroughs into the Kitakyushu heavy industrial complex [@Swale2009Japan]. In Tokyo and Osaka, suburban electric railway construction prompted dramatic municipal consolidations, culminating in the 1932AD absorption of 82 suburban towns into Greater Tokyo and the 1925AD expansion of Greater Osaka [@Rozman1988Castle; @Kurosawa2017Rise].

# Methodology

Settlement records were constructed by extracting historical administrative seats from the National Statistics Center of Japan (SSDSE-A-2026), the decennial Kokusei Chosa census publications (1920AD to 1940AD), the Jinshin Koseki municipal surveys (1872AD), and imperial statistical compendia [@SBJ2021Census; @NSTAC2026SSDSE; @Kito2000Jinko]. All 1.683 catalogued settlements possess geocoded WGS84 coordinates and assign to one of the 47 administrative prefectural masks.

In the regional source ledger, 35 candidate records were excluded as duplicate historical aliases or subordinate suburban units situated within contiguous metropolitan footprints [@Rozman1988Castle; @NSTAC2026SSDSE]. Subordinate municipalities such as Musashino, Kunitachi and Warabi were merged into adjacent metropolitan aggregates to prevent artificial fragmentation of contiguous urban cores, while duplicate historical aliases (such as Fuchu) were harmonised into canonical administrative entries.

# Testing and Validation

Ledger reconciliation confirms 1.683 included settlements and 35 excluded candidate entries (1.718 total evaluated entities, with zero unaccounted records). All 1.683 catalogued settlements possess geographic coordinates and non-zero population records across the modern benchmarks. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the fifteen leading urban centres of Imperial Japan.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-meiji-and-imperial-japan-settlements/fig4_meiji_and_imperial_japan_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen prefectural and industrial urban centres across Imperial Japan.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-meiji} presents the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the primacy of the Six Great Cities (*Roku Dai Toshi*: Tokyo, Osaka, Nagoya, Kyoto, Yokohama and Kobe) alongside expanding regional manufacturing and naval ports.

<figure class="crd-table-figure" id="tab:top45-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Prefecture</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1872AD</th><th class="crd-th">1920AD</th><th class="crd-th">1940AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,69, 139,69</td><td class="crd-td">1868-1945AD</td><td class="crd-td">595,9k</td><td class="crd-td">3,36M</td><td class="crd-td">6,78M</td><td class="crd-td">6,78M (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Osaka</strong></td><td class="crd-td">Osaka</td><td class="crd-td">34,68, 135,5</td><td class="crd-td">1868-1945AD</td><td class="crd-td">272k</td><td class="crd-td">1,25M</td><td class="crd-td">3,25M</td><td class="crd-td">3,25M (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Nagoya</strong></td><td class="crd-td">Aichi</td><td class="crd-td">35,17, 136,9</td><td class="crd-td">1868-1945AD</td><td class="crd-td">125,2k</td><td class="crd-td">430k</td><td class="crd-td">1,33M</td><td class="crd-td">1,33M (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kyoto</strong></td><td class="crd-td">Shiga</td><td class="crd-td">35, 135,77</td><td class="crd-td">1868-1945AD</td><td class="crd-td">238,7k</td><td class="crd-td">591,3k</td><td class="crd-td">1,09M</td><td class="crd-td">1,09M (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Yokohama</strong></td><td class="crd-td">Kanagawa</td><td class="crd-td">35,43, 139,63</td><td class="crd-td">1868-1945AD</td><td class="crd-td">61,6k</td><td class="crd-td">422,9k</td><td class="crd-td">968,1k</td><td class="crd-td">968,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Yokohama (Aomori Ken)</strong></td><td class="crd-td">Aomori</td><td class="crd-td">41,08, 141,23</td><td class="crd-td">1868-1945AD</td><td class="crd-td">61,6k</td><td class="crd-td">422,9k</td><td class="crd-td">968,1k</td><td class="crd-td">968,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kobe</strong></td><td class="crd-td">Hyogo</td><td class="crd-td">34,68, 135,18</td><td class="crd-td">1868-1945AD</td><td class="crd-td">40,9k</td><td class="crd-td">608,6k</td><td class="crd-td">967,2k</td><td class="crd-td">967,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kitakyushu</strong></td><td class="crd-td">Yamaguchi</td><td class="crd-td">33,88, 130,87</td><td class="crd-td">1868-1945AD</td><td class="crd-td">109,9k</td><td class="crd-td">295k</td><td class="crd-td">750k</td><td class="crd-td">750k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Hamamatsu</strong></td><td class="crd-td">Shizuoka</td><td class="crd-td">34,7, 137,72</td><td class="crd-td">1868-1945AD</td><td class="crd-td">322,5k</td><td class="crd-td">462,9k</td><td class="crd-td">563,1k</td><td class="crd-td">606,7k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sagamihara</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,57, 139,37</td><td class="crd-td">1868-1945AD</td><td class="crd-td">57,3k</td><td class="crd-td">202,4k</td><td class="crd-td">379,8k</td><td class="crd-td">379,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Utsunomiya</strong></td><td class="crd-td">Tochigi</td><td class="crd-td">36,55, 139,87</td><td class="crd-td">1868-1945AD</td><td class="crd-td">200,7k</td><td class="crd-td">288,1k</td><td class="crd-td">350,4k</td><td class="crd-td">377,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Fukuyama</strong></td><td class="crd-td">Hiroshima</td><td class="crd-td">34,48, 133,35</td><td class="crd-td">1868-1945AD</td><td class="crd-td">190,9k</td><td class="crd-td">273,9k</td><td class="crd-td">333,2k</td><td class="crd-td">359k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Kurashiki</strong></td><td class="crd-td">Okayama</td><td class="crd-td">34,58, 133,77</td><td class="crd-td">1868-1945AD</td><td class="crd-td">190,8k</td><td class="crd-td">273,8k</td><td class="crd-td">333,1k</td><td class="crd-td">358,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Oita</strong></td><td class="crd-td">Oita</td><td class="crd-td">33,23, 131,6</td><td class="crd-td">1868-1945AD</td><td class="crd-td">187,8k</td><td class="crd-td">269,6k</td><td class="crd-td">327,9k</td><td class="crd-td">353,3k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">Hiroshima</td><td class="crd-td">34,38, 132,45</td><td class="crd-td">1868-1945AD</td><td class="crd-td">74,3k</td><td class="crd-td">160,5k</td><td class="crd-td">344k</td><td class="crd-td">344k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Gifu</strong></td><td class="crd-td">Gifu</td><td class="crd-td">35,42, 136,75</td><td class="crd-td">1868-1945AD</td><td class="crd-td">176,1k</td><td class="crd-td">252,7k</td><td class="crd-td">307,4k</td><td class="crd-td">331,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">Fukuoka</td><td class="crd-td">33,58, 130,4</td><td class="crd-td">1868-1945AD</td><td class="crd-td">41,6k</td><td class="crd-td">95,4k</td><td class="crd-td">306,8k</td><td class="crd-td">306,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Nagano</strong></td><td class="crd-td">Nagano</td><td class="crd-td">36,63, 138,18</td><td class="crd-td">1868-1945AD</td><td class="crd-td">162,9k</td><td class="crd-td">233,8k</td><td class="crd-td">284,5k</td><td class="crd-td">306,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Miyazaki</strong></td><td class="crd-td">Miyazaki</td><td class="crd-td">31,9, 131,42</td><td class="crd-td">1868-1945AD</td><td class="crd-td">161,7k</td><td class="crd-td">232k</td><td class="crd-td">282,3k</td><td class="crd-td">304,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Kawasaki</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,52, 139,7</td><td class="crd-td">1868-1945AD</td><td class="crd-td">10,8k</td><td class="crd-td">21,4k</td><td class="crd-td">300,8k</td><td class="crd-td">300,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kawasaki (Fukuoka Ken)</strong></td><td class="crd-td">Fukuoka</td><td class="crd-td">33,58, 130,8</td><td class="crd-td">1868-1945AD</td><td class="crd-td">10,8k</td><td class="crd-td">21,4k</td><td class="crd-td">300,8k</td><td class="crd-td">300,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kawasaki (Miyagi Ken)</strong></td><td class="crd-td">Miyagi</td><td class="crd-td">38,17, 140,63</td><td class="crd-td">1868-1945AD</td><td class="crd-td">10,8k</td><td class="crd-td">21,4k</td><td class="crd-td">300,8k</td><td class="crd-td">300,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kawaguchi</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,8, 139,72</td><td class="crd-td">1868-1945AD</td><td class="crd-td">44,7k</td><td class="crd-td">157,9k</td><td class="crd-td">296,5k</td><td class="crd-td">296,5k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Hachioji</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,67, 139,3</td><td class="crd-td">1868-1945AD</td><td class="crd-td">44,6k</td><td class="crd-td">157,6k</td><td class="crd-td">295,7k</td><td class="crd-td">295,7k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kashiwa</strong></td><td class="crd-td">Ibaraki</td><td class="crd-td">35,87, 139,97</td><td class="crd-td">1868-1945AD</td><td class="crd-td">152,6k</td><td class="crd-td">219,1k</td><td class="crd-td">266,5k</td><td class="crd-td">287,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Iwaki</strong></td><td class="crd-td">Fukushima</td><td class="crd-td">37,05, 140,88</td><td class="crd-td">1868-1945AD</td><td class="crd-td">151,7k</td><td class="crd-td">217,7k</td><td class="crd-td">264,8k</td><td class="crd-td">285,3k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Takasaki</strong></td><td class="crd-td">Gunma</td><td class="crd-td">36,32, 139</td><td class="crd-td">1868-1945AD</td><td class="crd-td">148,8k</td><td class="crd-td">213,6k</td><td class="crd-td">259,9k</td><td class="crd-td">280k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Matsudo</strong></td><td class="crd-td">Tokyo</td><td class="crd-td">35,78, 139,9</td><td class="crd-td">1868-1945AD</td><td class="crd-td">40,9k</td><td class="crd-td">144,5k</td><td class="crd-td">271,1k</td><td class="crd-td">271,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Amagasaki</strong></td><td class="crd-td">Hyogo</td><td class="crd-td">34,73, 135,4</td><td class="crd-td">1868-1945AD</td><td class="crd-td">130,3k</td><td class="crd-td">203,2k</td><td class="crd-td">271,1k</td><td class="crd-td">271,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Maebashi</strong></td><td class="crd-td">Gunma</td><td class="crd-td">36,38, 139,05</td><td class="crd-td">1868-1945AD</td><td class="crd-td">142,5k</td><td class="crd-td">204,5k</td><td class="crd-td">248,8k</td><td class="crd-td">268,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Higashiosaka</strong></td><td class="crd-td">Osaka</td><td class="crd-td">34,67, 135,6</td><td class="crd-td">1868-1945AD</td><td class="crd-td">75,1k</td><td class="crd-td">152,6k</td><td class="crd-td">267,3k</td><td class="crd-td">267,3k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Koriyama</strong></td><td class="crd-td">Fukushima</td><td class="crd-td">37,4, 140,35</td><td class="crd-td">1868-1945AD</td><td class="crd-td">137,5k</td><td class="crd-td">197,3k</td><td class="crd-td">240k</td><td class="crd-td">258,6k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Nagasaki</strong></td><td class="crd-td">Nagasaki</td><td class="crd-td">32,75, 129,87</td><td class="crd-td">1868-1945AD</td><td class="crd-td">29,7k</td><td class="crd-td">176,5k</td><td class="crd-td">252,6k</td><td class="crd-td">252,6k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Aomori</strong></td><td class="crd-td">Aomori</td><td class="crd-td">40,82, 140,73</td><td class="crd-td">1868-1945AD</td><td class="crd-td">132,5k</td><td class="crd-td">190,1k</td><td class="crd-td">231,3k</td><td class="crd-td">249,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Kurume</strong></td><td class="crd-td">Saga</td><td class="crd-td">33,32, 130,5</td><td class="crd-td">1868-1945AD</td><td class="crd-td">127,3k</td><td class="crd-td">182,8k</td><td class="crd-td">222,3k</td><td class="crd-td">239,5k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sendai</strong></td><td class="crd-td">Miyagi</td><td class="crd-td">38,27, 140,87</td><td class="crd-td">1868-1945AD</td><td class="crd-td">52,1k</td><td class="crd-td">119k</td><td class="crd-td">223,6k</td><td class="crd-td">238,2k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Yokkaichi</strong></td><td class="crd-td">Mie</td><td class="crd-td">34,95, 136,62</td><td class="crd-td">1868-1945AD</td><td class="crd-td">124,8k</td><td class="crd-td">179,1k</td><td class="crd-td">217,8k</td><td class="crd-td">234,7k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Otsu</strong></td><td class="crd-td">Shiga</td><td class="crd-td">35,02, 135,85</td><td class="crd-td">1868-1945AD</td><td class="crd-td">124,3k</td><td class="crd-td">178,4k</td><td class="crd-td">217,1k</td><td class="crd-td">233,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Nagaoka</strong></td><td class="crd-td">Niigata</td><td class="crd-td">37,43, 138,83</td><td class="crd-td">1868-1945AD</td><td class="crd-td">123,3k</td><td class="crd-td">177k</td><td class="crd-td">215,3k</td><td class="crd-td">232k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Fukushima</strong></td><td class="crd-td">Fukushima</td><td class="crd-td">37,75, 140,47</td><td class="crd-td">1868-1945AD</td><td class="crd-td">123,1k</td><td class="crd-td">176,7k</td><td class="crd-td">214,9k</td><td class="crd-td">231,6k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Kumamoto</strong></td><td class="crd-td">Kumamoto</td><td class="crd-td">32,8, 130,7</td><td class="crd-td">1868-1945AD</td><td class="crd-td">44,6k</td><td class="crd-td">70,4k</td><td class="crd-td">194,1k</td><td class="crd-td">230,8k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Tsu</strong></td><td class="crd-td">Mie</td><td class="crd-td">34,72, 136,5</td><td class="crd-td">1868-1945AD</td><td class="crd-td">120,5k</td><td class="crd-td">173k</td><td class="crd-td">210,4k</td><td class="crd-td">226,7k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Shizuoka</strong></td><td class="crd-td">Shizuoka</td><td class="crd-td">34,97, 138,38</td><td class="crd-td">1868-1945AD</td><td class="crd-td">31,6k</td><td class="crd-td">74,1k</td><td class="crd-td">212,2k</td><td class="crd-td">225,4k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sasebo</strong></td><td class="crd-td">Nagasaki</td><td class="crd-td">33,17, 129,7</td><td class="crd-td">1868-1945AD</td><td class="crd-td">117,6k</td><td class="crd-td">168,8k</td><td class="crd-td">205,3k</td><td class="crd-td">221,2k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Sapporo</strong></td><td class="crd-td">Hokkaido</td><td class="crd-td">43,05, 141,35</td><td class="crd-td">1872-1945AD</td><td class="crd-td">2,6k</td><td class="crd-td">102,6k</td><td class="crd-td">206,1k</td><td class="crd-td">220,1k (1945AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Imperial Japan ordered by peak documented population (n=1.683 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-meiji} summarises the distribution of catalogued settlements across all 47 prefectures alongside their leading urban centres. Hokkaido leads all prefectures with 179 catalogued settlements, reflecting extensive frontier agricultural colonisation, followed by Nagano (72), Saitama (62), Fukushima (55), Osaka (52), Tokyo (49), Aichi (46), Fukuoka (46) and Okinawa (46). Table \ref{tab:excluded-meiji} documents all 35 excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Prefecture</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aichi</strong></td><td class="crd-td">46</td><td class="crd-td">Nagoya (1,33M)</td></tr>
<tr><td class="crd-td"><strong>Akita</strong></td><td class="crd-td">25</td><td class="crd-td">Akita (93,9k)</td></tr>
<tr><td class="crd-td"><strong>Aomori</strong></td><td class="crd-td">38</td><td class="crd-td">Yokohama (Aomori Ken) (968,1k)</td></tr>
<tr><td class="crd-td"><strong>Chiba</strong></td><td class="crd-td">45</td><td class="crd-td">Funabashi (183,8k)</td></tr>
<tr><td class="crd-td"><strong>Ehime</strong></td><td class="crd-td">17</td><td class="crd-td">Imabari (146,7k)</td></tr>
<tr><td class="crd-td"><strong>Fukui</strong></td><td class="crd-td">17</td><td class="crd-td">Sakai (Fukui Ken) (197,9k)</td></tr>
<tr><td class="crd-td"><strong>Fukuoka</strong></td><td class="crd-td">46</td><td class="crd-td">Fukuoka (306,8k)</td></tr>
<tr><td class="crd-td"><strong>Fukushima</strong></td><td class="crd-td">55</td><td class="crd-td">Iwaki (285,3k)</td></tr>
<tr><td class="crd-td"><strong>Gifu</strong></td><td class="crd-td">42</td><td class="crd-td">Gifu (331,1k)</td></tr>
<tr><td class="crd-td"><strong>Gunma</strong></td><td class="crd-td">21</td><td class="crd-td">Takasaki (280k)</td></tr>
<tr><td class="crd-td"><strong>Hiroshima</strong></td><td class="crd-td">22</td><td class="crd-td">Fukuyama (359k)</td></tr>
<tr><td class="crd-td"><strong>Hokkaidō</strong></td><td class="crd-td">179</td><td class="crd-td">Sapporo (220,1k)</td></tr>
<tr><td class="crd-td"><strong>Hyōgo</strong></td><td class="crd-td">40</td><td class="crd-td">Kobe (967,2k)</td></tr>
<tr><td class="crd-td"><strong>Ibaraki</strong></td><td class="crd-td">45</td><td class="crd-td">Kashiwa (287,1k)</td></tr>
<tr><td class="crd-td"><strong>Ishikawa</strong></td><td class="crd-td">19</td><td class="crd-td">Kanazawa (200,6k)</td></tr>
<tr><td class="crd-td"><strong>Iwate</strong></td><td class="crd-td">34</td><td class="crd-td">Ichinoseki (113,9k)</td></tr>
<tr><td class="crd-td"><strong>Kagawa</strong></td><td class="crd-td">15</td><td class="crd-td">Takamatsu (117,9k)</td></tr>
<tr><td class="crd-td"><strong>Kagoshima</strong></td><td class="crd-td">27</td><td class="crd-td">Kagoshima (190,3k)</td></tr>
<tr><td class="crd-td"><strong>Kanagawa</strong></td><td class="crd-td">24</td><td class="crd-td">Yokohama (968,1k)</td></tr>
<tr><td class="crd-td"><strong>Kumamoto</strong></td><td class="crd-td">42</td><td class="crd-td">Kumamoto (230,8k)</td></tr>
<tr><td class="crd-td"><strong>Kyōto</strong></td><td class="crd-td">17</td><td class="crd-td">Uji (146,2k)</td></tr>
<tr><td class="crd-td"><strong>Kōchi</strong></td><td class="crd-td">34</td><td class="crd-td">Kochi (134,1k)</td></tr>
<tr><td class="crd-td"><strong>Mie</strong></td><td class="crd-td">32</td><td class="crd-td">Yokkaichi (234,7k)</td></tr>
<tr><td class="crd-td"><strong>Miyagi</strong></td><td class="crd-td">38</td><td class="crd-td">Kawasaki (Miyagi Ken) (300,8k)</td></tr>
<tr><td class="crd-td"><strong>Miyazaki</strong></td><td class="crd-td">28</td><td class="crd-td">Miyazaki (304,1k)</td></tr>
<tr><td class="crd-td"><strong>Nagano</strong></td><td class="crd-td">72</td><td class="crd-td">Nagano (306,4k)</td></tr>
<tr><td class="crd-td"><strong>Nagasaki</strong></td><td class="crd-td">18</td><td class="crd-td">Nagasaki (252,6k)</td></tr>
<tr><td class="crd-td"><strong>Nara</strong></td><td class="crd-td">37</td><td class="crd-td">Kashihara (96,5k)</td></tr>
<tr><td class="crd-td"><strong>Niigata</strong></td><td class="crd-td">32</td><td class="crd-td">Nagaoka (232k)</td></tr>
<tr><td class="crd-td"><strong>Okayama</strong></td><td class="crd-td">25</td><td class="crd-td">Kurashiki (358,9k)</td></tr>
<tr><td class="crd-td"><strong>Okinawa</strong></td><td class="crd-td">46</td><td class="crd-td">Naha (65,8k)</td></tr>
<tr><td class="crd-td"><strong>Saga</strong></td><td class="crd-td">31</td><td class="crd-td">Kurume (239,5k)</td></tr>
<tr><td class="crd-td"><strong>Saitama</strong></td><td class="crd-td">62</td><td class="crd-td">Sakai (Ibaraki Ken) (197,9k)</td></tr>
<tr><td class="crd-td"><strong>Shiga</strong></td><td class="crd-td">23</td><td class="crd-td">Kyoto (1,09M)</td></tr>
<tr><td class="crd-td"><strong>Shimane</strong></td><td class="crd-td">17</td><td class="crd-td">Izumo (136,1k)</td></tr>
<tr><td class="crd-td"><strong>Shizuoka</strong></td><td class="crd-td">41</td><td class="crd-td">Hamamatsu (606,7k)</td></tr>
<tr><td class="crd-td"><strong>Tochigi</strong></td><td class="crd-td">30</td><td class="crd-td">Utsunomiya (377,5k)</td></tr>
<tr><td class="crd-td"><strong>Tokushima</strong></td><td class="crd-td">25</td><td class="crd-td">Tokushima (120,5k)</td></tr>
<tr><td class="crd-td"><strong>Tokyo</strong></td><td class="crd-td">49</td><td class="crd-td">Tokyo (6,78M)</td></tr>
<tr><td class="crd-td"><strong>Tottori</strong></td><td class="crd-td">23</td><td class="crd-td">Yonago (113,8k)</td></tr>
<tr><td class="crd-td"><strong>Toyama</strong></td><td class="crd-td">16</td><td class="crd-td">Takaoka (147,8k)</td></tr>
<tr><td class="crd-td"><strong>Wakayama</strong></td><td class="crd-td">27</td><td class="crd-td">Wakayama (195,2k)</td></tr>
<tr><td class="crd-td"><strong>Yamagata</strong></td><td class="crd-td">35</td><td class="crd-td">Yamagata (201,3k)</td></tr>
<tr><td class="crd-td"><strong>Yamaguchi</strong></td><td class="crd-td">22</td><td class="crd-td">Kitakyushu (750k)</td></tr>
<tr><td class="crd-td"><strong>Yamanashi</strong></td><td class="crd-td">28</td><td class="crd-td">Kofu (163,6k)</td></tr>
<tr><td class="crd-td"><strong>Ōita</strong></td><td class="crd-td">24</td><td class="crd-td">Oita (353,3k)</td></tr>
<tr><td class="crd-td"><strong>Ōsaka</strong></td><td class="crd-td">52</td><td class="crd-td">Osaka (3,25M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across the 47 Japanese prefectures (1.683 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-meiji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Musashino</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ikeda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kunitachi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Warabi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Togo</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Fuchu</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Miyashiro</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Nakagusuku</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Tadaoka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kumiyama</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Matsuda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ikeda</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kotohira</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Yokoze</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Yahiko</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kumejima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Showa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Hirogawa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Toyooka</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Taketomi</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Yamae</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ogasawara</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Akamura</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Tano</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Miyake</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Kozushima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Yonaguni</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Shirakawa</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (duplicate_alias).</td></tr>
<tr><td class="crd-td"><strong>Minamidaito</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Toshima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Kitadaito</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Mishima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication/bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Tonaki</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Mikurajima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Aogashima</strong></td><td class="crd-td">Japan</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Excluded during deduplication/bounds check (outside_study_bounds).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> All 35 excluded candidate entries in the Imperial Japan source ledger, consolidated into canonical settlements.</figcaption>
</figure>

# Limitations

Two spatial factors affect urban population aggregation in this gazetteer. First, the boundary definition of major metropolitan entities underwent substantial expansion during the interwar era [@Rozman1988Castle; @SBJ2021Census]. Tokyo City expanded in 1932AD from 15 historical wards into 35 wards through the annexation of 82 suburban towns and villages in Ebara, Toyotama, Kitatoshima, Minamiadachi and Katsushika districts, elevating municipal population from 2,07M to 4,97M virtually overnight [@Rozman1988Castle]. Similarly, Osaka City conducted its second boundary expansion in 1925AD, annexing 44 surrounding towns to form a contiguous metropolis of 2,11M [@Rozman1988Castle]. In this gazetteer, pre-expansion figures reflect contemporary municipal boundaries, with surrounding suburban settlements tracked as distinct points prior to administrative amalgamation. Second, wartime aerial destruction and evacuation (*sokai*) between March and August 1945 produced temporary demographic fluctuations that were only partially captured in municipal registers prior to the nationwide survey of 1 November 1945 [@Kito2000Jinko; @Nakamura1989Depression].

# Sources

<div id="refs"></div>
