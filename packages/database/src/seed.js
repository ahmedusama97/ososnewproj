const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const defaultCountries = [
  {
    code: "fr",
    nameAr: "فرنسا",
    nameEn: "France",
    flag: "🇫🇷",
    visaType: "تأشيرة سياحية",
    accent: "from-[#213f8f] via-white to-[#d42028]",
  },
  {
    code: "us",
    nameAr: "أمريكا",
    nameEn: "United States",
    flag: "🇺🇸",
    visaType: "تأشيرة سياحية",
    accent: "from-[#123c7d] via-white to-[#c62839]",
  },
  {
    code: "gb",
    nameAr: "بريطانيا",
    nameEn: "United Kingdom",
    flag: "🇬🇧",
    visaType: "تأشيرة سياحية",
    accent: "from-[#1a3b8f] via-white to-[#cf2d37]",
  },
  {
    code: "de",
    nameAr: "ألمانيا",
    nameEn: "Germany",
    flag: "🇩🇪",
    visaType: "تأشيرة سياحية",
    accent: "from-black via-[#d52b1e] to-[#ffce00]",
  },
  {
    code: "it",
    nameAr: "إيطاليا",
    nameEn: "Italy",
    flag: "🇮🇹",
    visaType: "تأشيرة سياحية",
    accent: "from-[#009246] via-white to-[#ce2b37]",
  },
  {
    code: "es",
    nameAr: "إسبانيا",
    nameEn: "Spain",
    flag: "🇪🇸",
    visaType: "تأشيرة سياحية",
    accent: "from-[#aa151b] via-[#f1bf00] to-[#aa151b]",
  },
  {
    code: "jp",
    nameAr: "اليابان",
    nameEn: "Japan",
    flag: "🇯🇵",
    visaType: "تأشيرة سياحية",
    accent: "from-white via-[#f5f2f2] to-[#bc002d]",
  },
  {
    code: "ch",
    nameAr: "سويسرا",
    nameEn: "Switzerland",
    flag: "🇨🇭",
    visaType: "تأشيرة سياحية",
    accent: "from-[#d52b1e] via-[#ef3b2d] to-[#d52b1e]",
  },
];

const defaultAdmin = {
  username: process.env.ADMIN_USERNAME || "admin",
  passwordHash:
    process.env.ADMIN_PASSWORD_HASH ||
    "d65cf595b881d96add3d34b28f1ad17c61f578470aed7b11ebcefd8f894bb4d457d8794866268197fbdc405a6f04d789cadfc6e5155b60b8448a4981285abc2f",
  salt:
    process.env.ADMIN_PASSWORD_SALT ||
    "2ff7325e22e05c9d71b4bdddfd986c59",
};

async function main() {
  for (const country of defaultCountries) {
    await prisma.country.upsert({
      where: { code: country.code },
      update: {
        nameAr: country.nameAr,
        nameEn: country.nameEn,
        flag: country.flag,
        visaType: country.visaType,
        accent: country.accent,
        isActive: true,
      },
      create: country,
    });
  }

  await prisma.adminCredential.upsert({
    where: { username: defaultAdmin.username },
    update: {
      passwordHash: defaultAdmin.passwordHash,
      salt: defaultAdmin.salt,
    },
    create: defaultAdmin,
  });

  console.log("Database seed completed successfully.");
}

main()
  .catch((error) => {
    console.error("Database seed failed.");
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
