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
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users (GET) (One admin id--> 64a72ae9e46e0c922f50253c) (One admin login details){
    "phoneNumber":"01211111111",
    "password":"amiadminbujheshunekothakoiyo"
}

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/64abba1e1592f70127b65db9 (Single GET) Include an id that is saved in your database-->(64abba1e1592f70127b65db9)

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/64abba1e1592f70127b65db9 (PATCH)-->(64acbbd6ab79a5e224eff23e)

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/users/64abba1e1592f70127b65db9 (DELETE) Include an id that is saved in your database-->(64acbbd6ab79a5e224eff23e)

### Cows
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows (POST)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows (GET)
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows/64acbf8eab79a5e224eff24c (Single GET) Include an id that is saved in your database-->(64acbf8eab79a5e224eff24c)
    
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows/64acbf8eab79a5e224eff24c (PATCH) -->(64acbf8eab79a5e224eff24c)

    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/cows/64acbf8eab79a5e224eff24c (DELETE) Include an id that is saved in your database-->(64acbf8eab79a5e224eff24c)

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
    https://digital-cow-hut-admin-auth-taupe.vercel.app/api/v1/orders/64abc0365968ab6a38d91caa   (GET)





# l2b1a4-cow-hut-admin-auth-Arman-Kabir
