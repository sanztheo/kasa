import { useEffect, useState } from 'react';

/**
 * Récupère du JSON statique 
 * Gère les états de chargement et d'erreur, et ignore les réponses obsolètes
 * si l'URL change avant la fin de la requête.
 */
export function useFetch(url) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    let active = true;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Échec du chargement de ${url} (HTTP ${response.status})`);
        }
        return response.json();
      })
      .then((json) => {
        if (active) {
          setData(json);
          setError(undefined);
        }
      })
      .catch((err) => {
        if (active) setError(err);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [url]);

  return { data, loading, error };
}
