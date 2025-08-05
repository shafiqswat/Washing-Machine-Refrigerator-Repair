# Google Maps Integration Setup Guide

This guide explains how to set up Google Maps integration for the AppliancePro website.

## Prerequisites

1. A Google Cloud Platform account
2. A project with billing enabled
3. Google Maps JavaScript API enabled

## Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing for your project

## Step 2: Enable Required APIs

1. Navigate to the [Google Cloud Console APIs & Services](https://console.cloud.google.com/apis/dashboard)
2. Click "Enable APIs and Services"
3. Enable the following APIs:
   - **Maps JavaScript API** (Required)
   - **Places API** (Optional, for enhanced features)
   - **Geocoding API** (Optional, for address lookup)

## Step 3: Create API Credentials

1. Go to [APIs & Services > Credentials](https://console.cloud.google.com/apis/credentials)
2. Click "Create Credentials" > "API Key"
3. Copy the generated API key
4. (Recommended) Restrict the API key:
   - Click on the API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domain(s): `*.yourdomain.com/*`, `localhost:3000/*`
   - Under "API restrictions", select "Restrict key" and choose the enabled APIs

## Step 4: Configure Environment Variables

1. Copy the `.env.local.example` file to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder with your actual API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Contact section on your website
3. Verify that the map loads correctly showing the location at coordinates:
   - Latitude: 2.99281
   - Longitude: 101.786753

## Features Included

### Main Google Map (ContactSection)
- **Interactive map** with custom styling
- **Custom marker** with business information
- **Info window** with business details and phone number
- **"Get Directions" button** linking to Google Maps
- **Floating address card** with location information
- **Responsive design** for all screen sizes

### Compact Map (Footer)
- **Simplified map view** showing service area
- **Non-interactive** (gesture handling disabled)
- **Custom marker** indicating business location
- **Service area badge** overlay

## Customization Options

### Map Styling
The maps use custom styling to match your website's theme. You can modify the styles in:
- `src/components/GoogleMap.js` (main map)
- `src/components/GoogleMapCompact.js` (compact map)

### Location Coordinates
To change the business location, update the coordinates in both map components:
```javascript
center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }
```

### Map Configuration
You can customize various map options:
- **Zoom level**: Adjust the `zoom` property
- **Map controls**: Modify the control settings in the map configuration
- **Marker styling**: Update the marker icon properties

## Troubleshooting

### Map Not Loading
1. Check if your API key is correctly set in `.env.local`
2. Verify that the Maps JavaScript API is enabled
3. Check browser console for error messages
4. Ensure your domain is whitelisted in API restrictions

### Performance Optimization
1. The maps are loaded lazily using the Google Maps React wrapper
2. Components include loading and error states
3. Compact map has minimal features to reduce load time

## Security Best Practices

1. **Never commit** your `.env.local` file to version control
2. **Restrict your API key** to specific domains
3. **Monitor API usage** in the Google Cloud Console
4. **Set up billing alerts** to avoid unexpected charges

## Cost Considerations

- Google Maps provides a generous free tier
- Monitor your usage in the Google Cloud Console
- Consider implementing map caching for high-traffic sites
- The compact map uses minimal features to reduce API calls

## Support

For issues specific to Google Maps integration:
1. Check the [Google Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript)
2. Review the [Google Maps React wrapper documentation](https://github.com/googlemaps/react-wrapper)
3. Check Google Cloud Console for API quota and billing status

---

**Note**: Replace all placeholder coordinates and API keys with your actual business information before deploying to production.