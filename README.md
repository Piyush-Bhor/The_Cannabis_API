# The Cannabis API

![Cannabis API Logo](public/images/logo.png)

The Cannabis API is a RESTful API that provides comprehensive information about various cannabis strains. It allows you to query and retrieve details such as strain name, type (indica, sativa, or hybrid), rating, effects, flavors, and descriptions. The API is built using Node.js, Express, and MongoDB, and it is hosted on Heroku. The dataset used to populate the API is sourced from Kaggle, specifically the "cannabis.csv" file.

## Installation

To run the Cannabis API locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Piyush-Bhor/The_Cannabis_API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd The_Cannabis_API
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up the MongoDB connection:

   1. Sign Up: Go to MongoDB Atlas and create a free account.

   2. Create a Cluster: Click "Build a Cluster" (free tier), choose a cloud provider and region.

   3. Create a Database User: Go to Database Access, click Add New Database User, and set username, password, and "Read and Write" privileges.

   4. Get Connection String: Copy the connection string and replace <username> and <password>.

   5. Add to .env File:

   ```
      CONNECTIONSTRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/test
   ```

   6. Create Database: In Atlas, create a test cluster and a strain database.

   7. Insert Data: Go to Collections in your cluster, click Insert Document, and paste the contents of cannabis.json.
      ![MongoDB](public/images/mongo.png)

5. Start the server:

   ```bash
   npm start
   ```

6. The Cannabis API is now running locally on `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- `GET /strains/getStrainsById/:strainID`: Retrieves a specific strain by its ID.
- `GET /strains/getStrainsByName/:strainName`: Retrieves strains by name.
- `GET /strains/getStrainsByType/:strainType`: Retrieves strains by type.
- `GET /strains/getStrainsByEffect/:strainEffect`: Retrieves strains by effect.
- `GET /strains/getStrainsByFlavour/:strainFlavour`: Retrieves strains by flavor.
- `GET /strains/getEffectsByStrainId/:strainID`: Retrieves effects by strain ID.
- `GET /strains/getFlavorsByStrainId/:strainID`: Retrieves flavors by strain ID.
- `GET /strains/getAllFlavors`: Retrieves all flavors.
- `GET /strains/getAllEffects`: Retrieves all effects.

For detailed information on how to use each endpoint, including request/response examples, please refer to the [API documentation](https://rapidapi.com/th3k3rn3lpan1c/api/the-cannabis-api/details).

## Deployment

The Cannabis API is deployed on Heroku and can be accessed at: [https://the-cannabis-api.herokuapp.com](https://the-cannabis-api.herokuapp.com).

## Contributing

Contributions to the Cannabis API project are welcome! If you find any bugs, have suggestions for improvements, or would like to add new features, please submit an issue or open a pull request.

## License

The Cannabis API is released under the [MIT License](https://opensource.org/licenses/MIT). Please see the [LICENSE](https://github.com/Piyush-Bhor/The_Cannabis_API/blob/main/LICENSE) file for more details.

## Dataset

The dataset used in this project is sourced from Kaggle: [cannabis.csv](https://www.kaggle.com/datasets/kingburrito666/cannabis-strains). The "cannabis.csv" file contains the strain data used to populate the API.

## Contact

For any questions or inquiries, please reach out to project maintainer Piyush Bhor:

- Email: piyushbhor22@gmail.com
- GitHub: [Piyush-Bhor](https://github.com/Piyush-Bhor)
