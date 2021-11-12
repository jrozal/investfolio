const gradients = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, "rgba(60, 155, 252, 0.2)");
  gradient.addColorStop(1, "rgba(91, 127, 253, 1)");

  const gradient2 = ctx.createLinearGradient(400, 0, 0, 0);
  gradient2.addColorStop(0, "rgba(93, 73, 84, 1)");
  gradient2.addColorStop(1, "rgba(255, 166, 158, 0.8)");

  const gradient3 = ctx.createLinearGradient(400, 0, 0, 0);
  gradient3.addColorStop(0, "rgba(35, 51, 41, 1)");
  gradient3.addColorStop(1, "rgba(99, 212, 113, 0.3)");

  const gradient4 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient4.addColorStop(1, "rgba(95, 10, 135, 0.8)");
  gradient4.addColorStop(0, "rgba(164, 80, 139, 1)");

  const gradient5 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient5.addColorStop(1, "rgba(254, 91, 117, 1)");
  gradient5.addColorStop(0, "rgba(255, 168, 117, 0.5)");

  const gradient6 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient6.addColorStop(1, "rgba(211, 211, 211, 1)");
  gradient6.addColorStop(0, "rgba(255, 159, 243, 1)");

  const gradient7 = ctx.createLinearGradient(400, 0, 0, 0);
  gradient7.addColorStop(1, "rgba(159, 152, 232, 1)");
  gradient7.addColorStop(0, "rgba(175, 246, 207, 1)");

  const gradient8 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient8.addColorStop(0, "rgba(245, 56, 3, 1)");
  gradient8.addColorStop(1, "rgba(245, 208, 32, 1)");

  const gradient9 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient9.addColorStop(0, "rgba(173, 29, 235, 1)");
  gradient9.addColorStop(1, "rgba(110, 114, 252, 0.5)");

  const gradient10 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient10.addColorStop(0, "rgba(0, 0, 0, 1)");
  gradient10.addColorStop(0.95, "rgba(255, 234, 167, 1)");
  gradient10.addColorStop(1, "rgba(255, 234, 167, 1)");

  const gradient11 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient11.addColorStop(0, "rgba(4, 97, 159, 1)");
  gradient11.addColorStop(1, "rgba(0, 0, 0, 0.7)");

  return [
    gradient,
    gradient2,
    gradient3,
    gradient4,
    gradient5,
    gradient6,
    gradient7,
    gradient8,
    gradient9,
    gradient10,
    gradient11,
  ];
};

export default gradients;