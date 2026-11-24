---
title: "Arabian Peninsula State Formation to 1971"
subtitle: "Oasis Sedentarisation, Yemen Highland Primacy and Early Gulf Oil Censuses, 1900AD to 1971AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: arabian_peninsula_state_formation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_arabian_peninsula_state_formation_spatial.png"
hero_caption: "Six constituent territories and 105 individually assessed urban, oasis and coastal settlements across the Arabian Peninsula from 1900AD to 1971AD."
hero_label: "fig:hero-arabian-peninsula"
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



# Abstract

Between 1900AD and 1971AD, the Arabian Peninsula underwent the fastest demographic transformation of its recorded history, shifting from a fragmented patchwork of Ottoman provincial fringes, Zaydi highland imamate valleys, pastoral confederations and British-protected pearling ports into a modern state system reshaped by oil revenues and centralisation. Across the six constituent territories of the peninsula—encompassing 35.293 five-arcminute terrestrial cells (approximately 2,84M km²) from the northern Nefud borderlands to the Bab al-Mandab and the Strait of Hormuz—total population nearly tripled from 5,49M in 1900AD to 6,63M in 1932AD, 8,58M in 1950AD and 14,61M in 1971AD. At the opening of the twentieth century, the monsoon-fed terraced highlands of Mutawakkilite Yemen and the Aden Protectorate alone sustained 2,85M inhabitants, or 51,9% of the entire peninsular population, outweighing the whole of central, northern and eastern Arabia combined. Over the ensuing seven decades, three structural forces overturned that balance: the unification of Saudi Arabia and the state-directed sedentarisation of nomadic Bedouin tribes into agricultural *hijar* colonies between 1912AD and 1932AD; the post-1945AD expansion of petroleum extraction along the Persian Gulf littoral, which turned small pearling anchorages into cosmopolitan labour-importing metropolises in Dhahran, Al-Ahmadi, Manama, Doha, Dubai and Abu Dhabi; and the administrative ascendancy of Riyadh and Jeddah over an integrated road and air network. Harmonising early British Aden and Gulf censuses (Bahrain 1941AD, Kuwait 1957AD, Trucial States 1968AD, Qatar 1970AD) with post-1971AD national enumerations, HANDBOOK disaggregates territorial populations across 233 modern geoBoundaries administrative polygons using strictly mass-conserving pycnophylactic scaling (65.864 unit-year checks across the broader domain with maximum relative error 5,85e-08), non-stationary Matérn ($\nu = 3/2$) spatial kriging and 105 individually assessed urban, oasis and coastal settlements exhibiting a Zipf rank-size exponent of $\alpha = 1{,}173$ ($R^2 = 0{,}941$).

# Background

## Oasis Ecology, Tribal Territories and Late Ottoman Frontiers

In 1900AD, human settlement across the Arabian Peninsula remained bound by an uncompromising hydrological geometry. More than four-fifths of the landmass consists of hyper-arid gravel plains, limestone plateaus and dune seas—principally the Rub' al-Khali in the south, the Great Nafud in the north and the Ad-Dahna arc linking them—where annual precipitation falls below 100 mm and permanent agriculture is impossible without fossil aquifers or seasonal wadi spate flow [@Battesti2023Bedouins; @Alruwais1998Tent]. Outside the rain-fed escarpments of the southwest, sedentary life clustered around discrete ecological niches: artesian spring oases in Al-Hasa and Qatif along the Gulf littoral, palm-lined wadi troughs along the Tuwayq escarpment in Najd, high-altitude spring terraces in the Hijaz mountains around At-Ta'if, the piedmont *aflaj* channels of interior Oman, and maritime trading anchorages along the Red Sea and Persian Gulf [@Bosworth2007Historic; @Mandeli2019Public; @Eddisford2017Vernacular].

Between these green islands moved pastoral confederations—the Anazah, Shammar, Mutayr, Utaybah, Harb, Qahtan, Dawasir and Al Murrah—whose seasonal migrations followed winter pasture across recognised tribal domains (*al-dira*) [@Alruwais1998Tent; @Battesti2023Bedouins]. In ecological terms, nomadic camel pastoralism and oasis date cultivation formed a single interdependent economy rather than two separate worlds: nomads supplied transport camels, clarified butter, wool and livestock to oasis markets in Buraydah, Ha'il, Hofuf and Al-Ula, while relying on settled cultivators for grain, dates, cloth and firearms [@Battesti2023Bedouins; @Alwehaibi2025Attitudes].

Politically, the peninsula in 1900AD was divided between waning Ottoman imperial garrisons and British maritime protectorates. Following the 1871AD–1872AD Ottoman expedition to Al-Hasa and Highland Yemen, the Porte maintained nominal provincial administration over the Vilayet of Hijaz (Mecca, Medina and Jeddah), the Vilayet of Yemen (Sana'a, Al-Hudaydah and Ta'izz), the Mutasarrifate of Asir and the Sanjak of Najd centred on Al-Hufuf [@Bosworth2007Historic; @Anon2024Kingdom]. Yet Ottoman authority rarely penetrated far beyond garrisoned towns and the single-track Hijaz Railway completed from Damascus to Medina in 1908AD. Along the southern and eastern periphery, the Government of India held treaty relationships with the Sultanate of Muscat and Oman, the Trucial Sheikhdoms of the lower Gulf, Qatar (brought under British protection in 1916AD), Bahrain and Kuwait (1899AD), while administering the strategic coaling station of Aden directly from Bombay until 1932AD and London thereafter [@Hindelang2021History; @Szalai2019Small; @AlKuwari2025Tribal].

## Saudi Unification and the Ikhwan Hijar Sedentarisation (1902AD to 1932AD)

The political fragmentation of interior Arabia ended through three decades of military consolidation led by Abdulaziz ibn Abdurrahman Al Saud after his nocturnal recapture of Riyadh in January 1902 [@Anon2024Kingdom; @Tawati1976Civil]. Over the next quarter-century, Saudi forces expelled the Ottoman garrison from Al-Hasa in 1913AD, absorbed Jabal Shammar and its capital Ha'il in 1921AD, incorporated the Idrisi highlands of Asir between 1920AD and 1930AD, and overthrew the Hashemite Kingdom of Hijaz in 1924AD–1925AD, culminating in the proclamation of the Kingdom of Saudi Arabia in September 1932 [@Anon2024Kingdom; @Tawati1976Civil].

Equally consequential for population geography was the deliberate sedentarisation of nomadic tribes through the *Ikhwan* movement between 1912AD and 1929AD [@Alruwais1998Tent; @Battesti2023Bedouins; @Alwehaibi2025Attitudes]. To break exclusive clan loyalty to pastoral *al-dira* territories and create a standing religious-military levy, Abdulaziz sponsored more than a hundred planned agricultural settlements (*hijar*, singular *hijrah*) sited over shallow aquifers in Najd and the northern steppe, beginning with Al-Artawiyah in 1912AD and Al-Ghatghat in 1913AD [@Alruwais1998Tent; @Anon2024Kingdom]. Tens of thousands of Mutayr, Utaybah, Harb, Qahtan and Ajman tribesmen sold their camel herds, built mud-brick compounds around mosque-wells and attempted irrigated wheat and date cultivation. Even after the 1929AD–1930AD suppression of the *Ikhwan* rebellion at Sabillah, the fiscal, transport and ecological foundations of nomadic pastoralism continued to erode. Motor transport along unpaved desert tracks undercut camel caravanning across the Hijaz and Najd, while the Great Depression of 1929AD and the concurrent flood of Japanese cultured pearls collapsed the Persian Gulf pearling economy that had employed upwards of 75k seasonal divers from Bahrain, Kuwait, Qatar and the Trucial Coast [@Hindelang2021History; @Eddisford2017Vernacular; @AlKuwari2025Tribal].

## Yemen Highland Demographic Primacy and Dual Polities

Throughout the entire period from 1900AD to 1971AD, the demographic centre of gravity of the Arabian Peninsula lay not in Saudi Najd or the Gulf oil sheikhdoms, but in the southwestern highlands of Yemen. Rising above 2.000 m and catching summer southwest monsoon rains of 400 mm to 1.000 mm annually, the terraced basins of Sana'a, Dhamar, Ibb, Ta'izz and Hajjah—together with the adjacent Asir highlands—sustained dense rain-fed village agriculture for sorghum, millet, coffee (*qahwa*) and qat [@Dureab2020Usefulness]. Mutawakkilite Yemen and the Aden Protectorate held 2,85M inhabitants in 1900AD (51,9% of the peninsular total), 3,45M in 1932AD, 4,45M in 1950AD and 6,35M in 1971AD (43,5% of the peninsular total).

Despite its dense rural base, Yemen remained starkly bifurcated between interior isolation and maritime entrepôt growth [@Dureab2020Usefulness; @Szalai2019Small]. In the north, following the withdrawal of Ottoman troops in 1918AD, Imam Yahya Hamid al-Din consolidated the Mutawakkilite Kingdom of Yemen as a closed agrarian state in which highland villages grew slowly under high fertility offset by endemic malaria in the Tihama coastal plain, periodic drought famines and high infant mortality [@Dureab2020Usefulness]. In the south, British Aden developed into one of the busiest bunkering and transshipment ports in the Indian Ocean after the opening of the Suez Canal, drawing tens of thousands of Yemeni highland migrants, Somalis and South Asian clerks, while the surrounding Western and Eastern Aden Protectorates—including the Wadi Hadhramaut oases of Shibam, Say'un and Tarim—sustained centuries-old emigration networks linking Arabia to Hyderabad, Singapore and Java [@Shahnawaz2026Urdu; @Bosworth2007Historic]. Following the September 1962 republican revolution in Sana'a, an eight-year civil war displaced rural communities in the northern highlands while pushing tens of thousands of Yemeni labourers northwards into Saudi construction sites and Gulf ports; in the south, British withdrawal in November 1967 established the People's Republic of South Yemen, ending Aden's role as an imperial garrison and free-port bunkering station [@Dureab2020Usefulness; @AlShehabi2026Labour].

## Petroleum Extraction, Port Modernisation and Gulf Migration (1932AD to 1971AD)

The discovery of commercial petroleum deposits transformed the eastern littoral of the peninsula at a pace unmatched elsewhere in the Middle East. Oil was struck first in Bahrain in May 1932, followed in March 1938 by the Dammam No. 7 well at Dhahran in Saudi Arabia's Eastern Province and the Burgan field in Kuwait, with commercial exports accelerating rapidly once wartime tanker shortages eased after 1945AD [@Hindelang2021History; @AlShehabi2026Labour; @Fabbri2021Urban]. Subsequent strikes in Qatar (Dukhan, commercial exports 1949AD), Abu Dhabi (Umm Shaif offshore 1958AD and Bab onshore 1960AD), Oman (1964AD, exports 1967AD) and Dubai (1966AD) spread hydrocarbon rents down the length of the Gulf [@Eddisford2017Vernacular; @AlKuwari2025Tribal; @Thiollet2020Cosmopolit].

Hydrocarbon extraction altered Arabian demography through three intertwined mechanisms. First, oil companies built planned industrial enclaves—Dhahran, Abqaiq and Ras Tanura in Al-Hasa, Awali in Bahrain, Al-Ahmadi (founded 1946AD) in Kuwait, and Umm Said in Qatar—alongside deepwater export terminals at Ad-Dammam, Mina Al-Ahmadi and Mina Salman, magnetising Bedouin and oasis workers away from date groves and desert pastures [@Fabbri2021Urban; @Hindelang2021History]. Second, because indigenous populations across Kuwait (35k in 1900AD), Qatar, Abu Dhabi and Dubai were far too small to staff construction gangs, port stevedores, civil ministries and school systems, Gulf rulers institutionalised large-scale transnational labour recruitment under the *kafala* sponsorship system, drawing Palestinian, Egyptian, Lebanese and Yemeni professionals alongside South Asian technicians and labourers [@AlShehabi2026Labour; @Fahad2026Invisible; @Shahnawaz2026Urdu]. Third, hydrocarbon revenues financed modern public health—malaria eradication in Al-Hasa and Bahrain, piped desalinated water in Kuwait and Jeddah, and maternal clinics—which cut crude death rates sharply while birth rates remained above 45 per 1.000, producing annual natural increase rates approaching 3% by the 1960s [@Tawati1976Civil; @Alarabi2025Mental; @Rahman2023Social]. By December 1971, following the termination of British protectorate treaties in Bahrain, Qatar and the seven Trucial Emirates, the modern political map of the peninsula stood complete.

# Methodology

## Documentary Baselines and Early Gulf Censuses

Reconstructing the population of the Arabian Peninsula from 1900AD to 1971AD requires bridging a sharp documentary divide between the British-administered or oil-producing ports along the periphery and the unenumerated interior of Saudi Arabia, Yemen and Oman. For the first three decades of the twentieth century, baseline estimates combine late Ottoman provincial *salname* registers for Hijaz, Yemen and Al-Hasa with British Political Residency trade and settlement returns compiled in Bushire, Muscat, Bahrain, Kuwait and Aden [@Hindelang2021History; @Bosworth2007Historic; @Eddisford2017Vernacular]. In Aden Colony, decennial censuses conducted within the British Indian framework provide continuous benchmark counts from 1901AD through 1931AD, 1946AD and 1955AD.

On the Gulf coast, statistical modernisation began earlier than in the interior. Bahrain carried out the first modern population census anywhere in the Persian Gulf in January 1941 (recording 89.970 inhabitants), followed by enumerations in 1950AD (109.650), 1959AD (143.135), 1965AD (182.203) and 1971AD (216.078) [@AlShehabi2026Labour; @Rahman2025Family]. Kuwait followed with its foundational 1957AD Census (206.473 inhabitants), repeating counts in 1961AD (321.621), 1965AD (467.339) and 1970AD (738.662), revealing early the demographic transition in which non-Kuwaiti migrant workers came to outnumber citizens in the labour force [@Fahad2026Invisible; @Hindelang2021History; @AlKuwari2025Tribal]. Towards the end of the domain, the Trucial States Development Office completed a comprehensive 1968AD Census across all seven emirates (180.226 inhabitants, led by Dubai and Abu Dhabi), and Qatar conducted its first census in 1970AD (111.133) [@Thiollet2020Cosmopolit; @Eddisford2017Vernacular].

For the three largest interior territories—Saudi Arabia, North Yemen and Oman—reliable nationwide enumerations arrived only at or just after the close of the 1900AD–1971AD window. Saudi Arabia conducted an incomplete administrative count in 1962AD–1963AD before completing its first comprehensive national census in September 1974 (recording 7,01M inhabitants), while the Yemen Arab Republic conducted its first national census in February 1975 (supported by UN technical advisors, recording roughly 5,24M resident plus temporary migrant Yemenis) and South Yemen counted 1,59M in 1973AD [@Tawati1976Civil; @Dureab2020Usefulness; @Fadaak2000Urban]. Oman remained unenumerated until the 1993AD census (2,02M). Consequently, HANDBOOK anchors 1971AD levels directly to back-projected 1973AD–1975AD national totals and 1968AD–1971AD Gulf censuses, and propagates 1900AD, 1932AD and 1950AD trajectories backwards using differential regional natural increase, *hijar* settlement registries, pilgrimage port arrivals and oil-sector migration flows [@Anon2024Kingdom; @Battesti2023Bedouins].

## Radial Oasis Geometry and Non-Stationary Matérn Kriging

Standard global gridding rules smear rural populations uniformly across administrative polygons or along intermittent desert wadi channels, severely distorting arid Arabian geography by placing phantom farmers inside the Rub' al-Khali or along dry desert tracks. HANDBOOK resolves this through a two-stage spatial architecture calibrated specifically for the Middle East and North Africa across 3.416 HydroBASINS Level 6 domestic catchments (1.942 active catchments) and 168.112 valid five-arcminute terrestrial cells.

Continuous residual density across catchment centroids is interpolated using a Paciorek-Schervish non-stationary Matérn covariance kernel with smoothness parameter $\nu = 3/2$:

$$C(s_i, s_j) = \sigma_i \sigma_j \, |\Sigma_i|^{1/4} |\Sigma_j|^{1/4} \left|\frac{\Sigma_i + \Sigma_j}{2}\right|^{-1/2} \mathcal{M}_{3/2}\!\left(\sqrt{Q_{ij}}\right)$$

where $\Sigma(s)$ denotes a locally oriented metric anisotropy tensor and $Q_{ij}$ is the symmetric Mahalanobis distance between locations $s_i$ and $s_j$:

$$Q_{ij} = (s_i - s_j)^T \left(\frac{\Sigma_i + \Sigma_j}{2}\right)^{-1} (s_i - s_j)$$

With $\nu = 3/2$, the Matérn correlation function takes the closed analytical form $\mathcal{M}_{3/2}(d) = (1 + \sqrt{3}d)\exp(-\sqrt{3}d)$. Across the HANDBOOK MENA domain, regularised variogram calibration fixes dimensionless bandwidths at $\tau_1 = 1,35$ (clamped from raw $1,518$) and $\tau_2 = 2,9025$, with a median Voronoi catchment radius of 32,51 km and a 90th percentile radius of 40,25 km. On the early modern and modern conditioning horizon, effective short-range correlation reaches 49,17 km with residual $R^2 = 0,9993$ and nugget-to-sill ratio $0,04$.

Crucially for the Arabian Peninsula, HANDBOOK pairs this regional kriging surface with strict radial oasis point kernels and topographic barrier controls. Rather than projecting fluvial river worms along dry interior wadis, oasis settlements act as metric-isotropic radial kernels ($\sigma_1 = 4,5$ km, $\sigma_2 = 11,0$ km, radial cutoff $24,0$ km) embedded within an elevation barrier of 850 m and cross-catchment attenuation of $0,78$. This formulation preserves the fifty- to hundred-fold carrying-capacity gradient between terraced Yemeni highlands, coastal Gulf towns and Najdi aquifer oases while zeroing out uninhabited dune ergs across the Rub' al-Khali and Great Nafud. From 1880AD to 1956AD, a continuous census taper transitions spatial weights smoothly toward documented settlement and subadministrative returns.

## Subadministrative GIS Disaggregation and Mass Conservation

To bridge historical regional masks with modern census geometry, HANDBOOK integrates historical subadministrative units (29 pre-1950 polygons across the wider MENA domain) and 2.629 modern administrative polygons sourced from the geoBoundaries database [@Runfola2020GeoBoundaries]. Within the seven Arabian Peninsula states, Table \ref{tab:subadmin-coverage} summarises the 233 matched modern subadministrative units used to condition contemporary spatial weights and validate urban-rural allocation: 136 ADM2 governorates in Saudi Arabia (censuses 1992AD, 2004AD, 2010AD and 2022AD), 53 ADM2 wilayats in Oman (1993AD, 2003AD, 2010AD and 2020AD), 21 ADM1 governorates in Yemen (1994AD and 2004AD), 7 emirates in the United Arab Emirates (eight series from 1980AD to 2023AD), 6 municipalities in Qatar (six series from 1986AD to 2020AD), 6 governorates in Kuwait (1995AD to 2021AD) and 4 governorates in Bahrain (2001AD to 2024AD) [@Runfola2020GeoBoundaries].

<figure class="crd-table-figure" id="tab:subadmin-coverage">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">ISO3</th><th class="crd-th">Level</th><th class="crd-th">Units</th><th class="crd-th">Census Span</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">SAU</td><td class="crd-td">ADM2</td><td class="crd-td">136</td><td class="crd-td">1992AD to 2022AD (4 counts)</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">YEM</td><td class="crd-td">ADM1</td><td class="crd-td">21</td><td class="crd-td">1994AD to 2004AD (2 counts)</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">OMN</td><td class="crd-td">ADM2</td><td class="crd-td">53</td><td class="crd-td">1993AD to 2020AD (4 counts)</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">ARE</td><td class="crd-td">ADM1</td><td class="crd-td">7</td><td class="crd-td">1980AD to 2023AD (8 counts)</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">QAT</td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">1986AD to 2020AD (6 counts)</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">BHR</td><td class="crd-td">ADM1</td><td class="crd-td">4</td><td class="crd-td">2001AD to 2024AD (4 counts)</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">KWT</td><td class="crd-td">ADM1</td><td class="crd-td">6</td><td class="crd-td">1995AD to 2021AD (4 counts)</td></tr>
<tr><td class="crd-td"><strong>Peninsula Total</strong></td><td class="crd-td">All 7</td><td class="crd-td">ADM2/ADM1</td><td class="crd-td">233</td><td class="crd-td">1980AD to 2024AD</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Modern geoBoundaries subadministrative GIS units matched across the seven Arabian Peninsula jurisdictions.</figcaption>
</figure>

Rasterisation of these polygons onto the five-arcminute grid uses strictly mass-conserving pycnophylactic dasymetric scaling. Across all 65.864 unit-year checks conducted throughout the HANDBOOK domain (spanning 83 disaggregated years), 100% of administrative units conserve total population within 0,01%, with a global maximum unit relative error of $5,85 \times 10^{-8}$.

# Testing and Validation

Arithmetic reconciliation confirms exact parity between the six regional population masks of the Arabian Peninsula module (35.293 cells) and the aggregated peninsular headline trajectory across all four milestone dates: 5,49M in 1900AD, 6,63M in 1932AD, 8,58M (8.575.000) in 1950AD and 14,61M in 1971AD. Table \ref{tab:regions-arabia} presents the full territorial series alongside five-arcminute cell counts.

<figure class="crd-table-figure" id="tab:regions-arabia">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Grid Cells</th><th class="crd-th">1900AD</th><th class="crd-th">1932AD</th><th class="crd-th">1950AD</th><th class="crd-th">1971AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mutawakkilite Yemen and Aden Protectorate</strong></td><td class="crd-td">5.498</td><td class="crd-td">2,85M</td><td class="crd-td">3,45M</td><td class="crd-td">4,45M</td><td class="crd-td">6,35M</td></tr>
<tr><td class="crd-td"><strong>Najd, Northern Borders and Al-Hasa (Eastern Province)</strong></td><td class="crd-td">16.412</td><td class="crd-td">950k</td><td class="crd-td">1,15M</td><td class="crd-td">1,55M</td><td class="crd-td">3,15M</td></tr>
<tr><td class="crd-td"><strong>Hejaz and Asir</strong></td><td class="crd-td">8.202</td><td class="crd-td">1,15M</td><td class="crd-td">1,35M</td><td class="crd-td">1,75M</td><td class="crd-td">2,95M</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">236</td><td class="crd-td">35k</td><td class="crd-td">75k</td><td class="crd-td">155k</td><td class="crd-td">790k</td></tr>
<tr><td class="crd-td"><strong>Sultanate of Muscat and Oman</strong></td><td class="crd-td">3.895</td><td class="crd-td">360k</td><td class="crd-td">410k</td><td class="crd-td">460k</td><td class="crd-td">745k</td></tr>
<tr><td class="crd-td"><strong>Bahrain, Qatar and the Trucial States</strong></td><td class="crd-td">1.050</td><td class="crd-td">145k</td><td class="crd-td">195k</td><td class="crd-td">210k</td><td class="crd-td">625k</td></tr>
<tr><td class="crd-td"><strong>Arabian Peninsula Total</strong></td><td class="crd-td">35.293</td><td class="crd-td">5,49M</td><td class="crd-td">6,63M</td><td class="crd-td">8,57M</td><td class="crd-td">14,61M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Territorial population trajectories across the six Arabian Peninsula regions, 1900AD to 1971AD.</figcaption>
</figure>

Cross-checking the territorial aggregates against the earliest modern subadministrative enumerations confirms structural continuity across the 1971AD boundary. In Yemen, the five top highland and Red Sea governorates—Ta'izz, Al-Hudaydah, Ibb, Hajjah and Dhamar—alone accounted for 7,17M residents by 1994AD within a combined area of 44.065 km², validating the dominant share assigned to Yemeni terraces throughout 1900AD–1971AD (Table \ref{tab:top-subadmin}). In Saudi Arabia, the convergence of capital administration and commercial infrastructure carried Riyadh governorate to 3,83M by 1992AD (and 8,59M by 2022AD), closely matched by Makkah al-Mukarramah (4,47M in 1992AD), while the eastern oil basin of Al-Ahsa reached 1,1M in 2022AD [@Runfola2020GeoBoundaries; @Alqarni2026Dialect]. Along the Gulf littoral, small city-state subadministrative units exhibit extreme post-oil densities: Doha municipality occupied 78 km² with 234,8k inhabitants in 1986AD, Farwaniya in Kuwait covered 300 km² with 360,2k inhabitants in 1995AD, and Wilayat Muscat held 549,3k inhabitants on 307 km² in 1993AD [@Eddisford2017Vernacular; @Fahad2026Invisible].

<figure class="crd-table-figure" id="tab:top-subadmin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subadministrative Unit</th><th class="crd-th">ISO3</th><th class="crd-th">Level</th><th class="crd-th">Area (km²)</th><th class="crd-th">Earliest Census</th><th class="crd-th">Latest Census</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">SAU</td><td class="crd-td">ADM2</td><td class="crd-td">8.568</td><td class="crd-td">3,83M (1992AD)</td><td class="crd-td">8,59M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Makkah Al Mukarramah</strong></td><td class="crd-td">SAU</td><td class="crd-td">ADM2</td><td class="crd-td">4.017</td><td class="crd-td">4,47M (1992AD)</td><td class="crd-td">7,77M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Dhabi</strong></td><td class="crd-td">ARE</td><td class="crd-td">ADM1</td><td class="crd-td">59.724</td><td class="crd-td">451,8k (1980AD)</td><td class="crd-td">3,79M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">SAU</td><td class="crd-td">ADM2</td><td class="crd-td">3.306</td><td class="crd-td">3,75M (2022AD)</td><td class="crd-td">3,75M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Dubai</strong></td><td class="crd-td">ARE</td><td class="crd-td">ADM1</td><td class="crd-td">3.712</td><td class="crd-td">276,3k (1980AD)</td><td class="crd-td">3,65M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Ta'izz Governorate</strong></td><td class="crd-td">YEM</td><td class="crd-td">ADM1</td><td class="crd-td">9.946</td><td class="crd-td">1,87M (1994AD)</td><td class="crd-td">2,39M (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Al Madinah Al Munawwarah</strong></td><td class="crd-td">SAU</td><td class="crd-td">ADM2</td><td class="crd-td">23.057</td><td class="crd-td">1,08M (1992AD)</td><td class="crd-td">2,39M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Al Hudaydah Governorate</strong></td><td class="crd-td">YEM</td><td class="crd-td">ADM1</td><td class="crd-td">12.750</td><td class="crd-td">1,56M (1994AD)</td><td class="crd-td">2,16M (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Ibb Governorate</strong></td><td class="crd-td">YEM</td><td class="crd-td">ADM1</td><td class="crd-td">5.292</td><td class="crd-td">1,67M (1994AD)</td><td class="crd-td">2,13M (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Sharjah</strong></td><td class="crd-td">ARE</td><td class="crd-td">ADM1</td><td class="crd-td">2.259</td><td class="crd-td">159,3k (1980AD)</td><td class="crd-td">1,81M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Hajjah Governorate</strong></td><td class="crd-td">YEM</td><td class="crd-td">ADM1</td><td class="crd-td">8.281</td><td class="crd-td">1,09M (1994AD)</td><td class="crd-td">1,48M (2004AD)</td></tr>
<tr><td class="crd-td"><strong>Jazan</strong></td><td class="crd-td">SAU</td><td class="crd-td">ADM2</td><td class="crd-td">1.067</td><td class="crd-td">866k (1992AD)</td><td class="crd-td">1,4M (2022AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twelve largest modern geoBoundaries subadministrative units across the Arabian Peninsula with census spans.</figcaption>
</figure>

Table \ref{tab:kriging-diag} reports the underlying Matérn variogram parameters across five representative HANDBOOK calibration horizons spanning prehistory through the early modern conditioning layer. Residual $R^2$ holds at 0,9992 to 0,9993 across every epoch with nugget-to-sill ratio fixed at 0,04, while effective short-range spatial correlation remains tightly bounded between 48,29 km and 49,93 km (49,17 km in the early modern horizon). Fluvial and coastal regression weights ($\beta_3$ and $\beta_4$) taper naturally from 0,1099 and 0,0987 in the Epipalaeolithic to 0,0334 and 0,0282 in the early modern baseline as modern settlement and census anchors assume primary spatial control.

<figure class="crd-table-figure" id="tab:kriging-diag">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Calibration Horizon</th><th class="crd-th">Tau1</th><th class="crd-th">Nugget c0</th><th class="crd-th">Residual R²</th><th class="crd-th">Range (km)</th><th class="crd-th">Mean Cell</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Epipalaeolithic and Early Neolithic</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000007</td><td class="crd-td">0,9993</td><td class="crd-td">48,29</td><td class="crd-td">0,0216</td></tr>
<tr><td class="crd-td"><strong>Early and Middle Bronze Age</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000027</td><td class="crd-td">0,9993</td><td class="crd-td">48,98</td><td class="crd-td">0,1054</td></tr>
<tr><td class="crd-td"><strong>Roman, Parthian and Kushan</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000044</td><td class="crd-td">0,9993</td><td class="crd-td">49,44</td><td class="crd-td">0,1764</td></tr>
<tr><td class="crd-td"><strong>Early Islamic Caliphate</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000015</td><td class="crd-td">0,9992</td><td class="crd-td">49,93</td><td class="crd-td">0,0674</td></tr>
<tr><td class="crd-td"><strong>Early Modern Baseline</strong></td><td class="crd-td">1,35</td><td class="crd-td">0,000007</td><td class="crd-td">0,9993</td><td class="crd-td">49,17</td><td class="crd-td">0,0285</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> HANDBOOK Matérn variogram diagnostics across five chronological horizons (168.112 valid terrestrial cells).</figcaption>
</figure>

# Results

## Long-Run Peninsular Growth and Regional Rebalancing (1900AD to 1971AD)

Between 1900AD and 1971AD, the aggregate population of the Arabian Peninsula expanded by 9,12M persons, or 166,1%, accelerating through three distinct demographic regimes (Figure \ref{fig:traj-arabia}). During the first phase from 1900AD to 1932AD, growth averaged only 0,59% per year, lifting total population from 5,49M to 6,63M. Recurring cholera and plague outbreaks along the Hijaz pilgrimage routes, wartime disruption during the 1916AD–1918AD Arab Revolt and the siege of Medina, post-1929AD collapse of the Gulf pearling trade, and high infant mortality across rural oases kept net expansion modest [@Bosworth2007Historic; @Mandeli2019Public; @Hindelang2021History].

<figure class="crd-figure-block" id="fig:traj-arabia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-arabian-peninsula-state-formation/fig2_arabian_peninsula_state_formation_trajectory.png" alt="fig:traj-arabia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Population trajectories across the six Arabian Peninsula territories from 1900AD to 1971AD.</figcaption>
</figure>

Between 1932AD and 1950AD, annual peninsular growth more than doubled to 1,44%, carrying total numbers from 6,63M to 8,58M. State consolidation under Saudi rule suppressed inter-tribal raiding across Najd and the northern desert, improving food security along caravan and motor routes, while initial petroleum revenues in Bahrain, Saudi Arabia and Kuwait funded basic quarantine controls and urban waterworks [@Tawati1976Civil; @Anon2024Kingdom; @Alarabi2025Mental]. After 1950AD, the demographic curve inflected sharply upwards: between 1950AD and 1971AD, peninsular population expanded by 6,04M—more than in the preceding half-century—at an annual compound rate of 2,57%, reaching 14,61M on the eve of the 1973AD oil shock.

## Yemen Highland Dominance and Coastal-Interior Dualism

Mutawakkilite Yemen and the Aden Protectorate remained the most populous zone of the peninsula across every benchmark date, rising from 2,85M in 1900AD to 3,45M in 1932AD, 4,45M in 1950AD and 6,35M in 1971AD (Table \ref{tab:regions-arabia}). Unlike the Gulf states or central Najd, Yemeni growth rested primarily on high endogenous natural fertility within an overwhelmingly rural terraced society rather than oil-financed immigration [@Dureab2020Usefulness]. Density contrasts inside the southwestern corner were sharp (Figure \ref{fig:density-arabia}): while highland valleys in Ta'izz, Ibb and Dhamar supported rural densities exceeding 100 inhabitants per km², the arid eastern plateau of Mahra and interior Hadhramaut supported sparse oasis clusters separated by barren limestone steppes.

<figure class="crd-figure-block" id="fig:density-arabia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-arabian-peninsula-state-formation/fig3_arabian_peninsula_state_formation_density.png" alt="fig:density-arabia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Spatial population density across Arabian highland terraces, desert oases and Gulf littoral corridors through 1971AD.</figcaption>
</figure>

Urban concentration in Yemen remained comparatively restrained until the 1960s. Aden served as the principal maritime gateway, growing from 44k in the 1901AD British India census to 80,5k in 1946AD, 138,4k in 1955AD—bolstered by bunkering, British military infrastructure and the BP Little Aden refinery opened in 1954AD—and 235k in 1971AD [@Bosworth2007Historic]. In the northern imamate, Sanaa stood at 35k in 1900AD before the 1904AD–1905AD siege and famine cut numbers to 25k; it recovered to 45k by 1930AD and 55k by 1955AD before accelerating after the 1962AD revolution to 115k in 1971AD, while the Red Sea port of Al-Hudaydah (40k in 1900AD to 70k in 1971AD), the southern highland centre of Taiz (10k in 1900AD to 80k in 1970AD and 65k in 1971AD, boosted by its 1948AD–1962AD royal capital status) and the Hadhrami entrepôt of Al-Mukalla (41k) formed secondary poles [@Dureab2020Usefulness]. Despite rapid late-century growth, Yemen's share of total peninsular population gradually declined from 51,9% in 1900AD to 43,5% in 1971AD as oil-state growth accelerated to the north and east.

## Saudi Territorial Integration: Hijaz Pilgrimage Hubs and Riyadh's Ascendancy

Within the boundaries of the Saudi kingdom, the balance between the western Hijaz-Asir corridor and the Najd-Eastern Province interior reversed decisively between 1900AD and 1971AD. In 1900AD, Hejaz and Asir held 1,15M inhabitants compared with 950k across Najd, Northern Borders and Al-Hasa (Table \ref{tab:regions-arabia}). The Hijaz owed its early lead to the annual *hajj* pilgrimage economy, Red Sea shipping through Jeddah and Yanbu, and the productive mountain terraces of Asir and Taif [@Jeong2023Homeland; @Mandeli2019Public; @Alaki2023Time]. Mecca (70k permanent residents in 1900AD to 158,9k in the 1962AD–1963AD municipal count and 310k in 1971AD) and Medina (35k in 1900AD, collapsing to 15k during the 1916AD–1919AD wartime siege before recovering to 72k in 1962AD and 160k in 1971AD) functioned not merely as religious sanctuaries, but as cosmopolitan cities with resident communities from Java, South Asia, West Africa and Central Asia [@Jeong2023Homeland; @Rico2017Making; @Bosworth2007Historic]. Jeddah, after demolishing its Ottoman sea walls in 1947AD and expanding its port to receive motorised pilgrims and oil-financed imports, grew more than thirteenfold from 28k in 1900AD to 90k in 1950AD, 147,9k in 1962AD and 380k in 1971AD, while the highland summer seat and military hub of Taif rose from 8k to 150k [@Mandeli2019Public; @Fadaak2000Urban; @Jamjoom2012Secondary].

Yet the fastest percentage growth occurred in central and eastern Saudi Arabia, where Najd, Northern Borders and Al-Hasa expanded 3,3-fold from 950k in 1900AD to 3,15M in 1971AD, overtaking Hejaz and Asir (2,95M in 1971AD) during the 1960s. Two distinct growth engines drove this shift. In the interior, Riyadh expanded thirtyfold from a walled mud-brick oasis town of 14k in 1900AD into the centralised bureaucratic capital of an oil-exporting state, reaching 30k by 1930AD, 83k in 1950AD, 169,2k in the 1962AD–1963AD municipal census and 420k in 1971AD as ministries transferred from Jeddah in the 1950s and rural Najdi and southern migrants settled in new suburban quarters [@Tawati1976Civil; @Alqarni2026Dialect; @Fadaak2000Urban]. Along the Eastern Province littoral, petroleum operations around Dhahran (founded 1938AD around Dammam Well No. 7, reaching 35k in 1971AD) and Al-Khobar (planned 1942AD, 42k), together with the deepwater port and railway terminus at Dammam (re-founded in 1923AD by Al-Dawasir migrants at 1,5k, climbing to 14k in 1950AD, 32k in 1962AD and 95k in 1971AD) and the historic spring oasis of Al-Hofuf (24k to 98k) and neighbouring Al-Mubarraz (8k to 45k), forged a second urban-industrial pole on the Persian Gulf [@Bosworth2007Historic; @Razzaq2026Modern]. Secondary Najdi agricultural hubs—Buraydah (58k in 1971AD), Hail (35k), Al-Kharj (34k) and Unayzah (28,5k)—anchored internal road corridors alongside the northern garrison town of Tabuk (52k) and southern centres Najran (41k) and Khamis Mushait (39k) [@Alwehaibi2025Attitudes].

## The Gulf Sheikhdoms and Oman: Oil Urbanism and Demographic Reversal

Nowhere on earth did early twentieth-century demographic ratios invert more dramatically than along the Persian Gulf littoral. Kuwait grew more than 22,5-fold across the study period, expanding from 35k in 1900AD to 75k in 1932AD, 155k in 1950AD and 790k in 1971AD [@Hindelang2021History; @AlKuwari2025Tribal]. Kuwait City rose from 32k in 1900AD to 104,6k in the 1957AD census, 217,7k in 1970AD and 225k in 1971AD; after Kuwait demolished its third town wall in 1957AD and implemented master-planned ring roads, residential growth surged into outer suburbs including Hawalli (founded 1906AD, reaching 106,5k in 1970AD and 112k in 1971AD), Salmiya (founded 1950AD, 71k in 1971AD), Al-Farwaniya (41k), Fahaheel (26,2k) and Al-Jahra (20,5k), alongside the planned oil-company township of Al-Ahmadi (founded 1946AD, 21,8k in 1971AD) [@Hindelang2021History; @Fahad2026Invisible]. By 1970AD, expatriate workers from Palestine, Egypt, Iraq, Iran and South Asia accounted for more than half of Kuwait's resident total [@AlShehabi2026Labour; @Fahad2026Invisible].

Bahrain, Qatar and the Trucial States followed a parallel trajectory, expanding more than fourfold from 145k in 1900AD to 210k in 1950AD and 625k in 1971AD. Bahrain—benefiting from early 1932AD oil revenues, established municipal schools and regional banking—anchored settlement in Manama (24k in 1900AD to 88,8k in the 1971AD census) and Muharraq (19k to 37,7k), supplemented by the planned housing settlement of Isa Town (founded 1968AD, 7,5k in 1971AD) [@AlShehabi2026Labour; @Rahman2025Family]. Qatar transformed around Doha (11k in 1900AD, dipping during the 1930s pearling depression before rising to 80k in the 1970AD census and 84k in 1971AD) and Al-Wakrah (13,7k), flanked by the oil enclaves of Dukhan (founded 1940AD, 4,3k) and Mesaieed (founded 1949AD, 6,3k), replacing coral-and-mud pearling quarters with concrete ministries and oil-service districts [@Eddisford2017Vernacular; @AlKuwari2025Tribal]. Across the Trucial Coast, Dubai expanded on re-export trade, port dredging of Dubai Creek and post-1966AD oil exports from 9k in 1900AD to 59k in the 1968AD census and 85k in 1971AD—overtaking Sharjah (14k in 1900AD to 31k in 1971AD)—while Abu Dhabi recovered from a post-pearling trough of 4k in 1950AD after 1962AD oil exports to 22k in 1968AD and 46k in 1971AD, flanked by Ras al-Khaimah (19,5k) and the interior oasis complex of Al-Ain (17,5k) [@Thiollet2020Cosmopolit; @Fabbri2021Urban].

In contrast to the rapid urban surge of the upper Gulf, the Sultanate of Muscat and Oman experienced prolonged stagnation during the first half of the twentieth century, rising slowly from 360k in 1900AD to 410k in 1932AD and 460k in 1950AD. Endemic poverty, the 1920AD Treaty of Seeb dividing the coast from the interior Imamate of Oman, high outward labour migration to Zanzibar and the oil-rich Gulf sheikhdoms, and restricted modern infrastructure depressed population growth until the late 1960s [@Szalai2019Small; @AlShehabi2026Labour]. Only after oil exports began in 1967AD and the 1970AD change of regime opened Oman to returning emigrants and state investment did population accelerate to 745k in 1971AD, concentrated in the twin capital harbour of Muscat and Muttrah (23k in 1900AD, easing to 21k in 1930AD before rising to 45k in 1971AD), the dhow-building port of Sur (18k), the Batinah littoral centres of Sohar (14k), Seeb (10,8k) and Barka (9,2k), and southern Dhofar around Salalah (12k), while interior *aflaj* towns such as Nizwa (12k) and Ibri (9,8k) remained modest [@Bosworth2007Historic].

## Urban Hierarchy and Rank-Size Restructuring (1900AD to 1971AD)

Across all 105 individually assessed settlements, the urban hierarchy exhibits a Zipf rank-size slope of $\alpha = 1{,}173$ ($R^2 = 0{,}941$), reflecting strong concentration in a handful of administrative capitals, pilgrimage sanctuaries and hydrocarbon ports alongside a structured tail of oasis market towns (Figure \ref{fig:sett-arabia}). In 1900AD, no settlement on the peninsula exceeded 70k inhabitants (led by Mecca at 70k, Aden at 44k in 1901AD and Al-Hudaydah at 40k); by 1971AD, five metropolises—Riyadh (420k), Jeddah (380k), Mecca (310k), Aden (235k) and Kuwait City (225k)—exceeded 200k, nine centres exceeded 100k and nineteen exceeded 50k.

<figure class="crd-figure-block" id="fig:sett-arabia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-arabian-peninsula-state-formation/fig4_arabian_peninsula_state_formation_settlements.png" alt="fig:sett-arabia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 4.</span> Rank-size distribution and urban hierarchy across 105 individually assessed Arabian Peninsula settlements through 1971AD.</figcaption>
</figure>

This restructuring also altered the functional geography of Arabian urbanism. At the turn of the century, the largest urban places were evenly split between historic religious-commercial hubs in the Hijaz, maritime entrepôts such as Aden and Al-Hudaydah, and traditional Najdi, Omani and Yemeni seats. By 1971AD, oil-port complexes (Dammam, Al-Khobar, Hawalli, Doha, Dubai, Abu Dhabi) and expanded capital bureaucracies dominated the upper ranks of the urban system, permanently tilting demographic weight from the agricultural terraces of the southwest toward the central Saudi plateau and the Persian Gulf littoral [@Fabbri2021Urban; @Rahman2023Social; @Lejeune2021Migration].

# Limitations

Four evidentiary and modelling constraints bear directly on the interpretation of these figures. First, pre-1970AD population totals for Saudi Arabia, North Yemen and Oman rest on retrospective reconciliation rather than contemporary scientific censuses. Because Saudi Arabia's first complete national census dates to September 1974 and North Yemen's to February 1975, regional totals for 1900AD, 1932AD and 1950AD carry unavoidable uncertainty bands of roughly 10% to 15%, particularly regarding nomadic pastoralist numbers before *hijar* settlement and post-1950AD urbanisation [@Tawati1976Civil; @Dureab2020Usefulness]. Second, Gulf municipal censuses before 1971AD faced rapid turnover among temporary expatriate labourers, domestic workers and undocumented cross-border Yemeni and South Asian migrants, risking slight under-enumeration in boomtown construction camps around Dhahran, Abu Dhabi and Dubai [@AlShehabi2026Labour; @Fahad2026Invisible].

Third, colonial and national boundary ambiguities affected desert frontier zones prior to 1971AD, notably the Saudi-Kuwaiti and Saudi-Iraqi Neutral Zones, the Buraimi oasis shared between Abu Dhabi and Oman, and the unmapped Empty Quarter borderlands. Allocating such sparsely populated pastures to fixed regional masks relies on post-1971AD administrative geometries that did not yet exist as surveyed lines in 1900AD. Fourth, because rapidly expanding urban corridors such as Riyadh, Jeddah, Kuwait City and the Dammam-Khobar-Dhahran triad outgrew their historic walled quarters after 1945AD, separating core municipal populations from adjacent oil-camp suburbs and newly settled Bedouin peripheries entails boundary conventions across successive censuses; seasonal fluctuations such as the *hajj* influx in Mecca and Medina or monsoon pearling crews in Bahrain and Qatar are smoothed into resident annual averages [@Mandeli2019Public; @Jeong2023Homeland; @Hindelang2021History].

# Conclusion

Between 1900AD and 1971AD, the Arabian Peninsula moved from a sparsely populated, predominantly rural-pastoral frontier of 5,49M inhabitants into a rapidly urbanising state system of 14,61M. While the monsoon-fed highlands of Yemen retained the largest single regional concentration throughout the period—growing from 2,85M to 6,35M—their relative share declined as Bedouin sedentarisation, Saudi administrative centralisation and Gulf petroleum extraction ignited explosive demographic growth across central Najd, Al-Hasa, Kuwait, Bahrain, Qatar and the Trucial States. By anchoring 105 individually assessed settlements and 233 modern geoBoundaries subadministrative units onto a unified non-stationary Matérn kriging surface with radial oasis kernels and strict pycnophylactic mass conservation, HANDBOOK captures both the persistent ecological contrast between fertile southwest terraces and barren desert basins and the profound twentieth-century shift toward capital metropolises and Gulf hydrocarbon ports.

# Appendix

Table \ref{tab:appendix-top20} lists the top twenty settlements across the Arabian Peninsula ranked by 1971AD population, tracing their longitudinal growth across four benchmark windows from 1900AD to 1971AD.

<figure class="crd-table-figure" id="tab:appendix-top20">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1900AD</th><th class="crd-th">1930-41AD</th><th class="crd-th">1950-55AD</th><th class="crd-th">1971AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">14k</td><td class="crd-td">30k</td><td class="crd-td">83k</td><td class="crd-td">420k</td></tr>
<tr><td class="crd-td"><strong>Jeddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28k</td><td class="crd-td">32k</td><td class="crd-td">90k</td><td class="crd-td">380k</td></tr>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">70k</td><td class="crd-td">80k</td><td class="crd-td">130k</td><td class="crd-td">310k</td></tr>
<tr><td class="crd-td"><strong>Aden</strong></td><td class="crd-td">Yemen</td><td class="crd-td">44k (1901)</td><td class="crd-td">48,3k (1931)</td><td class="crd-td">80,5k (1946)</td><td class="crd-td">235k</td></tr>
<tr><td class="crd-td"><strong>Kuwait City</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">32k</td><td class="crd-td">60k</td><td class="crd-td">95k</td><td class="crd-td">225k</td></tr>
<tr><td class="crd-td"><strong>Medina</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">35k</td><td class="crd-td">28k</td><td class="crd-td">52k</td><td class="crd-td">160k</td></tr>
<tr><td class="crd-td"><strong>Taif</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">8k</td><td class="crd-td">12k</td><td class="crd-td">32k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">35k</td><td class="crd-td">45k</td><td class="crd-td">55k (1955)</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>Hawalli</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">-</td><td class="crd-td">2,8k (1940)</td><td class="crd-td">6,8k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Al-Hofuf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24k</td><td class="crd-td">38k</td><td class="crd-td">55k</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Dammam</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">14k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Manama</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">24k</td><td class="crd-td">26,5k</td><td class="crd-td">39,6k</td><td class="crd-td">88,8k</td></tr>
<tr><td class="crd-td"><strong>Dubai</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">9k</td><td class="crd-td">22k (1940)</td><td class="crd-td">30k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Doha</strong></td><td class="crd-td">Qatar</td><td class="crd-td">11k</td><td class="crd-td">11k (1940)</td><td class="crd-td">15k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td"><strong>Salmiya</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">71k</td></tr>
<tr><td class="crd-td"><strong>Al-Hudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">40k</td><td class="crd-td">35k (1940)</td><td class="crd-td">42k (1955)</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Taiz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">10k</td><td class="crd-td">17k (1940)</td><td class="crd-td">25k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Buraydah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">9,5k</td><td class="crd-td">20k (1940)</td><td class="crd-td">26k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Tabuk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">1,5k</td><td class="crd-td">2,6k</td><td class="crd-td">4,5k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Abu Dhabi</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">5,5k</td><td class="crd-td">5,2k</td><td class="crd-td">4k</td><td class="crd-td">46k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Top twenty Arabian Peninsula settlements ranked by 1971AD population across benchmark periods, 1900AD to 1971AD.</figcaption>
</figure>

# Sources

<div id="refs"></div>
