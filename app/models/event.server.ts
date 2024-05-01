import type { Prisma } from "@prisma/client";

import { prisma } from "~/db.server";

export async function getEvents(filter?: Prisma.EventWhereInput) {
  return prisma.event.findMany({
    where: filter,
    orderBy: {
      date: "asc",
    },
  });
}

export async function getEventById(id: string) {
  return prisma.event.findUnique({
    where: { id },
    include: {
      address: true,
    },
  });
}

export async function createEvent({
  title,
  description,
  date,
  slots,
  price,
  imageId,
  addressId,
  creatorId,
}: {
  title: string;
  description: string;
  date: Date;
  slots: number;
  price: number;
  imageId: string;
  addressId: string;
  creatorId: string;
}) {
  return prisma.event.create({
    data: {
      title,
      description,
      date,
      slots,
      price,
      imageId,
      addressId,
      createdById: creatorId,
    },
  });
}

export async function updateEvent(
  id: string,
  {
    title,
    description,
    date,
    slots,
    price,
    imageId,
    addressId,
    creatorId,
  }: {
    title?: string;
    description?: string;
    date?: Date;
    slots?: number;
    price?: number;
    imageId?: string;
    addressId?: string;
    creatorId?: string;
  },
) {
  return prisma.event.update({
    where: { id },
    data: {
      title,
      description,
      date,
      slots,
      price,
      addressId,
      imageId,
      createdById: creatorId,
    },
  });
}

export async function deleteEvent(id: string) {
  return prisma.event.delete({
    where: { id },
  });
}
