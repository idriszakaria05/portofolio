const SITE = {
  name: "Idris Zakaria",
  role: "Automation & Digitalization",
  tagline: { id: "Saya membangun sistem otomasi dari panel kontrol, PLC dan firmware ESP32 sampai dashboard SCADA dan IoT.", en: "I build automation systems, from control panels, PLCs, and ESP32 firmware to SCADA and IoT dashboards." },
  theme: "gelap",                           // biru | gelap | hijau | ungu | sunset | minimal
  layout: "side",                          
  defaultLang: "id",                       

  photo: "assets/images/profile.jpg",
  cv: "assets/CV_Idris_Zakaria.pdf",

  email: "idriszakaria410@gmail.com",
  whatsapp: "6288803628092",
  linkedin: "https://linkedin.com/in/idriszakaria05",
  github: "https://github.com/idriszakaria05",
  instagram: "https://instagram.com/idriszkr",
  location: "Sidoarjo, Jawa Timur",

  about: [
    { id: "Lulusan D4 Teknik Otomasi, Teknik Kelistrikan Kapal, Politeknik Perkapalan Negeri Surabaya (IPK 3.44/4.00).", en: "D4 Automation Engineering graduate (Marine Electrical Engineering), Politeknik Perkapalan Negeri Surabaya, GPA 3.44/4.00." },
    { id: "Berpengalaman di pemrograman PLC Omron dan Siemens, perakitan panel kontrol dan IoT, instrumentasi, serta integrasi IoT. Dua tahun menjalankan proyek teknik mandiri di Z_Tech dan memimpin tim robotika tingkat nasional (2024/2025).", en: "Experienced in Omron and Siemens PLC programming, control and IoT panel assembly, instrumentation, and IoT integration. Two years of independent engineering projects at Z_Tech, and led a national-level robotics team (2024/2025)." },
    { id: "Terbiasa menangani siklus penuh: desain hardware, pemrograman, pengujian, sampai troubleshooting di lapangan.", en: "Used to the full cycle: hardware design, programming, testing, and field troubleshooting." }
  ],
  stats: [
    { n: "8+", l: { id: "Proyek otomasi & IoT", en: "Automation & IoT projects" } },
    { n: "2", l: { id: "Tahun proyek mandiri di Z_Tech", en: "Years of independent work at Z_Tech" } },
    { n: "12+", l: { id: "Anggota tim yang dipimpin", en: "Team members led" } },
    { n: "3.44", l: { id: "IPK D4 Teknik Otomasi", en: "D4 Automation GPA" } }
  ],

 
  projects: [
    { title: { id: "Panel Kontrol Sauna", en: "Sauna Control Panel" }, icon: "🔥", tags: ["ESP32", "Panel", "Safety"],
      desc: { id: "Panel kendali suhu dan timer digital berbasis ESP32 dengan fluktuasi suhu di bawah ±1°C dan proteksi overheating independen.", en: "ESP32-based temperature and timer panel with <±1°C fluctuation and independent overheating protection." },
      role: { id: "Perancang panel, pembuat firmware ESP32, dan penguji sistem proteksi.", en: "Panel designer, ESP32 firmware developer, and protection-system tester." },
      detail: { id: "Panel kendali suhu dan timer digital untuk sauna. Dilengkapi proteksi overheating independen yang memutus daya dalam kurang dari 0,5 detik, terpisah dari program utama. Fluktuasi suhu dijaga di bawah ±1°C.", en: "Digital temperature and timer control panel for a sauna. It has an independent overheating protection that cuts power in under 0.5 s, separate from the main program. Temperature fluctuation is kept below ±1°C." },
      images: ["assets/images/projects/sauna/1.jpg", "assets/images/projects/sauna/2.jpg", "assets/images/projects/sauna/3.jpg"],
      video: "",   
      link: "https://youtube.com/shorts/wM-KELbzUvw" },
    { title: { id: "Web-Based SCADA Vibrasi Motor 3-Phase", en: "Web-Based SCADA for 3-Phase Motor Vibration" }, icon: "📈", tags: ["Node-RED", "ANFIS", "SCADA"],
      desc: { id: "Dashboard predictive maintenance real-time 24/7 yang mendeteksi anomali frekuensi.", en: "Real-time 24/7 predictive maintenance dashboard that detects frequency anomalies." },
      role: { id: "Perancang dashboard, integrasi data sensor, dan model ANFIS.", en: "Dashboard designer, sensor data integration, and ANFIS model." },
      detail: { id: "Dashboard berbasis Node-RED dan ANFIS yang memantau vibrasi motor induksi 3-phase secara real-time 24/7, mendeteksi anomali frekuensi, dan mempercepat penanganan maintenance hingga 30%.", en: "A Node-RED and ANFIS dashboard that monitors 3-phase induction motor vibration in real time, 24/7, detects frequency anomalies, and speeds up maintenance response by up to 30%." },
      images: ["assets/images/projects/scada-vibrasi/1.jpg", "assets/images/projects/scada-vibrasi/2.jpg", "assets/images/projects/scada-vibrasi/3.jpg"],
      video: "",  
      link: "https://youtu.be/9YlalJgK26M" },
    { title: { id: "Monitoring Oval Gear Flow Meter IoT", en: "IoT Oval Gear Flow Meter Monitoring" }, icon: "💧", tags: ["ESP32", "IoT", "Cloud"],
      desc: { id: "Data flow rate dikirim wireless ke server tiap 1 detik, akurasi transmisi 99,8%.", en: "Flow-rate data sent wirelessly to a server every second, 99.8% transmission accuracy." },
      role: { id: "Integrasi sensor, firmware ESP32, dan pengiriman data ke server.", en: "Sensor integration, ESP32 firmware, and server data transmission." },
      detail: { id: "Sensor oval gear meter dihubungkan ke modul ESP32 yang mengirim data flow rate fluida secara wireless ke server cloud tiap 1 detik, dengan akurasi transmisi 99,8% tanpa data loss.", en: "An oval gear meter sensor is connected to an ESP32 module that sends fluid flow-rate data wirelessly to a cloud server every second, with 99.8% transmission accuracy and no data loss." },
      images: ["assets/images/projects/flowmeter/1.jpg", "assets/images/projects/flowmeter/2.jpg", "assets/images/projects/flowmeter/3.jpg"],
      video: "",   
      link: "https://youtu.be/mbDicDiB8oA" },
    { title: { id: "Mesin Efill PLC & SCADA", en: "Efill Machine with PLC & SCADA" }, icon: "🧴", tags: ["PLC", "SCADA"],
      desc: { id: "Kontrol PLC dan SCADA untuk mesin pengisi 4-nozzle, siklus 25% lebih efisien.", en: "PLC and SCADA control for a 4-nozzle filling machine, 25% more efficient cycle." },
      role: { id: "Pemrogram logika PLC dan perancang antarmuka SCADA.", en: "PLC logic programmer and SCADA interface designer." },
      detail: { id: "Sistem kontrol logika PLC dan antarmuka SCADA pada mesin pengisi cairan otomatis 4-nozzle. Efisiensi siklus pengisian naik hingga 25% dan error volume ditekan di bawah ±0,5%.", en: "PLC control logic and a SCADA interface for an automatic 4-nozzle liquid filling machine. Filling cycle efficiency rose by up to 25% and volume error was kept below ±0.5%." },
      images: ["assets/images/projects/efill/1.jpg", "assets/images/projects/efill/2.jpg", "assets/images/projects/efill/3.jpg"],
      video: "",   
      link: "https://youtu.be/4U3fOGiSo2c" },
    { title: { id: "Neurostim untuk Terapi Pasien Stroke", en: "Neurostim for Stroke Patient Therapy" }, icon: "🧠", tags: ["Mikrokontroler", "Biomedis"],
      desc: { id: "Stimulator saraf portabel dengan frekuensi 1–150 Hz dan arus 0–100 mA.", en: "Portable nerve stimulator, 1–150 Hz frequency and 0–100 mA current." },
      role: { id: "Perancang rangkaian dan pemrogram mikrokontroler.", en: "Circuit designer and microcontroller programmer." },
      detail: { id: "Perangkat stimulator saraf portabel dengan kendali frekuensi 1–150 Hz dan intensitas arus presisi 0–100 mA. Output pulsa 100% stabil pada pengujian terapi pasien pascastroke.", en: "A portable nerve stimulator with 1–150 Hz frequency control and precise 0–100 mA current intensity. Pulse output was 100% stable in post-stroke patient therapy tests." },
      images: ["assets/images/projects/neurostim/1.jpg", "assets/images/projects/neurostim/2.jpg", "assets/images/projects/neurostim/3.jpg"],
      video: "",   
      link: "https://youtu.be/4U3fOGiSo2c" },
    { title: { id: "Mesin AutoCup Sealer", en: "AutoCup Sealer Machine" }, icon: "🥤", tags: ["Elektro-pneumatik", "Mekanik"],
      desc: { id: "Mesin pengemas minuman otomatis, kapasitas 600 cup/jam.", en: "Automatic beverage packaging machine, 600 cups/hour capacity." },
      role: { id: "Rancang bangun penuh: mekanik, elektro-pneumatik, dan mikrokontroler.", en: "Full build: mechanical, electro-pneumatic, and microcontroller." },
      detail: { id: "Mesin pengemas minuman otomatis hasil rancang bangun penuh. Kapasitas produksi 600 cup/jam dengan tingkat kegagalan penyegelan di bawah 1%.", en: "An automatic beverage cup sealing machine, designed and built end to end. Production capacity is 600 cups/hour with a sealing failure rate below 1%." },
      images: ["assets/images/projects/autocup/1.jpg", "assets/images/projects/autocup/2.jpg", "assets/images/projects/autocup/3.jpg"],
      video: "",   
      link: "https://youtube.com/shorts/Z_TqEzfv1rw" },
    { title: { id: "Modul Autogate 2-Lane", en: "2-Lane Autogate Module" }, icon: "🚧", tags: ["RFID", "Sensor", "Safety"],
      desc: { id: "Kontrol gerbang otomatis 2 jalur dengan RFID, respon buka <1,5 detik.", en: "2-lane automatic gate control with RFID, opening response under 1.5 s." },
      role: { id: "Perancang dan perakit sistem kontrol gerbang.", en: "Designer and assembler of the gate control system." },
      detail: { id: "Sistem kontrol gerbang otomatis 2 jalur yang memadukan vehicle detector, proteksi infrared safety, dan reader RFID. Waktu respon pembukaan kurang dari 1,5 detik.", en: "A 2-lane automatic gate control system combining a vehicle detector, infrared safety protection, and an RFID reader. Opening response time is under 1.5 seconds." },
      images: ["assets/images/projects/autogate/1.jpg", "assets/images/projects/autogate/2.jpg", "assets/images/projects/autogate/3.jpg"],
      video: "",  
      link: "https://youtube.com/shorts/A41z0NH_Wt0" },
    { title: { id: "Auto Level Shifter Derailleur Sepeda", en: "Auto Level Shifter for Mountain Bike Derailleur" }, icon: "🚵", tags: ["IMU", "Hall effect"],
      desc: { id: "Perpindahan gigi otomatis dari sensor kemiringan dan kecepatan, akurasi 95%.", en: "Automatic gear shifting from tilt and speed sensors, 95% accuracy." },
      role: { id: "Perancang sistem dan pemrogram mikrokontroler.", en: "System designer and microcontroller programmer." },
      detail: { id: "Sistem perpindahan gigi otomatis yang membaca sensor kemiringan (IMU) dan kecepatan (hall effect) tiap 100 ms, lalu mengatur rasio transmisi derailleur dengan akurasi respons 95%.", en: "An automatic gear-shifting system that reads tilt (IMU) and speed (hall effect) sensors every 100 ms, then adjusts the derailleur transmission ratio with 95% response accuracy." },
      images: ["assets/images/projects/derailleur/1.jpg", "assets/images/projects/derailleur/2.jpg", "assets/images/projects/derailleur/3.jpg"],
      video: "",   
      link: "https://youtube.com/shorts/BDDZZwsquDM" }
  ],

  experience: [
    { when: "Sep 2025 – Jan 2026", title: { id: "Automation & Digitalization (Magang)", en: "Automation & Digitalization (Intern)" }, org: "PT. Indo Prima Gemilang, Nganjuk", file: "assets/certificates/magang-indo-prima.pdf" /* assets/certificates/magang-indo-prima.pdf */,
      points: { id: ["Merancang sistem interlock (jumping process) untuk mencegah bypass ilegal pada rute produksi.","Mendukung pengembangan model machine learning: preprocessing data, pengambilan data sensor, integrasi ke sistem.","Mengembangkan computer vision berbasis YOLO untuk inspeksi kualitas fuse box.","Fabrikasi, pemrograman, dan pengujian wiring & continuity pada mesin tester harness."],
               en: ["Designed an interlock system (jumping process) to prevent illegal bypass of production routes.","Supported machine learning development: data preprocessing, sensor data collection, system integration.","Developed YOLO-based computer vision for fuse box quality inspection.","Built, programmed, and tested (wiring & continuity) a harness tester machine."] } },
    { when: "2022 – 2025", title: { id: "Ketua Tim Robot Search and Rescue", en: "Team Leader, Search and Rescue Robot" }, org: "Politeknik Perkapalan Negeri Surabaya", file: "assets/certificates/tim-robot-sar.jpg" /* assets/certificates/tim-robot-sar.jpg */,
      points: { id: ["Memimpin 12+ anggota lintas divisi untuk robot hexapod, dari perencanaan sampai kompetisi.","Mengembangkan kinematika jalan, riset sensor jarak dan gyro, serta program vision untuk mendeteksi korban."],
               en: ["Led 12+ cross-division members on a hexapod robot, from planning to competition.","Developed walking kinematics, distance and gyro sensor research, and a vision program to detect victims."] } },
    { when: { id: "2 tahun", en: "2 years" }, title: { id: "Engineer Independen", en: "Independent Engineer" }, org: "Z_Tech", file: "assets/certificates/z-tech.jpg  " /* assets/certificates/z-tech.jpg */,
      points: { id: ["Menangani proyek teknik end-to-end untuk klien: hardware, firmware, dan dashboard."], en: ["Delivered end-to-end engineering projects for clients: hardware, firmware, and dashboards."] } }
  ],

  skills: [
    { title: { id: "Otomasi & Kontrol", en: "Automation & Control" }, items: ["PLC Ladder (Omron, Siemens)", "SCADA", { id: "Panel Kontrol & Wiring", en: "Control Panel & Wiring" }, { id: "Instrumentasi", en: "Instrumentation" }] },
    { title: "Embedded & IoT", items: ["ESP32", "Arduino", "PlatformIO", "PCB Design"] },
    { title: "Software", items: ["Python", "Node-RED", "Web Development", "Computer Vision (YOLO)", "Fusion 360 2D/3D"] }
  ],

  
  education: [{ title: { id: "D4 Teknik Otomasi", en: "D4 Automation Engineering" }, sub: "Politeknik Perkapalan Negeri Surabaya · 2022–2026 · 3.44", file: "assets/certificates/ijazah.pdf"}],
  awards: [
    { title: { id: "Juara 1 InnoWorks", en: "1st Place, InnoWorks" }, sub: "2025", file: "assets/certificates/innoworks.jpg" },
    { title: { id: "Juara 3 ICT Business Development, Tech Enthusiast Day", en: "3rd Place, ICT Business Development, Tech Enthusiast Day" }, sub: "2024", file: "assets/certificates/tech-ict-2024.jpg" },
    { title: { id: "Juara 2 Science Project, Tech Enthusiast Day", en: "2nd Place, Science Project, Tech Enthusiast Day" }, sub: "2023", file: "assets/certificates/tech-science-2023.jpg"},
    { title: { id: "Juara 2 LKTIN, Ensight", en: "2nd Place, LKTIN, Ensight" }, sub: "2023", file: "assets/certificates/lktin-ensight-2023.jpg"}
  ],
  certs: [
    { title: { id: "Sertifikasi Uji Kompetensi Engineer, BNSP", en: "Engineer Competency Certification, BNSP" }, sub: "2026", file: "assets/certificates/bnsp.jpg"},
    { title: { id: "Pelatihan Kalibrasi ISO 17025", en: "ISO 17025 Calibration Training" }, sub: "2026", file: "assets/certificates/iso17025.jpg"},
    { title: "Entrepreneurship Development Program, Wadhwani Foundation", sub: "2026", file: "assets/certificates/wadhwani.jpg"},
    { title: "TOEIC (565)", sub: "2026", file: "assets/certificates/toeic.jpg"}
  ]
};

const UI = {
  id: { projects:"Proyek", experience:"Pengalaman", skills:"Skill", contact:"Kontak", about:"Tentang saya", awards:"Pendidikan, penghargaan & sertifikasi",
        viewProjects:"Lihat proyek", cv:"Download CV", edu:"Pendidikan", awd:"Penghargaan", cert:"Sertifikasi", myRole:"Peran saya", aboutProj:"Tentang proyek",
        details:"Lihat detail", openLink:"Buka link proyek", cta:"", loc:"Lokasi", close:"Tutup", viewCert:"Lihat sertifikat", openNew:"Buka di tab baru" },
  en: { projects:"Projects", experience:"Experience", skills:"Skills", contact:"Contact", about:"About me", awards:"Education, awards & certifications",
        viewProjects:"View projects", cv:"Download CV", edu:"Education", awd:"Awards", cert:"Certifications", myRole:"My role", aboutProj:"About the project",
        details:"View details", openLink:"Open project link", cta:"Have an automation, IoT, or control panel project? Get in touch.", loc:"Location", close:"Close", viewCert:"View certificate", openNew:"Open in new tab" }
};
