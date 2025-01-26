const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {

  // API Endpoints shown at '/'
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>The Cannabis API Documentation</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f7fa;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }
        h1 {
          color: #2c3e50;
          font-size: 36px;
          margin-bottom: 20px;
        }
        h2 {
          color: #16a085;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .logo {
          max-width: 300px;
          height: auto;
          margin-bottom: 30px;
        }
        .api-endpoints {
          text-align: left;
          display: inline-block;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .api-endpoints ul {
          list-style-type: none;
          padding: 0;
        }
        .api-endpoints li {
          font-size: 16px;
          margin: 10px 0;
        }
        .api-endpoints code {
          background-color: #ecf0f1;
          padding: 5px 8px;
          border-radius: 4px;
          font-size: 14px;
          color: #2c3e50;
        }
        footer {
          color: #16a085;
          text-align: center;
          padding: 10px 0;
          margin-top: 40px;
        } 
        footer p {
          margin: 0;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>The Cannabis API Documentation</h1>
        
        <h2>The following API endpoints are available:</h2>
        
        <div class="api-endpoints">
          <ul>
            <li><code>GET /api/strains/getStrainsById/:strainID</code>: Retrieves a specific strain by its ID.</li>
            <li><code>GET /api/strains/getStrainsByName/:strainName</code>: Retrieves strains by name.</li>
            <li><code>GET /api/strains/getStrainsByType/:strainType</code>: Retrieves strains by type.</li>
            <li><code>GET /api/strains/getStrainsByEffect/:strainEffect</code>: Retrieves strains by effect.</li>
            <li><code>GET /api/strains/getStrainsByFlavour/:strainFlavour</code>: Retrieves strains by flavor.</li>
            <li><code>GET /api/strains/getEffectsByStrainId/:strainID</code>: Retrieves effects by strain ID.</li>
            <li><code>GET /api/strains/getFlavoursByStrainId/:strainID</code>: Retrieves flavours by strain ID.</li>
            <li><code>GET /api/strains/getAllFlavours</code>: Retrieves all flavours.</li>
            <li><code>GET /api/strains/getAllEffects</code>: Retrieves all effects.</li>
          </ul>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 The Cannabis API. By The Kernel Panic. All Rights Reserved.</p>
      </footer>
    </body>
    </html>
  `;

  // Serve the HTML response
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(htmlContent);
};
