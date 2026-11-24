---
title: "Iran after 1925"
subtitle: "Pahlavi Modernisation, Fertility Transition and Urban Concentration, 1925AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: modern_iran_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_modern_iran_spatial.png"
hero_caption: "Provincial boundaries of the 31 ostans of Iran with 26.392 catalogued SCI cities and villages across 1925AD to 2026AD, highlighting the Tehran-Karaj corridor, Caspian littoral, Khuzestan oil belt and regional urban centres."
hero_label: "fig:hero-modern-iran"

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
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



```{=latex}
\emergencystretch=1.5em
```

# Abstract

Between the accession of the Pahlavi dynasty in 1925AD and 2025AD, the population of Iran multiplied 7,1-fold from 12,65M to 89,8M, adding 77,15M inhabitants at a century-long compound growth rate of 1,98% per year. Early Pahlavi centralisation, tribal sedentarisation and construction of the Trans-Iranian Railway lifted the national total to 18,95M by the first Statistical Centre of Iran (SCI) census in 1956AD, after which malaria eradication, falling infant mortality and oil-financed urbanisation carried the population to 33,71M in 1976AD. Following the 1979 Islamic Revolution, wartime pro-natalism during the 1980-1988 Iran-Iraq War and the arrival of roughly 2M Afghan refugees raised annual growth to 3,91% per year, pushing the 1986AD census count to 49,45M. A subsequent state family planning campaign, rural health-house expansion and rising female schooling then produced the fastest fertility decline in modern demographic history, pulling total fertility from roughly 7 births per woman in the early 1980s below replacement by 2006AD (70,5M) and slowing intercensal growth to 1,26% per year between 2006AD and 2016AD (79,93M). HANDBOOK disaggregates this national trajectory across 31 ostans (22.439 5-arcminute pixels) and 379 geoBoundaries second-order counties (*shahrestans*) using strictly mass-conserving pycnophylactic scaling alongside 26.392 catalogued SCI cities and villages ($\alpha = 1{,}369$, $R^2 = 0{,}994$) anchored by Tehrān (9,86M in 2025AD), Mashhad (3,4M), Eṣfahān (2,22M), Karaj (1,81M), Shīrāz (1,78M) and Tabrīz (1,77M).

# Background

Modern Iranian demographic history begins in 1925AD with roughly 12,65M inhabitants scattered across an arid plateau ringed by the Alborz and Zagros ranges, a humid Caspian lowland and a semi-tropical Gulf littoral. That starting level reflected a century of slow late Qajar recovery punctuated by the Great Persian Famine of 1870-1872 and the wartime food shortages and influenza epidemic of 1917-1919, which together depressed urban and rural numbers across Azarbaijan, Khorasan and Fars. Even in 1925AD, nearly four-fifths of Iranians lived in villages or migratory pastoral confederacies, with only Tehrān (252k), Tabrīz (212k), Mashhad (105k), Eṣfahān (96k) and Shīrāz (75k) functioning as major regional urban hubs.

That settlement map mirrored a pronounced ethno-linguistic and hydraulic mosaic. Persian-speaking oasis towns and *qanat*-irrigated villages occupied the central plateau around Isfahan, Yazd, Kerman and Fars, while Turkic-speaking Azarbaijanis tilled the dense volcanic basins of the northwest around Tabriz, Ardabil and Urmia; Gilaks and Mazandaranis cultivated humid Caspian rice paddies; Kurds, Lors and Bakhtiaris grazed and farmed the Zagros valleys; Arabic-speaking agriculturalists and marsh dwellers inhabited the lower Karun plain of Khuzestan; and Turkmen, Khorasanis and Baluch held the northeastern and southeastern marches [@Annamoradnejad2024Influentia; @Danaei2019Iran]. Across the interior plateau, village size had for centuries been capped by the flow of gravity-fed *qanat* tunnels, a ceiling broken only after mid-century when diesel pumps, deep boreholes and large concrete dams permitted rapid urban and peri-urban expansion at the price of falling water tables [@Talebi2025Water].



## Pahlavi Centralisation and Early Industrialisation (1925AD to 1956AD)

Reza Shah's consolidation of state authority between 1925AD and 1941AD reshaped the territorial framework within which population moved and settled. Military campaigns disarmed and forcibly sedentarised nomadic tribes across Lorestan, Fars, Khuzestan and Kermanshah, bringing pastoralist households into permanent villages and provincial tax registers. Conscription, unified civil registration (*Sabt-e Ahval*) and a centralised bureaucracy drew provincial elites and labourers toward Tehran, while the abolition of internal customs barriers integrated regional grain markets. The decisive infrastructural spine was the Trans-Iranian Railway, built between 1927AD and 1938AD from Bandar-e Shah (now Bandar-e Torkaman) on the Caspian Sea across the Alborz passes and Tehran down to Bandar-e Shahpur (modern Bandar-e Emām Khomeynī, founded in 1929AD) on the Persian Gulf.

Administrative and municipal law followed the same centralising logic. In 1937AD, the Iranian parliament abolished the irregular Qajar *eyalat* and *velayat* patchwork, dividing the kingdom into ten numbered *ostans* (provinces) subdivided into *shahrestans* (counties) and *bakhshs* (districts) [@Annamoradnejad2024Influentia].

In Tehran itself, the demolition of the nineteenth-century Nasseri ramparts and moat in the early 1930s cleared the way for broad grid avenues, ministries and northern residential suburbs climbing the Shemiran foothills, while Karaj (founded as a modern agricultural and rail node in 1920AD) began absorbing state colleges and light workshops west of the capital [@Berlin2018Drivers; @Mehriar2019Urban].

Along the southwestern frontier, petroleum extraction transformed Khuzestan from a sparsely inhabited marshland and riverine plain into Iran's primary industrial enclave. The refinery complex at Ābādān (founded in 1909AD) and the port of Khorramshahr attracted skilled technicians, clerical staff and unskilled rural migrants from Bakhtiari, Bushehr and Fars, while Bandar-e Māhshahr (1945AD) emerged as a petrochemical shipping terminal on the Musa Creek estuary [@Annamoradnejad2024Influentia]. Allied occupation between August 1941 and 1946AD briefly disrupted northern supply lines and provoked regional autonomist crises in Azarbaijan and Kurdistan, yet mortality continued to drift downward as urban sanitation, smallpox vaccination and quinine distribution curtailed epidemic spikes. Between 1925AD and the inaugural national census of November 1956, Iran's population rose by 49,8% to 18,95M, corresponding to a steady compound growth rate of 1,31% per year.

## Mortality Decline, Land Reform and Oil-Led Urbanisation (1956AD to 1979AD)

The twenty years separating the 1956AD and 1976AD censuses witnessed Iran's classic demographic transition onset, driven by falling death rates paired with stubbornly high fertility. National malaria eradication campaigns across Gilan, Mazandaran and Khuzestan, expanded municipal waterworks and antibiotics halved infant and child mortality between the mid-1950s and mid-1970s [@Danaei2019Iran; @Khosravi2007Differenti]. Life expectancy at birth climbed from roughly 40 years in the early 1950s to nearly 58 years by the late 1970s, while the crude death rate dropped below 12 per 1k. Because birth rates remained above 42 per 1k, natural increase accelerated sharply: national totals jumped 36,1% between 1956AD (18,95M) and 1966AD (25,79M), or 3,13% per year, and rose another 30,7% to 33,71M by November 1976 (2,71% per year).

Rural-to-urban migration turned this demographic surge into a spatial upheaval. Following the 1962-1963 White Revolution land reform, *nasaq*-holding peasants received fragmented plots while landless *khoshneshin* agricultural labourers were excluded from redistribution altogether, propelling millions of young men and families out of rain-fed villages in Hamadan, Zanjan, Markazi and Khorasan toward urban construction sites [@Berlin2018Drivers; @Hosseini2018Drivers]. When crude oil revenues quadrupled after 1973AD, state expenditure poured into manufacturing corridors around Tehran, Karaj, Arak, Tabriz and Isfahan, lifting the urban share of Iran's population from 31,4% in 1956AD to 47% in 1976AD [@Annamoradnejad2024Influentia]. Tehran's western satellite belt expanded along the Karaj highway with industrial suburbs such as Shahrīār (1953AD) and Eslāmshahr (1975AD), absorbing rural migrants unable to afford housing inside the municipal core [@Mehriar2019Urban]. Meanwhile, the Pahlavi state's first family planning programme, launched in 1966-1967AD, remained largely confined to educated urban strata and lowered national fertility only modestly prior to 1979AD [@Simbar2012Achievemen].

## Revolution, the Iran-Iraq War and the Baby Boom (1979AD to 1988AD)

The Islamic Revolution of February 1979 abruptly reversed the institutional trajectory of family planning while war and regional upheaval altered migration flows. Revolutionary authorities suspended the Pahlavi family planning council, lowered the legal age of marriage and promoted large families as moral and patriotic strength during the eight-year Iran-Iraq War (September 1980 to August 1988) [@Erfani2011Fertility; @Bank2010Fertility]. Rationing coupons distributed on a per-capita basis reinforced incentives for higher marital fertility in both urban slums and rural villages. Total fertility, which had begun edging downward toward 6,3 births per woman in the late 1970s, rebounded to 7 births per woman during 1980-1984AD [@Erfani2011Fertility].

At the same time, warfare battered Iran's western provinces. Iraqi artillery and aerial bombardment devastated Khoramshahr, Ābādān, Dezfūl, Susangerd and Qasr-e Shirin, driving more than 1,5M displaced Khuzestani and Ilami civilians inland toward Ahvaz, Shiraz, Isfahan, Mashhad and Tehran [@Danaei2019Iran; @Annamoradnejad2024Influentia]. War casualties among young Iranian men numbered in the hundreds of thousands, yet they were far outnumbered demographically by surging infant survival and external refugee inflows. Following the 1979 Soviet invasion of Afghanistan and Baghdad's expulsions of Fayli Kurds and Shia residents, roughly 2M Afghan refugees and several hundred thousand Iraqis entered eastern and western Iran, settling in Mashhad, Zāhedān, Qom, Tehran and Kerman [@Danaei2019Iran]. Combined, high natural increase and net refugee immigration pushed Iran's population from 33,71M in 1976AD to 49,45M in the October 1986 census, a decennial jump of 46,7% (3,91% per year), the fastest intercensal expansion ever recorded in the country.

## Rural Electrification, Female Education and the Fertility Collapse (1989AD to 2026AD)

Faced with the 1986AD census results and postwar reconstruction demands in a sanctions-constrained economy, Iranian technocrats and clerics executed one of the sharpest policy reversals in twentieth-century demography. Beginning in 1988-1989AD, the Ministry of Health and Medical Education revived family planning with explicit religious endorsement, offering free oral contraceptives, intrauterine devices, implants, tubectomy and vasectomy across an unprecedented rural network of *khaneh-ye behdasht* (primary health houses) staffed by local community health workers [@Simbar2012Achievemen; @Danaei2019Iran]. Married women's contraceptive prevalence climbed from 49% in 1989AD to 73,8% by 2006AD [@Simbar2012Achievemen].

Policy alone could not have halved fertility in a decade had structural foundations not already shifted in the countryside. Post-revolutionary investments in paved feeder roads, piped water and universal rural electrification connected peripheral villages to urban media and labour markets, raising the perceived cost and educational expectations of each child [@SalehiIsfahani2026Rural]. Female literacy and secondary schooling expanded dramatically across every ostan, lifting young women's literacy past 90% and empowering women inside household fertility decisions [@Erfani2015Family; @Lutz2010Demography; @Liu2020Education]. As a result, Iran's total fertility rate plunged from 7 in 1980-1984AD to 2,9 in 1996AD and 1,9 births per woman in 2006AD, a decline of more than five births per woman in just over two decades without coercive quotas [@Erfani2011Fertility; @Bank2010Fertility].

Comparable fertility transitions documented in Oman [@Islam2012Proximate], Indonesia [@Utomo2022Second] and broader cross-national panels [@Delventhal2021Demographi; @Tp1993Sources; @Aitken2024What] highlight the role of combined female schooling and accessible contraception, yet Iran's speed outpaced even East Asian benchmarks, ushering in post-transitional childbearing postponement [@Sobotka2017Post] and rapid population ageing [@Bahramnezhad2016Review]. Intercensal growth fell from 1,96% per year in 1986-1996AD (to 60,06M) to 1,62% per year in 1996-2006AD (70,5M) and 1,26% per year in 2006-2016AD (79,93M), reaching an estimated 89,8M by 2025AD. Despite renewed state pro-natalist legislation after 2012AD, economic inflation, housing scarcity and prolonged multi-decadal drought around Lake Urmia and the Karun-Karkheh basin in Khuzestan continued to suppress household formation while accelerating rural-to-urban environmental migration [@Talebi2025Water; @Janmardi2015Drug].

# Methodology

## National Census Series and Pre-Census Back-Projection

Iranian demographic reconstruction for 1925AD to 2026AD rests on eight nationwide door-to-door enumerations conducted by the Statistical Centre of Iran (SCI): decennial censuses in November 1956, November 1966, November 1976, October 1986, October 1996 and October 2006, followed by quinquennial counts in October 2011 and October 2016 [@Annamoradnejad2024Influentia; @Bahramnezhad2016Review]. Post-2016 national figures extend to 2025AD (89,8M) using civil vital-registration balances from the National Organisation for Civil Registration alongside provincial projection tables, as Iran postponed its scheduled 2021AD census amid pandemic and fiscal pressures. Prior to 1956AD, the 1925AD national anchor of 12,65M links the interwar civil-registration records and regional tax surveys of Reza Shah's administration to the first full national census via smooth demographic back-projection calibrated to known interwar mortality trends.

## Provincial Partition and 379-Unit Subadministrative Disaggregation

HANDBOOK structures modern Iran around two complementary administrative tiers. At the first level, the national territory is partitioned into its 31 modern ostans (provinces), spanning 22.439 5-arcminute land pixels across the Iranian plateau, Caspian coast and Gulf littoral. Because Iran repeatedly subdivided large provinces over the twentieth century - growing from 10 ostans in 1937AD to 31 after Khorasan split into Razavi, North and South Khorasan in 2004AD and Alborz separated from Tehran in 2010AD - holding the 31-ostan geometry fixed provides a temporally consistent cartographic grid from 1925AD to 2026AD.

At the second level, high-resolution spatial allocation incorporates 379 second-order administrative polygons (*shahrestans*, ADM2) matched between official SCI provincial and county census releases (1996, 2006, 2011, 2016 and 2023 estimates) and the geoBoundaries global political boundary archive [@Runfola2020GeoBoundaries]. Disaggregation from these 379 polygon totals onto the 5-arcminute grid uses strictly mass-conserving pycnophylactic scaling guided by metric-isotropic radial distance fields from catalogued settlements and non-stationary Matérn ($\nu = 3/2$) kriging priors ($\tau_1 = 1{,}52$ dimensionless over a median Voronoi catchment radius of 32,51 km). Within every polygon and census benchmark, pixel densities are iteratively rescaled so that summed cell inhabitants reproduce the exact reported administrative mass while routing population smoothly away from uninhabitable salt pans (*kavir*), high Zagros ridges and desert sand seas.

## Urban Gazetteer Inclusion and Foundation-Year Truncation

To anchor radial urban gravity and preserve local population histories, HANDBOOK compiles 26.392 Iranian cities, towns and enumerated villages from Statistical Centre of Iran (SCI) municipal and village census tables across 1925AD to 2025AD (45.281 official census rows processed in bounds), excluding duplicate-alias and co-located suburban entries during source-ledger auditing. Major urban trajectories integrate early interwar enumerations (1940AD urban counts and Bharier 1930AD benchmarks) with all eight SCI national censuses (1956–2016AD), while the expanded rural-village layer captures enumerated settlements down to 264–500 inhabitants. All settlement toponyms follow BGN/PCGN scholarly romanisation with macrons and underdots (*Tehrān*, *Eṣfahān*, *Shīrāz*, *Tabrīz*, *Orūmīyeh*, *Dezfūl*) to ensure lossless rendering without replacement glyphs.

Critically, twentieth-century industrial ports, railway junctions and metropolitan satellites carry explicit foundation-year bounds preventing anachronistic pre-foundation back-projection—notably Khoramshahr (1812AD), Ābādān (1909AD), Karaj (1920AD), Bandar-e Emām Khomeynī (1929AD), Shīrvān (1938AD), Bandar-e Māhshahr (1945AD), Shahrīār (1953AD), Eslāmshahr (1975AD), Qods (1989AD) and newly incorporated municipalities such as Balavah (2013AD). Where satellite cities formed after 1925AD - such as Eslāmshahr (appearing in 1975AD) or Qods (incorporated in 1989AD from Qaleh Hassan Khan) - their urban populations enter the gazetteer strictly from their historical inception rather than inflating early Pahlavi metropolitan counts.

# Testing and Validation

Validation of the Iranian demographic surfaces and subadministrative census bindings proceeds through three independent checks: mass-conservation auditing across the geoBoundaries polygons, mortality and vital-registration cross-verification, and rank-size stability testing across the 26.392 catalogued settlements. Across the broader regional pycnophylactic domain (29 historical subadministrative units and 2.629 modern ADM2/ADM1 units across 83 disaggregated years), 65.864 unit-year mass checks achieve a 100% pass rate within 0,01% tolerance, with a global maximum relative unit error of $5{,}85 \times 10^{-8}$. Within Iran specifically, all 379 geoBoundaries ADM2 units match cleanly across the 1996, 2006, 2011, 2016 and 2023 horizons without orphaned polygons or boundary sliver leaks.

<figure class="crd-table-figure" id="tab:subadmin-units">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit</th><th class="crd-th">Area (km²)</th><th class="crd-th">1996AD</th><th class="crd-th">2006AD</th><th class="crd-th">2016AD</th><th class="crd-th">2023AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehran</strong></td><td class="crd-td">980</td><td class="crd-td">10,34M</td><td class="crd-td">11,35M</td><td class="crd-td">13,27M</td><td class="crd-td">14,44M</td></tr>
<tr><td class="crd-td"><strong>Isfahan</strong></td><td class="crd-td">292</td><td class="crd-td">3,92M</td><td class="crd-td">4,56M</td><td class="crd-td">5,12M</td><td class="crd-td">5,48M</td></tr>
<tr><td class="crd-td"><strong>Kerman</strong></td><td class="crd-td">45.302</td><td class="crd-td">2M</td><td class="crd-td">2,65M</td><td class="crd-td">3,16M</td><td class="crd-td">3,46M</td></tr>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">9.279</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,37M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Alborz</strong></td><td class="crd-td">560</td><td class="crd-td">-</td><td class="crd-td">2,08M</td><td class="crd-td">2,71M</td><td class="crd-td">3,05M</td></tr>
<tr><td class="crd-td"><strong>Isfahan County</strong></td><td class="crd-td">15.653</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,24M</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading geoBoundaries ADM2 and harmonised provincial census enumerations for Iran, 1996AD to 2023AD (from 379 matched units).</figcaption>
</figure>

Table \ref{tab:subadmin-units} lists the six largest subadministrative census series stored in the Iranian summary cache [@Runfola2020GeoBoundaries]. Because several geoBoundaries ADM2 (*shahrestan*) polygons share names with their encompassing ostans, Tehran (10,34M in 1996AD to 14,44M in 2023AD), Isfahan (3,92M to 5,48M), Kerman (2M to 3,46M) and Alborz (2,08M in 2006AD to 3,05M in 2023AD) capture provincial-scale enumerations alongside county-specific counts such as Mashhad (3,07M in 2011AD to 3,37M in 2016AD) and Isfahan County (2,17M to 2,24M). Inspecting both layers side by side prevents accidental double-counting while confirming the sustained dominance of the Tehran-Alborz metropolitan basin (17,49M combined by 2023AD).

External demographic cross-checks draw on Iran's expanded death registration system, piloted in Bushehr in 1997AD and extended across 29 provinces by 2005AD [@Khosravi2007Differenti]. Khosravi and colleagues demonstrated sharp provincial mortality gradients behind the national census averages, with adult mortality markedly lower in central Tehran, Isfahan and Yazd than in peripheral Sistan and Baluchestan, Hormozgan and Kerman, closely matching the socioeconomic and fertility gradients documented in the 2000AD Iran Demographic and Health Survey [@Erfani2011Fertility; @Danaei2019Iran]. On the settlement side, log-log rank-size regression across all 26.392 catalogued Iranian cities and villages (well above the n >= 25 sample floor) returns a Zipf exponent of $\alpha = 1{,}369$ with $R^2 = 0{,}994$, confirming that the compiled gazetteer captures Iran's full urban-to-village hierarchy cleanly down to enumerated rural settlements of 264–500 inhabitants without truncating mid-tier cities or rural market towns.

# Results

## National Growth Phases from 1925AD to 2025AD

Across the full century from 1925AD to 2025AD, Iran's population traversed three distinct demographic regimes: moderate pre-census expansion (1925AD to 1956AD), accelerating post-war mortality-driven growth culminating in the post-1979 baby boom (1956AD to 1986AD), and rapid fertility-transition deceleration (1986AD to 2025AD). Figure \ref{fig:modern-iran-trajectory} plots the aggregate trajectory alongside the eight leading ostans in 2025AD, while Table \ref{tab:national-trajectory} reports every national census benchmark, intercensal percentage gain, annualised growth rate and catalogued urban share.

<figure class="crd-figure-block" id="fig:modern-iran-trajectory">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iran/fig2_modern_iran_trajectory.png" alt="fig:modern-iran-trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate Iranian population trajectory with uncertainty envelope (1925AD to 2025AD) and leading provincial units in 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:national-trajectory">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">National Pop.</th><th class="crd-th">Period Change</th><th class="crd-th">Annual Growth</th><th class="crd-th">Catalogued Locality Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1925AD</strong></td><td class="crd-td">12,65M</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,2%</td></tr>
<tr><td class="crd-td"><strong>1956AD</strong></td><td class="crd-td">18,95M</td><td class="crd-td">+49,8%</td><td class="crd-td">1,31% per yr</td><td class="crd-td">84,6%</td></tr>
<tr><td class="crd-td"><strong>1966AD</strong></td><td class="crd-td">25,79M</td><td class="crd-td">+36,1%</td><td class="crd-td">3,13% per yr</td><td class="crd-td">86,2%</td></tr>
<tr><td class="crd-td"><strong>1976AD</strong></td><td class="crd-td">33,71M</td><td class="crd-td">+30,7%</td><td class="crd-td">2,71% per yr</td><td class="crd-td">93,9%</td></tr>
<tr><td class="crd-td"><strong>1986AD</strong></td><td class="crd-td">49,45M</td><td class="crd-td">+46,7%</td><td class="crd-td">3,91% per yr</td><td class="crd-td">93,5%</td></tr>
<tr><td class="crd-td"><strong>1996AD</strong></td><td class="crd-td">60,06M</td><td class="crd-td">+21,5%</td><td class="crd-td">1,96% per yr</td><td class="crd-td">97,1%</td></tr>
<tr><td class="crd-td"><strong>2006AD</strong></td><td class="crd-td">70,5M</td><td class="crd-td">+17,4%</td><td class="crd-td">1,62% per yr</td><td class="crd-td">98,5%</td></tr>
<tr><td class="crd-td"><strong>2016AD</strong></td><td class="crd-td">79,93M</td><td class="crd-td">+13,4%</td><td class="crd-td">1,26% per yr</td><td class="crd-td">101,4%</td></tr>
<tr><td class="crd-td"><strong>2025AD</strong></td><td class="crd-td">89,8M</td><td class="crd-td">+12,4%</td><td class="crd-td">1,3% per yr</td><td class="crd-td">102,4%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Iranian national population benchmarks, inter-benchmark growth rates and catalogued 26.392-locality census shares from 1925AD to 2025AD.</figcaption>
</figure>

As Table \ref{tab:national-trajectory} demonstrates, the decisive demographic inflection points stand out sharply. In the thirty-one years prior to the first national census (1925AD to 1956AD), Iran added 6,3M inhabitants (12,65M to 18,95M) as state security and basic epidemic control gradually widened the surplus of births over deaths. During the next twenty years (1956AD to 1976AD), the country added another 14,75M residents (+77,8%), lifting the total to 33,71M on the eve of the Islamic Revolution. Yet the sharpest single-decade absolute and relative surge occurred between 1976AD and 1986AD, when 15,74M additional inhabitants (+46,7%, 3,91% per year) pushed the census tally to 49,45M [@Erfani2011Fertility; @Bank2010Fertility].

From 1986AD onward, each successive decade added slightly fewer people in absolute terms despite a larger reproductive base: +10,61M in 1986AD to 1996AD (+21,5%), +10,44M in 1996AD to 2006AD (+17,4%), +9,43M in 2006AD to 2016AD (+13,4%) and +9,87M over the nine years to 2025AD (+12,4%). That deceleration reflects the rapid contraction of young birth cohorts after 1990AD even as the enormous 1980-1989 birth cohort entered its twenties and thirties during 2006AD to 2020AD, producing a temporary demographic echo before Iran enters steep ageing in the 2030s [@Bahramnezhad2016Review; @Lutz2010Demography].

This age-structural transition reshaped regional dependency ratios across the country. In low-fertility northern and central provinces such as Gilan, Mazandaran, Tehran and Isfahan, the share of residents aged 60 and older climbed steadily after 2006AD while child cohorts thinned, whereas Sistan and Baluchestan, Hormozgan and Khuzestan retained broader youthful bases [@Bahramnezhad2016Review; @Danaei2019Iran]. Across the 26.392 catalogued SCI cities and villages, interpolated catalogued totals rose from 2,43M in 1925AD to 58,34M in 1996AD, 69,46M in 2006AD, 81,07M in 2016AD and 91,97M across projected 2025AD municipal trajectories.

## Spatial Density and Sub-Regional Contrasts

Iran's population geography is governed by rainfall, elevation and irrigation corridors rather than uniform territorial spread. Figure \ref{fig:modern-iran-density} displays the continuous 2010AD subadministrative census surface at 5-arcminute resolution alongside mean 2025AD density across leading provincial units. Nearly three-quarters of all Iranians inhabit the northern and western mountain arcs and the Caspian littoral, leaving the vast central and eastern interior sparsely populated outside oasis chains.

<figure class="crd-figure-block" id="fig:modern-iran-density">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iran/fig3_modern_iran_density.png" alt="fig:modern-iran-density" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Continuous subadministrative census surface for Iran in 2010AD (inhabitants per 5-arcminute cell) and leading provincial mean densities in 2025AD.</figcaption>
</figure>

Five distinct macro-ecological belts anchor the national distribution [@Annamoradnejad2024Influentia; @Ryazantsev2020Tlas]:

First, the southern Alborz piedmont spanning Tehran, Alborz, Qom and Qazvin forms Iran's demographic core. Fed by snowmelt aquifers and inter-basin water transfers from the Lar, Karaj and Taleqan rivers, this narrow corridor concentrates roughly one-fifth of the national population on less than 2% of Iran's land surface. By 2023AD, Tehran (14,44M) and Alborz (3,05M) together held 17,49M residents in the ADM2 census series, with adjacent Qom (1,47M) and Qazvin (1,38M) lifting the wider metropolitan belt past 20,3M [@Runfola2020GeoBoundaries].

Second, the humid Caspian littoral (Gilan, Mazandaran and Golestan) sustains dense smallholder rice, tea and citrus villages along a coastal shelf backed by steep Hyrcanian forest slopes. Cities such as Rasht (771,3k in 2025AD), Gorgān (397,8k) and Sārī (351,4k) sit amidst continuous rural settlement webs where village boundaries merge into peri-urban ribbon corridors [@Annamoradnejad2024Influentia].

Third, the northwestern Azarbaijan volcanic plateaus and northern Zagros valleys (East Azarbaijan, West Azarbaijan, Ardebil, Zanjan, Kordestan, Kermanshah, Hamadan, Lorestan and Ilam) combine rain-fed wheat farming with fertile irrigated basins around Lake Urmia and the upper Karkheh. Historically one of Iran's most populous rural zones, this region experienced sustained out-migration toward Tehran after 1960AD, compounded in the twenty-first century by the desiccation of Lake Urmia, groundwater depletion and falling agricultural employment [@Talebi2025Water; @Khosravi2007Differenti]. Even so, Tabrīz (1,77M), Kermānshāh (1,07M), Orūmīyeh (835,1k), Hamadān (628,9k), Ardabīl (600,5k), Zanjān (488,7k), Sanandaj (468,2k) and Khoram Ābād (423,6k) remain major regional hubs.

Fourth, Khuzestan and the Persian Gulf littoral (Bushehr and Hormozgan) form an energy-and-port crescent linking the Karun alluvial plain to the Strait of Hormuz. Despite devastating war destruction in Khoramshahr and Ābādān during 1980-1988AD, post-war reconstruction and petrochemical expansion pushed Ahvāz to 1,34M by 2025AD and lifted Bandar-e 'Abās from a modest anchorage to 597,4k as Iran's principal container gateway. Severe summer heat, dust storms and upstream river diversions in the Karun basin, however, have spurred recent out-migration from southern Khuzestan [@Talebi2025Water].

Fifth, the central plateau and eastern frontier (Esfahan, Fars, Yazd, Kerman, Semnan, Razavi Khorasan, North Khorasan, South Khorasan and Sistan and Baluchestan) consist of densely settled oasis islands separated by arid steppe and the Dasht-e Kavir and Dasht-e Lut deserts. Eṣfahān (2,22M) and Shīrāz (1,78M) anchor historic irrigated basins along the Zayandeh Rud and Kor rivers, while Mashhad (3,4M) dominates northeastern Khorasan through shrine pilgrimage, agro-industry and Afghan cross-border trade, and Zāhedān (666,7k) serves as the main administrative node of southeastern Baluchestan, a province where higher fertility persisted well after national levels fell below replacement [@Erfani2011Fertility; @Danaei2019Iran].

## Metropolitan Concentration, Urban Sprawl and the Rank-Size Hierarchy

Iran's settlement system displays a classical log-linear rank-size hierarchy modified by strong capital primacy and rapid suburban satellite proliferation. Figure \ref{fig:modern-iran-settlements} plots the Zipf distribution across all 26.392 catalogued cities and villages ($\alpha = 1{,}369$, $R^2 = 0{,}994$) alongside the twelve largest cities in 2025AD, while Table \ref{tab:top-settlements} details the leading fifteen urban centres across 1925AD, 1996AD, 2016AD and 2025AD.

<figure class="crd-figure-block" id="fig:modern-iran-settlements">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-modern-iran/fig4_modern_iran_settlements.png" alt="fig:modern-iran-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Settlement rank-size distribution across 26.392 catalogued Iranian cities and villages and peak populations of the twelve leading centres in 2025AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">City</th><th class="crd-th">Coords</th><th class="crd-th">1925AD</th><th class="crd-th">1996AD</th><th class="crd-th">2016AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tehrān</strong></td><td class="crd-td">35,69, 51,42</td><td class="crd-td">252k</td><td class="crd-td">6,76M</td><td class="crd-td">8,69M</td><td class="crd-td">9,86M</td></tr>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">36,3, 59,61</td><td class="crd-td">105k</td><td class="crd-td">1,89M</td><td class="crd-td">3M</td><td class="crd-td">3,4M</td></tr>
<tr><td class="crd-td"><strong>Eṣfahān</strong></td><td class="crd-td">32,65, 51,67</td><td class="crd-td">96k</td><td class="crd-td">1,33M</td><td class="crd-td">1,96M</td><td class="crd-td">2,22M</td></tr>
<tr><td class="crd-td"><strong>Karaj</strong></td><td class="crd-td">35,83, 50,99</td><td class="crd-td">4,2k</td><td class="crd-td">941k</td><td class="crd-td">1,59M</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Shīrāz</strong></td><td class="crd-td">29,61, 52,53</td><td class="crd-td">75k</td><td class="crd-td">1,05M</td><td class="crd-td">1,57M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Tabrīz</strong></td><td class="crd-td">38,08, 46,29</td><td class="crd-td">212k</td><td class="crd-td">1,19M</td><td class="crd-td">1,56M</td><td class="crd-td">1,77M</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">34,64, 50,88</td><td class="crd-td">36,5k</td><td class="crd-td">777,7k</td><td class="crd-td">1,2M</td><td class="crd-td">1,36M</td></tr>
<tr><td class="crd-td"><strong>Ahvāz</strong></td><td class="crd-td">31,32, 48,68</td><td class="crd-td">15,6k</td><td class="crd-td">805k</td><td class="crd-td">1,18M</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Kermānshāh</strong></td><td class="crd-td">34,31, 47,06</td><td class="crd-td">60,5k</td><td class="crd-td">693k</td><td class="crd-td">946,7k</td><td class="crd-td">1,07M</td></tr>
<tr><td class="crd-td"><strong>Orūmīyeh</strong></td><td class="crd-td">37,55, 45,08</td><td class="crd-td">31,2k</td><td class="crd-td">435,2k</td><td class="crd-td">736,2k</td><td class="crd-td">835,1k</td></tr>
<tr><td class="crd-td"><strong>Rasht</strong></td><td class="crd-td">37,28, 49,59</td><td class="crd-td">69k</td><td class="crd-td">417,7k</td><td class="crd-td">680k</td><td class="crd-td">771,3k</td></tr>
<tr><td class="crd-td"><strong>Zāhedān</strong></td><td class="crd-td">29,5, 60,86</td><td class="crd-td">5,6k</td><td class="crd-td">419,5k</td><td class="crd-td">587,7k</td><td class="crd-td">666,7k</td></tr>
<tr><td class="crd-td"><strong>Hamadān</strong></td><td class="crd-td">34,8, 48,51</td><td class="crd-td">64k</td><td class="crd-td">401,3k</td><td class="crd-td">554,4k</td><td class="crd-td">628,9k</td></tr>
<tr><td class="crd-td"><strong>Kermān</strong></td><td class="crd-td">30,28, 57,08</td><td class="crd-td">52,4k</td><td class="crd-td">385k</td><td class="crd-td">537,7k</td><td class="crd-td">609,9k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">31,9, 54,37</td><td class="crd-td">51,8k</td><td class="crd-td">326,8k</td><td class="crd-td">529,7k</td><td class="crd-td">600,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Population growth of the fifteen largest Iranian cities from 1925AD to 2025AD across SCI census benchmarks and projections.</figcaption>
</figure>

As Table \ref{tab:top-settlements} shows, Tehrān (9,86M in 2025AD, up 39-fold from 252k in 1925AD) accounts for 11% of the entire national total, standing nearly three times larger than second-ranked Mashhad (3,4M) [@Mousavi2025Introducin]. Yet the true demographic footprint of the capital stretches far beyond Tehran Municipality's border. Because land prices and municipal restrictions pushed working-class migrants outward from the 1970s onward, peripheral dormitory towns along the western and southern arterial roads multiplied at extraordinary speeds: Karaj surged from 4,2k in 1925AD and 14,5k at the 1956AD census to 1,81M in 2025AD (becoming Iran's fourth-largest city), Eslāmshahr reached 508,3k, Shahrīār 351,2k, Qods 351,2k and Malārd 318,8k. Together, Tehran and its immediate western satellites form a continuous conurbation exceeding 13,1M municipal residents.

Urban sprawl and agricultural land conversion have reshaped secondary cities in the same mould [@Berlin2018Drivers; @Hosseini2018Drivers; @Mehriar2019Urban]. Studies of Eṣfahān (2,22M), Shīrāz (1,78M), Tabrīz (1,77M), Bojnurd and Mashhad show that speculative peripheral land subdivision, state-subsidised housing schemes (*Maskan-e Mehr*) on arid fringe tracts and fragmented municipal master plans routinely annexed surrounding *bagh* (orchard) and irrigated villages into low-density commuter suburbs [@PARSIPOUR2019Cities; @Shabahang2022Comparativ].

At the same time, provincial capitals consolidated their regional catchments through expanded university campuses, public-sector employment and industrial estates established after 1990AD. By 2025AD, Iran counted 9 cities exceeding 1M residents (Tehrān, Mashhad, Eṣfahān, Karaj, Shīrāz, Tabrīz, Qom, Ahvāz and Kermānshāh) and 19 exceeding 500k, anchoring a mature, multi-tiered urban-to-village network of 26.392 catalogued SCI localities even where regional primacy remains skewed toward Tehran [@Mousavi2025Introducin; @Annamoradnejad2024Influentia].

In particular, Qom (1,36M) grew from an oasis shrine town of 36,5k in 1925AD and 96,5k in 1956AD into Iran's seventh-largest city through clerical institutions, rural inflow and spillover along the Tehran-Isfahan expressway, while Ahvāz (15,6k in 1925AD to 1,34M in 2025AD) and Kermānshāh (60,5k to 1,07M) absorbed war-displaced and rural migrants across the southwestern and western borderlands.

Meanwhile, coastal logistics and free-trade designations lifted Bandar-e 'Abās to 597,4k and Bushehr to 253,1k by 2025AD, anchoring maritime corridors that increasingly counterbalanced interior plateau growth.

## Household Structure, Literacy and Water-Driven Migration

Beneath Iran's shifting rank-size curve, household organisation and internal migration patterns changed just as profoundly after 1976AD. Rising urban housing costs, female university enrolment and delayed marriage compressed average household size from roughly 5 persons per household in the 1986AD census to 3,3 persons by 2016AD, creating rapid growth in independent household formation even as birth rates dropped below replacement [@Erfani2015Family; @Lutz2010Demography; @Sobotka2017Post]. Universal youth literacy and expanding female secondary completion reshaped regional labour markets, drawing educated provincial youth away from stagnant agrarian counties toward metropolitan service economies in Tehran, Isfahan, Mashhad and Shiraz [@Danaei2019Iran; @Liu2020Education].

At the same time, multi-decadal groundwater over-extraction, dam construction and prolonged drought across the Urmia, Zayandeh Rud and Karun-Karkheh watersheds turned environmental degradation into a major demographic driver [@Talebi2025Water]. In West and East Azarbaijan, shrinking irrigated acreage around Lake Urmia pushed rural families into Tabrīz, Orūmīyeh and the Tehran-Alborz belt, while salinity intrusion and summer dust storms in Khuzestan encouraged out-migration from southern alluvial districts [@Talebi2025Water]. Together with rapid population ageing across Gilan, Mazandaran and central plateau cities [@Bahramnezhad2016Review], these resource pressures ensure that internal redistribution rather than aggregate natural increase will dominate Iranian population geography over the coming decades.

# Limitations

Four methodological limitations govern the interpretation of Iran's 1925AD to 2026AD demographic series. First, pre-1956AD figures remain back-projected reconstructions rather than door-to-door enumerations. Although early Pahlavi civil-registration registries and interwar urban surveys anchor Tehran, Tabriz, Isfahan, Mashhad and Shiraz reasonably well, rural and nomadic populations in 1925AD carry wider uncertainty bounds, particularly across Baluchestan, Lorestan and Kurdish highlands.

Second, a structural distinction separates the 31-ostan spatial partition in the chapter summary metadata from the 379-unit ADM2 pycnophylactic census layer. In the chapter regional partition, ostan area fields are initially recorded as zero and national census totals are apportioned across the 31 ostans in proportion to pixel counts (22.439 total pixels), which assigns large land shares to vast desert ostans such as Kerman (2.458 pixels) and Sistan and Baluchestan (2.303 pixels) rather than compact metropolitan Tehran (207 pixels). True sub-national population density therefore relies strictly on the geoBoundaries ADM2 (*shahrestan*) census disaggregation reported in Table \ref{tab:subadmin-units} and mapped in Figure \ref{fig:modern-iran-density}, rather than the raw pixel-weighted priors listed in the Appendix.

Third, continuous administrative fragmentation complicates longitudinal provincial comparisons. Between 1937AD and 2010AD, Iran expanded from 10 to 31 ostans and multiplied its *shahrestans* to nearly four hundred, while several geoBoundaries ADM2 polygons carry provincial-level homonyms (Tehran, Isfahan, Kerman, Alborz) alongside county enumerations (Isfahan County, Mashhad). Careful reconciliation is therefore essential whenever county tables are aggregated to provincial totals.

Fourth, cross-border migration and postponed enumeration introduce post-2016AD uncertainty. Iran's planned 2021AD census was deferred, leaving the 2025AD national benchmark (89,8M) dependent on vital-registration models that imperfectly capture undocumented Afghan migration surges following 2021AD as well as ongoing out-migration of skilled Iranian professionals.

# Conclusion

Over the century from 1925AD to 2025AD, Iran accomplished one of the sharpest demographic and spatial transformations in Asia. Starting from 12,65M mostly rural inhabitants at the close of Qajar rule, mortality decline, Pahlavi infrastructure and oil-financed industrialisation carried the population to 33,71M by 1976AD, before revolutionary pro-natalism and war-era refugee inflows drove an extraordinary 46,7% surge to 49,45M in 1986AD. The subsequent collapse of total fertility from 7 to below replacement inside two decades - achieved through rural health-house outreach, rural electrification and universal female schooling rather than coercion - slowed national growth toward 1,26% per year by 2006-2016AD (79,93M) and 89,8M in 2025AD. Spatial disaggregation across 31 ostans, 379 geoBoundaries counties and 26.392 catalogued SCI cities and villages ($\alpha = 1{,}369$, $R^2 = 0{,}994$) shows that this century-long expansion concentrated overwhelmingly into the Tehran-Alborz piedmont, the Caspian littoral, Khuzestan's industrial corridor and major provincial oases such as Mashhad, Isfahan, Shiraz and Tabriz, leaving an ageing, heavily urbanised nation facing acute water scarcity and regional inequality as it enters its second demographic century.

# Appendix

Table \ref{tab:ostan-partition} records the 31-ostan baseline partition stored in the chapter regional metadata across five benchmark years (1925AD, 1956AD, 1986AD, 2016AD and 2025AD). As noted in Limitations, this unscaled baseline apportions national census totals across the 31 ostan masks by land-pixel share (22.439 pixels total) prior to applying the 379-unit ADM2 pycnophylactic census scaling summarised in Table \ref{tab:subadmin-units}.

<figure class="crd-table-figure" id="tab:ostan-partition">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ostan</th><th class="crd-th">1925AD</th><th class="crd-th">1956AD</th><th class="crd-th">1986AD</th><th class="crd-th">2016AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kerman</strong></td><td class="crd-td">829k</td><td class="crd-td">1,24M</td><td class="crd-td">3,24M</td><td class="crd-td">5,24M</td><td class="crd-td">5,88M</td></tr>
<tr><td class="crd-td"><strong>Sistan and Baluchestan</strong></td><td class="crd-td">802,8k</td><td class="crd-td">1,2M</td><td class="crd-td">3,14M</td><td class="crd-td">5,07M</td><td class="crd-td">5,7M</td></tr>
<tr><td class="crd-td"><strong>Razavi Khorasan</strong></td><td class="crd-td">740,3k</td><td class="crd-td">1,11M</td><td class="crd-td">2,89M</td><td class="crd-td">4,68M</td><td class="crd-td">5,25M</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">702,6k</td><td class="crd-td">1,05M</td><td class="crd-td">2,75M</td><td class="crd-td">4,44M</td><td class="crd-td">4,99M</td></tr>
<tr><td class="crd-td"><strong>Fars</strong></td><td class="crd-td">685,9k</td><td class="crd-td">1,03M</td><td class="crd-td">2,68M</td><td class="crd-td">4,33M</td><td class="crd-td">4,87M</td></tr>
<tr><td class="crd-td"><strong>Esfahan</strong></td><td class="crd-td">656,1k</td><td class="crd-td">983k</td><td class="crd-td">2,56M</td><td class="crd-td">4,15M</td><td class="crd-td">4,66M</td></tr>
<tr><td class="crd-td"><strong>Semnan</strong></td><td class="crd-td">601,7k</td><td class="crd-td">901,7k</td><td class="crd-td">2,35M</td><td class="crd-td">3,8M</td><td class="crd-td">4,27M</td></tr>
<tr><td class="crd-td"><strong>South Khorasan</strong></td><td class="crd-td">566,4k</td><td class="crd-td">848,6k</td><td class="crd-td">2,21M</td><td class="crd-td">3,58M</td><td class="crd-td">4,02M</td></tr>
<tr><td class="crd-td"><strong>Hormozgan</strong></td><td class="crd-td">496,9k</td><td class="crd-td">744,5k</td><td class="crd-td">1,94M</td><td class="crd-td">3,14M</td><td class="crd-td">3,53M</td></tr>
<tr><td class="crd-td"><strong>Khuzestan</strong></td><td class="crd-td">494,1k</td><td class="crd-td">740,4k</td><td class="crd-td">1,93M</td><td class="crd-td">3,12M</td><td class="crd-td">3,51M</td></tr>
<tr><td class="crd-td"><strong>East Azarbaijan</strong></td><td class="crd-td">437,9k</td><td class="crd-td">656,1k</td><td class="crd-td">1,71M</td><td class="crd-td">2,77M</td><td class="crd-td">3,11M</td></tr>
<tr><td class="crd-td"><strong>West Azarbaijan</strong></td><td class="crd-td">391,3k</td><td class="crd-td">586,4k</td><td class="crd-td">1,53M</td><td class="crd-td">2,47M</td><td class="crd-td">2,78M</td></tr>
<tr><td class="crd-td"><strong>Kordestan</strong></td><td class="crd-td">344,8k</td><td class="crd-td">516,7k</td><td class="crd-td">1,35M</td><td class="crd-td">2,18M</td><td class="crd-td">2,45M</td></tr>
<tr><td class="crd-td"><strong>Lorestan</strong></td><td class="crd-td">337,4k</td><td class="crd-td">505,5k</td><td class="crd-td">1,32M</td><td class="crd-td">2,13M</td><td class="crd-td">2,39M</td></tr>
<tr><td class="crd-td"><strong>Markazi</strong></td><td class="crd-td">333,9k</td><td class="crd-td">500,4k</td><td class="crd-td">1,31M</td><td class="crd-td">2,11M</td><td class="crd-td">2,37M</td></tr>
<tr><td class="crd-td"><strong>North Khorasan</strong></td><td class="crd-td">321k</td><td class="crd-td">481,1k</td><td class="crd-td">1,25M</td><td class="crd-td">2,03M</td><td class="crd-td">2,28M</td></tr>
<tr><td class="crd-td"><strong>Mazandaran</strong></td><td class="crd-td">316,5k</td><td class="crd-td">474,2k</td><td class="crd-td">1,24M</td><td class="crd-td">2M</td><td class="crd-td">2,25M</td></tr>
<tr><td class="crd-td"><strong>Kermanshah</strong></td><td class="crd-td">304,4k</td><td class="crd-td">456,2k</td><td class="crd-td">1,19M</td><td class="crd-td">1,92M</td><td class="crd-td">2,16M</td></tr>
<tr><td class="crd-td"><strong>Zanjan</strong></td><td class="crd-td">300k</td><td class="crd-td">449,6k</td><td class="crd-td">1,17M</td><td class="crd-td">1,9M</td><td class="crd-td">2,13M</td></tr>
<tr><td class="crd-td"><strong>Bushehr</strong></td><td class="crd-td">296,9k</td><td class="crd-td">444,9k</td><td class="crd-td">1,16M</td><td class="crd-td">1,88M</td><td class="crd-td">2,11M</td></tr>
<tr><td class="crd-td"><strong>Golestan</strong></td><td class="crd-td">291,4k</td><td class="crd-td">436,7k</td><td class="crd-td">1,14M</td><td class="crd-td">1,84M</td><td class="crd-td">2,07M</td></tr>
<tr><td class="crd-td"><strong>Ardebil</strong></td><td class="crd-td">289,8k</td><td class="crd-td">434,3k</td><td class="crd-td">1,13M</td><td class="crd-td">1,83M</td><td class="crd-td">2,06M</td></tr>
<tr><td class="crd-td"><strong>Hamadan</strong></td><td class="crd-td">285,3k</td><td class="crd-td">427,5k</td><td class="crd-td">1,12M</td><td class="crd-td">1,8M</td><td class="crd-td">2,03M</td></tr>
<tr><td class="crd-td"><strong>Ilam</strong></td><td class="crd-td">270,6k</td><td class="crd-td">405,5k</td><td class="crd-td">1,06M</td><td class="crd-td">1,71M</td><td class="crd-td">1,92M</td></tr>
<tr><td class="crd-td"><strong>Qazvin</strong></td><td class="crd-td">251,1k</td><td class="crd-td">376,3k</td><td class="crd-td">981,5k</td><td class="crd-td">1,59M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Gilan</strong></td><td class="crd-td">242,9k</td><td class="crd-td">364k</td><td class="crd-td">949,4k</td><td class="crd-td">1,53M</td><td class="crd-td">1,72M</td></tr>
<tr><td class="crd-td"><strong>Chahar Mahall and Bakhtiari</strong></td><td class="crd-td">241,9k</td><td class="crd-td">362,4k</td><td class="crd-td">945,4k</td><td class="crd-td">1,53M</td><td class="crd-td">1,72M</td></tr>
<tr><td class="crd-td"><strong>Tehran</strong></td><td class="crd-td">240,3k</td><td class="crd-td">360,1k</td><td class="crd-td">939,3k</td><td class="crd-td">1,52M</td><td class="crd-td">1,71M</td></tr>
<tr><td class="crd-td"><strong>Kohgiluyeh and Buyer Ahmad</strong></td><td class="crd-td">225,3k</td><td class="crd-td">337,6k</td><td class="crd-td">880,8k</td><td class="crd-td">1,42M</td><td class="crd-td">1,6M</td></tr>
<tr><td class="crd-td"><strong>Qom</strong></td><td class="crd-td">214,5k</td><td class="crd-td">321,3k</td><td class="crd-td">838,2k</td><td class="crd-td">1,35M</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Alborz</strong></td><td class="crd-td">136,9k</td><td class="crd-td">205,2k</td><td class="crd-td">535,2k</td><td class="crd-td">865,2k</td><td class="crd-td">972,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Unscaled pixel-weighted 31-ostan regional partition across five benchmark years from 1925AD to 2025AD (prior to ADM2 pycnophylactic census scaling).</figcaption>
</figure>

# Sources

::: {#refs}
:::
