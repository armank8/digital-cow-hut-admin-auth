# l2a3-cow-hut-backend-assignment-Arman-Kabir

# Github : https://github.com/Programming-Hero-Web-Course4/l2a3-cow-hut-backend-assignment-Arman-Kabir

# Live Link: https://digital-cow-hut-admin-auth-taupe.vercel.app/

# Routes:

### Auth (User)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/auth/login (POST)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/auth/signup (POST)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/auth/refresh-token (POST)

### Auth (Admin)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/admins/create-admin (POST)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/admins/login (POST)
  

### User   
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users (GET)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database-->(648fbebcf111a9c6a522bb5f)

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)-->(648fbebcf111a9c6a522bb5f)

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database-->(648fbebcf111a9c6a522bb5f)

### Cows
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows (POST)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows (GET)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database-->(648fc2fe5c13168a3fc398c9)
    
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (PATCH) -->(648fc2fe5c13168a3fc398c9)

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database-->(648fc2fe5c13168a3fc398c9)

### Pagination and Filtering routes of Cows
    api/v1/cows?page=1&limit=10
    api/v1/cows?sortBy=price&sortOrder=asc
    api/v1/cows?minPrice=3000&maxPrice=5000
    api/v1/cows?location=Chattogram
    api/v1/cows?searchTerm=Cha

## Orders
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/orders (POST)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/orders (GET)

# Bonus Part

## Admin
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/admins/create-admin(POST)

## My Profile
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/my-profile(GET)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/my-profile(PATCH)

## Order
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/orders/   (GET)





# l2b1a4-cow-hut-admin-auth-Arman-Kabir
