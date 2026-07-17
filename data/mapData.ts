export interface HTMItem {
  label: string;
  price: string;
}

export interface Spot {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [Latitude, Longitude]
  gmapsUrl: string;
  zoom: number;
  category: "wahana" | "caffe" | "fasilitas";
  images: string[];
}

export const spotsData: Spot[] = [
  {
    id: "1",
    name: "Loket Tiket & Informasi",
    description:
      "Tempat pembelian dan penukaran tiket sekaligus pusat informasi mengenai wahana, fasilitas, jadwal operasional, dan layanan pengunjung di Mikutopia.",
    coordinates: [-7.8095355964464845, 112.5299340353814],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8095355964464845, 112.5299340353814",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "2",
    name: "Mushola",
    description:
      "Tempat ibadah bagi pengunjung yang ingin melaksanakan salat dengan tenang dan nyaman selama berada di kawasan Mikutopia.",
    coordinates: [-7.809714252780397, 112.5304874844475],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809714252780397, 112.5304874844475",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "3",
    name: "P3K (Sebelah Driver Rest Room)",
    description:
      "Pos pertolongan pertama bagi pengunjung yang mengalami cedera ringan, gangguan kesehatan, atau membutuhkan bantuan medis.",
    coordinates: [-7.809903634059449, 112.53082272252465],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809903634059449, 112.53082272252465",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "4",
    name: "Area Parkir Motor",
    description:
      "Area parkir khusus kendaraan roda dua yang disediakan bagi pengunjung Mikutopia.",
    coordinates: [-7.810442390956049, 112.53086490170607],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.810442390956049, 112.53086490170607",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "5",
    name: "Area Parkir Mobil",
    description:
      "Area parkir khusus mobil pribadi yang tertata untuk memudahkan pengunjung saat datang dan meninggalkan kawasan Mikutopia.",
    coordinates: [-7.810703470353992, 112.53048194043525],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.810703470353992, 112.53048194043525",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "6",
    name: "Area Parkir Bis",
    description:
      "Area parkir khusus bus dan kendaraan rombongan dengan ruang yang memadai untuk menaikkan dan menurunkan penumpang.",
    coordinates: [-7.810766601715004, 112.5308247020677],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.810766601715004, 112.5308247020677",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "7",
    name: "Toilet 6 (Belakang Driver Rest Room)",
    description:
      "Fasilitas toilet umum yang bersih dan nyaman bagi pengunjung serta dilengkapi area cuci tangan.",
    coordinates: [-7.80970172567823, 112.5307315926391],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.80970172567823, 112.5307315926391",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "8",
    name: "Toilet 1 (Sebelah Cafe Lingzhi)",
    description:
      "Fasilitas toilet umum yang bersih dan nyaman, dilengkapi area cuci tangan, serta terletak di dekat area food court.",
    coordinates: [-7.8091441899761564, 112.52972839621454],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8091441899761564, 112.52972839621454",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "9",
    name: "Toilet 2 (Sebelah Tiram – Busy Cowboy)",
    description:
      "Fasilitas toilet umum yang bersih dan nyaman, dilengkapi area cuci tangan, serta terletak di dekat wahana tiram dan matsutake",
    coordinates: [-7.808289186022769, 112.52955696647678],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808289186022769, 112.52955696647678",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "10",
    name: "Toilet 5 (Sebelah Truffle – Bom-Bom Car)",
    description:
      "Fasilitas toilet umum yang bersih dan nyaman bagi pengunjung serta dilengkapi area cuci tangan.",
    coordinates: [-7.8085003803415125, 112.53054332288387],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8085003803415125, 112.53054332288387",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "11",
    name: "Toilet 4 (Bawah Lactarius – Bianglala)",
    description:
      "Fasilitas toilet umum yang bersih dan nyaman bagi pengunjung serta dilengkapi area cuci tangan.",
    coordinates: [-7.807973696913775, 112.53094125494312],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807973696913775, 112.53094125494312",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "12",
    name: "Ruang Laktasi (Sebelah Loket)",
    description:
      "Ruangan khusus yang aman, nyaman, dan privat bagi ibu untuk menyusui atau memenuhi kebutuhan bayi, terletak di area depan dekat loket.",
    coordinates: [-7.809610258670143, 112.52998740038642],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809610258670143, 112.52998740038642",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "13",
    name: "Penitipan Barang",
    description:
      "Fasilitas untuk menyimpan barang bawaan sementara agar pengunjung dapat menikmati wahana dengan lebih aman dan nyaman.",
    coordinates: [-7.8095653793177044, 112.53023350845503],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8095653793177044, 112.53023350845503",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "14",
    name: "Area Gathering 1 (Aspergillus)",
    description:
      "Area berkumpul untuk keluarga, sekolah, komunitas, dan rombongan dalam melakukan pengarahan, beristirahat, atau menunggu anggota kelompok.",
    coordinates: [-7.809118246338867, 112.52989207280568],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809118246338867, 112.52989207280568",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "15",
    name: "Area Gathering 2 (Rivulosa)",
    description:
      "Area berkumpul untuk keluarga, sekolah, komunitas, dan rombongan dalam melakukan pengarahan, beristirahat, atau menunggu anggota kelompok.",
    coordinates: [-7.808999789760043, 112.52991460797314],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808999789760043, 112.52991460797314",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "16",
    name: "Area Gathering 3 (Onusta)",
    description:
      "Area berkumpul untuk keluarga, sekolah, komunitas, dan rombongan dalam melakukan pengarahan, beristirahat, atau menunggu anggota kelompok.",
    coordinates: [-7.8088396852639015, 112.52988309201871],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8088396852639015, 112.52988309201871",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "17",
    name: "Area Gathering 4 (Spreta)",
    description:
      "Area berkumpul untuk keluarga, sekolah, komunitas, dan rombongan dalam melakukan pengarahan, beristirahat, atau menunggu anggota kelompok.",
    coordinates: [-7.80868821704833, 112.52987303373247],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.80868821704833, 112.52987303373247",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "18",
    name: "Area Gathering 5 (Boletus)",
    description:
      "Area berkumpul untuk keluarga, sekolah, komunitas, dan rombongan dalam melakukan pengarahan, beristirahat, atau menunggu anggota kelompok.",
    coordinates: [-7.808577937524032, 112.52983615335934],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808577937524032, 112.52983615335934",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "19",
    name: "Area Gathering 6 (Sebelah Oyster Coaster – Roller Coaster)",
    description:
      "Area berkumpul untuk keluarga, sekolah, komunitas, dan rombongan dalam melakukan pengarahan, beristirahat, atau menunggu anggota kelompok.",
    coordinates: [-7.808423379876274, 112.53132986046732],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808423379876274, 112.53132986046732",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "20",
    name: "Smoking Area 1 (Boletus)",
    description:
      "Area khusus merokok yang terletak di bagian belakang area gathering untuk menjaga kenyamanan pengunjung.",
    coordinates: [-7.808508217023318, 112.5299850717761],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808508217023318, 112.5299850717761",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "21",
    name: "Driver Rest Room",
    description:
      "Area istirahat khusus pengemudi rombongan agar dapat beristirahat dengan nyaman sebelum melanjutkan perjalanan.",
    coordinates: [-7.809898982860404, 112.53075833744178],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809898982860404, 112.53075833744178",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "22",
    name: "Ostreatus – Istana Balon",
    description:
      "Wahana bermain berbentuk istana balon yang menawarkan aktivitas melompat dan bergerak dengan suasana ceria bagi anak-anak.",
    coordinates: [-7.808914086012019, 112.52973078290046],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808914086012019, 112.52973078290046",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "23",
    name: "Portobello – Trampolin",
    description:
      "Area trampolin untuk melompat, bergerak aktif, dan menikmati permainan yang menyenangkan.",
    coordinates: [-7.808672621896301, 112.52968931177823],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808672621896301, 112.52968931177823",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "24",
    name: "Tiram – Busy Cowboy",
    description:
      "Wahana bertema koboi yang membawa pengunjung berputar dalam suasana seru dan menyenangkan.",
    coordinates: [-7.808403051054199, 112.52966636615105],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808403051054199, 112.52966636615105",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "25",
    name: "Matsutake – Watermelon Chair",
    description:
      "Wahana kursi bertema semangka dengan desain ceria yang memberikan pengalaman bermain menyenangkan.",
    coordinates: [-7.80848270735792, 112.52978631012438],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.80848270735792, 112.52978631012438",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "26",
    name: "Neurospora – Octopus",
    description:
      "Wahana berbentuk gurita yang membawa pengunjung bergerak naik, turun, dan berputar secara bersamaan.",
    coordinates: [-7.808464425413712, 112.52985880374796],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808464425413712, 112.52985880374796",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "27",
    name: "Agaricus – Playground Indoor",
    description:
      "Area bermain dalam ruangan dengan berbagai permainan anak yang nyaman dan terlindung dari panas maupun hujan.",
    coordinates: [-7.808315007665705, 112.52966006380872],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808315007665705, 112.52966006380872",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "28",
    name: "Zygomycota – Rabbit Park",
    description:
      "Area interaksi bertema kelinci yang memberikan pengalaman edukatif dan menyenangkan bagi anak-anak dan keluarga.",
    coordinates: [-7.808263536744047, 112.52986972799911],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808263536744047, 112.52986972799911",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "29",
    name: "Meriplus – Golfcar",
    description:
      "Wahana berkendara menggunakan kendaraan mini bergaya golf car pada lintasan yang telah disediakan.",
    coordinates: [-7.808065007377382, 112.52999960838682],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808065007377382, 112.52999960838682",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "30",
    name: "Saccharomyces – Playground Outdoor",
    description:
      "Area bermain luar ruangan yang menyediakan berbagai aktivitas fisik dan permainan untuk anak-anak.",
    coordinates: [-7.807925302449038, 112.52979736563377],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807925302449038, 112.52979736563377",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "31",
    name: "Brumale – Go Kart",
    description:
      "Wahana balap go-kart yang mengajak pengunjung merasakan pengalaman berkendara dan berkompetisi di lintasan.",
    coordinates: [-7.80749992283028, 112.52989885221402],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.80749992283028, 112.52989885221402",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "32",
    name: "Shimeji – Wanky Worm Train",
    description:
      "Kereta mini bertema ulat yang berjalan mengelilingi lintasan dan cocok dinikmati oleh anak-anak bersama keluarga.",
    coordinates: [-7.8075270316893155, 112.52964282056654],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8075270316893155, 112.52964282056654",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "33",
    name: "Silvicola – Waterpark",
    description:
      "Area permainan air dengan berbagai fasilitas yang menyegarkan dan menyenangkan bagi anak-anak serta keluarga.",
    coordinates: [-7.807484432401996, 112.52980894792589],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807484432401996, 112.52980894792589",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "34",
    name: "Bovista – Rumah Hantu",
    description:
      "Wahana bertema horor dengan suasana gelap, kejutan, dan dekorasi menyeramkan yang menguji keberanian pengunjung.",
    coordinates: [-7.807445705738417, 112.52993207766438],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807445705738417, 112.52993207766438",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "35",
    name: "Ascomycota – Break Star Dance",
    description:
      "Wahana dengan gondola yang berputar dan berubah arah secara dinamis, memberikan sensasi seperti berdansa.",
    coordinates: [-7.807512544881149, 112.53043232919931],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807512544881149, 112.53043232919931",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "36",
    name: "Obliquus – Passion Jump",
    description:
      "Wahana yang membawa pengunjung berputar sambil bergerak naik dan turun dalam suasana seru.",
    coordinates: [-7.807751643232469, 112.5305594553417],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807751643232469, 112.5305594553417",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "37",
    name: "Bassiana – Turn Table",
    description:
      "Wahana berbentuk piringan dengan deretan kursi yang berputar serta bergerak naik dan turun.",
    coordinates: [-7.807709188075156, 112.53075151219606],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807709188075156, 112.53075151219606",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "38",
    name: "Trametes – Flying Chair",
    description:
      "Wahana kursi gantung yang berputar hingga terayun ke arah luar, memberikan sensasi terbang di udara.",
    coordinates: [-7.807485971335728, 112.53059057945926],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807485971335728, 112.53059057945926",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "39",
    name: "Poria – Mega Disco",
    description:
      "Wahana berbentuk piringan besar yang berputar sambil bergerak miring serta naik dan turun.",
    coordinates: [-7.807342474585636, 112.5307085965263],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807342474585636, 112.5307085965263",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "40",
    name: "Camemberti – Flying Tower",
    description:
      "Wahana kursi gantung yang naik mengelilingi menara sambil berputar di ketinggian.",
    coordinates: [-7.807438138840265, 112.53082393158789],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807438138840265, 112.53082393158789",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "41",
    name: "Lactarius – Bianglala",
    description:
      "Wahana roda raksasa yang menawarkan pengalaman santai sekaligus pemandangan kawasan Mikutopia dari ketinggian.",
    coordinates: [-7.807807509531002, 112.53096340705163],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807807509531002, 112.53096340705163",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "42",
    name: "Tubulosa – Flying Bee",
    description:
      "Wahana bertema lebah yang bergerak naik, turun, dan berputar sehingga cocok dinikmati bersama keluarga.",
    coordinates: [-7.808119682646415, 112.5313006082372],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808119682646415, 112.5313006082372",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "43",
    name: "Oyster Coaster – Roller Coaster",
    description:
      "Wahana kereta luncur dengan lintasan berkelok yang memberikan sensasi cepat, menegangkan, dan penuh keseruan.",
    coordinates: [-7.808362967435443, 112.53082100410447],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808362967435443, 112.53082100410447",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "44",
    name: "Rusulla – Happy Car",
    description:
      "Wahana berbentuk mobil mini yang bergerak berputar dan bergoyang, memberikan pengalaman seru dan menyenangkan.",
    coordinates: [-7.808612376956659, 112.53096086226586],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808612376956659, 112.53096086226586",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "45",
    name: "Auricularia – Pirate Ship",
    description:
      "Wahana berbentuk kapal bajak laut yang berayun ke depan dan belakang untuk memberikan sensasi mendebarkan.",
    coordinates: [-7.808379268738212, 112.53076670646819],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808379268738212, 112.53076670646819",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "46",
    name: "Caloplaca – Tower Drop",
    description:
      "Wahana menara yang membawa pengunjung naik sebelum turun secara cepat dan memberikan sensasi memacu adrenalin.",
    coordinates: [-7.808345036118304, 112.53066304730159],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808345036118304, 112.53066304730159",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "47",
    name: "Nameko – Gabonese",
    description:
      "Wahana kendaraan mini yang dapat dinaiki bersama keluarga dengan gerakan santai dan menyenangkan.",
    coordinates: [-7.808211102750889, 112.5305288591559],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808211102750889, 112.5305288591559",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "48",
    name: "Truffle – Bom-Bom Car",
    description:
      "Wahana mobil listrik yang dapat dikendarai untuk berkeliling dan saling beradu secara aman di dalam arena.",
    coordinates: [-7.808343124676138, 112.53052447830382],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808343124676138, 112.53052447830382",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "49",
    name: "Crispa – Carousel",
    description:
      "Wahana komidi putar dengan kendaraan dan ornamen menarik yang bergerak mengelilingi arena.",
    coordinates: [-7.808330455168656, 112.53029003025634],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808330455168656, 112.53029003025634",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "50",
    name: "Morchella – Pendulum",
    description:
      "Wahana berbentuk pendulum yang berayun dari sisi ke sisi serta memberikan sensasi ketinggian dan kecepatan.",
    coordinates: [-7.80851336703126, 112.53030362339909],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.80851336703126, 112.53030362339909",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "51",
    name: "Merchandise Hirsute",
    description:
      "Toko yang menyediakan berbagai suvenir, aksesori, dan produk khas Mikutopia sebagai kenang-kenangan.",
    coordinates: [-7.809320773450869, 112.530043000807],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809320773450869, 112.530043000807",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "52",
    name: "Merchandise Sinensis",
    description:
      "Toko yang menyediakan berbagai suvenir, aksesori, dan produk khas Mikutopia sebagai kenang-kenangan.",
    coordinates: [-7.809251014242817, 112.53007384806567],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809251014242817, 112.53007384806567",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "53",
    name: "Cafe Enoki",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.809140202217053, 112.52985988238873],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809140202217053, 112.52985988238873",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "54",
    name: "Cafe Lingzhi",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.809068422546487, 112.52976059691028],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809068422546487, 112.52976059691028",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "55",
    name: "Cafe Micoriza",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.8087865205214815, 112.52971779998306],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8087865205214815, 112.52971779998306",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "56",
    name: "Cafe Shitake",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.8082824979309216, 112.52963133004373],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8082824979309216, 112.52963133004373",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "57",
    name: "Cafe Mellea",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.807939304517873, 112.53032336110655],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807939304517873, 112.53032336110655",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "58",
    name: "Cafe Kokacap",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.807675972923422, 112.53059560033718],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807675972923422, 112.53059560033718",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "59",
    name: "Minimart Tsugae",
    description:
      "Toko yang menyediakan minuman, makanan ringan, kebutuhan pribadi, dan perlengkapan praktis bagi pengunjung.",
    coordinates: [-7.807459516400737, 112.53054701981601],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807459516400737, 112.53054701981601",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "60",
    name: "Cafe Lucidum",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.807659534555142, 112.5311557651895],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807659534555142, 112.5311557651895",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "61",
    name: "Cafe Porcini",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.808093817750622, 112.53126457474016],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808093817750622, 112.53126457474016",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "62",
    name: "Cafe Muscaria",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.808455038622844, 112.53064383366967],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808455038622844, 112.53064383366967",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "63",
    name: "Cafe Grifola",
    description:
      "Tempat bersantai yang menyediakan berbagai pilihan makanan dan minuman bagi pengunjung.",
    coordinates: [-7.808756871675095, 112.5313631068441],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808756871675095, 112.5313631068441",
    category: "caffe",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "64",
    name: "Pusat Oleh-Oleh",
    description:
      "Tempat berbelanja berbagai makanan, produk lokal, suvenir, dan buah tangan untuk dibawa pulang.",
    coordinates: [-7.809295024254639, 112.53076405081491],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809295024254639, 112.53076405081491",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "65",
    name: "Titik Kumpul (Dekat Parkiran)",
    description:
      "Lokasi yang mudah dikenali sebagai tempat berkumpul kembali dengan rombongan serta menjadi titik evakuasi saat keadaan darurat.",
    coordinates: [-7.810220352580671, 112.53045332746169],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.810220352580671, 112.53045332746169",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "66",
    name: "Titik Kumpul (Dekat Cafe Mellea)",
    description:
      "Lokasi yang mudah dikenali sebagai tempat berkumpul kembali dengan rombongan serta menjadi titik evakuasi saat keadaan darurat.",
    coordinates: [-7.807861103031882, 112.53022348636331],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807861103031882, 112.53022348636331",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "67",
    name: "Titik Kumpul (Deket Cafe Grifola)",
    description:
      "Lokasi yang mudah dikenali sebagai tempat berkumpul kembali dengan rombongan serta menjadi titik evakuasi saat keadaan darurat.",
    coordinates: [-7.8087253, 112.5306365],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8087253, 112.5306365",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "68",
    name: "Titik Kumpul (Dekat Gate Masuk)",
    description:
      "Lokasi yang mudah dikenali sebagai tempat berkumpul kembali dengan rombongan serta menjadi titik evakuasi saat keadaan darurat.",
    coordinates: [-7.809544980390296, 112.53063583802916],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809544980390296, 112.53063583802916",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "69",
    name: "Photo Box Studio",
    description:
      "Studio foto dengan pilihan latar dan konsep menarik untuk mengabadikan momen bersama keluarga atau teman.",
    coordinates: [-7.807643412581862, 112.5298861766613],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.807643412581862, 112.5298861766613",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "70",
    name: "Video 360",
    description:
      "Fasilitas pembuatan video dari sudut 360 derajat yang menghasilkan dokumentasi unik, dinamis, dan menarik.",
    coordinates: [-7.8086682, 112.53055],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8086682, 112.5305500",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "71",
    name: "Budidaya Jamur",
    description:
      "Area edukasi yang memperkenalkan proses penanaman, perawatan, dan pemanfaatan berbagai jenis jamur.",
    coordinates: [-7.8076471, 112.5302436],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.8076471, 112.5302436",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "72",
    name: "Miku Theater",
    description:
      "Area pertunjukan dan hiburan yang menyajikan tayangan atau kegiatan menarik bagi pengunjung Mikutopia.",
    coordinates: [-7.808756871675095, 112.5313631068441],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808756871675095, 112.5313631068441",
    category: "wahana",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "73",
    name: "Ruang Staff (Staff Only)",
    description:
      "Ruangan operasional khusus petugas Mikutopia yang hanya dapat dimasuki oleh staf berkepentingan.",
    coordinates: [-7.809467325806254, 112.53073655147439],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.809467325806254, 112.53073655147439",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "74",
    name: "Food Court",
    description:
      "Area tempat duduk dan makan bersama, dengan pilihan makanan dan minuman dari kafe di kawasan Mikutopia serta hiburan live music.",
    coordinates: [-7.808920734019314, 112.52981000182383],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808920734019314, 112.52981000182383",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "75",
    name: "Ruang P3K & Laktasi (Dekat Morchella – Pendulum)",
    description:
      "Ruangan terpadu yang menyediakan layanan pertolongan pertama serta tempat nyaman dan privat bagi ibu untuk menyusui atau merawat bayi.",
    coordinates: [-7.808836102177724, 112.53055575826045],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.808836102177724, 112.53055575826045",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
  {
    id: "76",
    name: "Masjid",
    description:
      "Fasilitas ibadah bagi pengunjung dan rombongan untuk melaksanakan salat serta kegiatan keagamaan dengan nyaman dan tertib.",
    coordinates: [-7.80763012585445, 112.52988885887773],
    gmapsUrl:
      "https://www.google.com/maps/search/?api=1&query=-7.80763012585445, 112.52988885887773",
    category: "fasilitas",
    zoom: 21,
    images: ["/wahana/crispa.webp"],
  },
];
