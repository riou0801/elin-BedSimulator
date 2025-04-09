
// server.ts
import { serve } from "https://deno.land/std@0.224.0/http/server.ts"; // Use a specific version of std
import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts"; // For serving static files

const PORT = 8000; // Port number to listen on

console.log(`HTTP server running. Access it at: http://localhost:${PORT}/`);

// Start the server
serve(async (request: Request) => {
    const url = new URL(request.url);
    const pathname = url.pathname;

    console.log(`Request received for: ${pathname}`); // Log requested path

    try {
        // Serve index.html for the root path ("/")
        if (pathname === "/") {
            // Use serveFile to handle Content-Type and potential range requests
            return await serveFile(request, "./index.html");
        }

        // Serve the bundled JavaScript file
        if (pathname === "/app.js") {
            // Manually open and stream the file with the correct Content-Type
            // Using serveFile might also work, but this is more explicit for JS
            const file = await Deno.open("./app.js", { read: true });
            return new Response(file.readable, {
                headers: { "Content-Type": "application/javascript; charset=utf-8" },
            });
        }

        // --- Add routes for other static files if needed (e.g., CSS, images) ---
        // Example:
        // if (pathname === "/style.css") {
        //     return await serveFile(request, "./style.css");
        // }

        // If no specific route matches, return a 404 Not Found response
        console.log(`File not found: ${pathname}`);
        return new Response("Not Found", { status: 404 });

    } catch (error) {
        console.error("Error serving request:", error);
        // Handle file not found errors specifically if serveFile throws them
        if (error instanceof Deno.errors.NotFound) {
             return new Response("Not Found", { status: 404 });
        }
        // Return a generic server error for other issues
        return new Response("Internal Server Error", { status: 500 });
    }
}, { port: PORT }); // Specify the port here