import fs from "node:fs/promises";

const filepath = "user_data.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filepath, content, "utf8");
        console.log("File created successfully");
    } catch (error) {
        console.log("Error:", error);
    }
}

async function rundemo() {
    await createFile("Hello, this is my userdata file");
}

rundemo();