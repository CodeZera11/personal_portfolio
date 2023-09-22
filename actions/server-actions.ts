"use server";

import prisma from "../lib/prisma";

export const fetchSkills = async () => {
  const skills = await prisma.skill.findMany({});

  return skills;
};
