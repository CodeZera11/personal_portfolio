"use server";

import prisma from "../lib/prisma";

export const fetchSkills = async () => {
  const skills = await prisma.skill.findMany({});

  return skills;
};

export const fetchCertificates = async () => {
  const certificates = await prisma.certificate.findMany({});

  return certificates;
};
