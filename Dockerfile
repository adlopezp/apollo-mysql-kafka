# Uses the node base image with the latest LTS version
FROM node:lts-bookworm-slim
# Informs Docker that the container listens on the 
# specified network ports at runtime
EXPOSE 4000
# Changes working directory to the new directory just created
WORKDIR /usr/src/app

# Copies index.js and the two package files from the local 
# directory to a new app directory on the container
COPY . .

# Installs npm dependencies on container
RUN npm ci
# Command container will actually run when called
CMD ["npm", "start"]