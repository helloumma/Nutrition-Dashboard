# 🍽️Nutrition Dashboard

This dashboard shows a visual representation of nutrients for searched items using the Nutritionix API.

### 📋Aims of App

- User can search for foods and be able to add the item under breakfast, lunch or dinner
- The right data is shown for each food item
- Each chart for breakfast, lunch and dinner is updated accordingly
- Overall chart shows the total metrics from all three charts (breakfast, lunch and dinner)

### 👩‍💻Technical Details

- TypeScript
- React hooks
- NextJS
- React-query
- Vitest
- Tailwind CSS + Daisy UI

### 🔧How to Run the App

```bash
  npm run dev
```

https://nutrition-dashboard-umma.vercel.app/

### 🕵️‍♀️ Testing

```bash
npx vitest

npx vitest --coverage
```

### 💭Future Improvements

- Fix bugs within the search
  - Enable users to be able to click on an item within multiple list items
- Increase testing and validation
- Clean up data fetching
- Feature to enable users to remove items within each board
- Reusable components and clean up calculations on charts
