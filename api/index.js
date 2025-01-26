const path = require('path');
const fs = require('fs');

module.exports = async (req, res) => {
  // Path to the image
  const imagePath = path.join(__dirname, '../public/images/logo.png');

  // Check if the image exists
  if (!fs.existsSync(imagePath)) {
    return res.status(404).send('Image not found');
  }

  // HTML content with the image and API endpoints description
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Documentation</title>
    </head>
    <body>
      <div style="text-align: center;">
        <img src="/your-image.jpg" alt="API Image" style="max-width: 100%; height: auto;"/>

        <h2>The following API endpoints are available:</h2>
        <ul style="text-align: left; display: inline-block; font-size: 18px;">
          <li><code>GET /strains/getStrainsById/:strainID: Retrieves a specific strain by its ID.</code></li>
          <li><code>GET /strains/getStrainsByName/:strainName: Retrieves strains by name.</code></li>
          <li><code>GET /strains/getStrainsByType/:strainType: Retrieves strains by type.</code></li>
          <li><code>GET /strains/getStrainsByEffect/:strainEffect: Retrieves strains by effect.</code></li>
          <li><code>GET /strains/getStrainsByFlavour/:strainFlavour: Retrieves strains by flavor.</code></li>
          <li><code>GET /strains/getEffectsByStrainId/:strainID: Retrieves effects by strain ID.</code></li>
          <li><code>GET /strains/getFlavoursByStrainId/:strainID: Retrieves flavours by strain ID.</code></li>
          <li><code>GET /strains/getAllFlavours: Retrieves all flavours.</code></li>
          <li><code>GET /strains/getAllEffects: Retrieves all effects.</code></li>
        </ul>
      </div>
    </body>
    </html>
  `;

  // Serve the HTML response
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(htmlContent);
};
