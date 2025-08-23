"use server";
//@ts-ignore
import prisma from "@/lib/PrismaClient";
import { revalidatePath } from "next/cache";

export async function createMenuItem(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const amount = formData.get("amount") as string;
    const status = formData.get("status") as string;

    // Validate required fields
    if (!name || !amount) {
      return {
        success: false,
        error: "Name and amount are required",
      };
    }

    // Create menu item in database
    const menuItem = await prisma.menuItem.create({
      data: {
        item_name: name,
        amount: parseInt(amount),
        status: status === "Active",
      },
    });

    // Revalidate the menu page to show the new item
    revalidatePath("/menu");

    return {
      success: true,
      data: menuItem,
    };
  } catch (error) {
    console.error("Error creating menu item:", error);
    return {
      success: false,
      error: "Failed to create menu item",
    };
  }
}

// Alternative version using object parameters instead of FormData
export async function createMenuItemWithData(data: {
  name: string;
  amount: number;
  status: "Active" | "Inactive";
}) {
  try {
    const { name, amount, status } = data;

    // Validate required fields
    if (!name || !amount) {
      return {
        success: false,
        error: "Name and amount are required",
      };
    }

    // Create menu item in database
    const menuItem = await prisma.menuItem.create({
      data: {
        item_name: name,
        amount,
        status: status === "Active",
      },
    });

    // Revalidate the menu page to show the new item
    revalidatePath("/menu");

    return {
      success: true,
      data: menuItem,
    };
  } catch (error) {
    console.error("Error creating menu item:", error);
    return {
      success: false,
      error: "Failed to create menu item",
    };
  }
}