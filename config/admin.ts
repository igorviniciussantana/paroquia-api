export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2563c888ac1a77798cd9494af1568dd2'),
  },
});
