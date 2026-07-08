import { useState, useEffect } from 'react';

const BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const TABLE_NAME = process.env.REACT_APP_AIRTABLE_TABLE_NAME || 'Prompts';
const TOKEN = process.env.REACT_APP_AIRTABLE_TOKEN;

export function usePrompts() {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrompts() {
      try {
        let allRecords = [];
        let offset = null;

        do {
          const url = new URL(
            `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`
          );
          if (offset) url.searchParams.set('offset', offset);

          const res = await fetch(url, {
            headers: { Authorization: `Bearer ${TOKEN}` }
          });

          if (!res.ok) {
            throw new Error(`Airtable error: ${res.status} ${res.statusText}`);
          }

          const data = await res.json();
          allRecords = [...allRecords, ...data.records];
          offset = data.offset;
        } while (offset);

        const formatted = allRecords
          .filter(r => r.fields.ImageUrl && r.fields.Tag)
          .map(r => ({
            img: r.fields.ImageUrl,
            tag: r.fields.Tag,
            text: r.fields.Text || ''
          }))
          .reverse(); // కొత్తగా యాడ్ అయినవి ముందు కనిపించేలా

        setPrompts(formatted);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrompts();
  }, []);

  return { prompts, loading, error };
}