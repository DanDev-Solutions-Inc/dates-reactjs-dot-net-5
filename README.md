# How to Use Dates with React and .NET 5.0

Implementing dates can be tricky with different local date formatting and client-side time zones. That is why I recommend using UTC date format on the client-side and converting it to your local date and time in the backend. Doing this you don't run into formatting issues in production. At first this may seem difficult but with component libraries it becomes very simple.
