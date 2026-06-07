import React, { useState, useEffect } from 'react';

const KNOWN_COORDS = {
  'goa':             { lat: 15.2993, lon: 74.1240 },
  'manali':          { lat: 32.2396, lon: 77.1887 },
  'rishikesh':       { lat: 30.0869, lon: 78.2676 },
  'udaipur':         { lat: 24.5854, lon: 73.7125 },
  'varanasi':        { lat: 25.3176, lon: 82.9739 },
  'jaipur':          { lat: 26.9124, lon: 75.7873 },
  'amritsar':        { lat: 31.6340, lon: 74.8723 },
  'munnar':          { lat: 10.0889, lon: 77.0595 },
  'spiti valley':    { lat: 32.2461, lon: 78.0338 },
  'andaman islands': { lat: 11.7401, lon: 92.6586 },
  'andaman':         { lat: 11.7401, lon: 92.6586 },
  'shimla':          { lat: 31.1048, lon: 77.1734 },
  'delhi':           { lat: 28.6139, lon: 77.2090 },
  'mumbai':          { lat: 19.0760, lon: 72.8777 },
  'bangalore':       { lat: 12.9716, lon: 77.5946 },
  'kolkata':         { lat: 22.5726, lon: 88.3639 },
  'chennai':         { lat: 13.0827, lon: 80.2707 },
  'hyderabad':       { lat: 17.3850, lon: 78.4867 },
  'mysore':          { lat: 12.2958, lon: 76.6394 },
  'agra':            { lat: 27.1767, lon: 78.0081 },
  'darjeeling':      { lat: 27.0360, lon: 88.2627 },
  'leh':             { lat: 34.1526, lon: 77.5771 },
  'ladakh':          { lat: 34.1526, lon: 77.5771 },
  'coorg':           { lat: 12.3375, lon: 75.8069 },
  'ooty':            { lat: 11.4102, lon: 76.6950 },
  'jaisalmer':       { lat: 26.9157, lon: 70.9083 },
  'pushkar':         { lat: 26.4899, lon: 74.5511 },
};

const mapCache = {};

const buildUrl = (lat, lon) => {
  var bbox = [lon - 0.15, lat - 0.15, lon + 0.15, lat + 0.15];
  return 'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox.join(',') + '&layer=mapnik&marker=' + lat + ',' + lon;
};

const OpenStreetMap = ({ destination, className }) => {
  const [mapUrl, setMapUrl] = useState('');

  useEffect(() => {
    if (!destination) return;

    var key = destination.toLowerCase().trim();

    if (mapCache[key]) {
      setMapUrl(mapCache[key]);
      return;
    }

    var known = KNOWN_COORDS[key];
    if (known) {
      var url = buildUrl(known.lat, known.lon);
      mapCache[key] = url;
      setMapUrl(url);
      return;
    }

    fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(destination) + ',India&limit=1')
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data && data.length > 0) {
          var lat = parseFloat(data[0].lat);
          var lon = parseFloat(data[0].lon);
          var fetchedUrl = buildUrl(lat, lon);
          mapCache[key] = fetchedUrl;
          setMapUrl(fetchedUrl);
        } else {
          setMapUrl('https://www.openstreetmap.org/export/embed.html?bbox=68.0,8.0,97.0,37.0&layer=mapnik');
        }
      })
      .catch(function() {
        setMapUrl('https://www.openstreetmap.org/export/embed.html?bbox=68.0,8.0,97.0,37.0&layer=mapnik');
      });
  }, [destination]);

  if (!mapUrl) {
    return (
      <div style={{
        width: '100%',
        height: '450px',
        borderRadius: '12px',
        background: '#f1f5f9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#64748b',
        fontSize: '1rem'
      }}>
        Loading map for {destination}...
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
      <iframe
        src={mapUrl}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={'Map of ' + destination}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default OpenStreetMap;
