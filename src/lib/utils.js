import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function getData() {
  // Function to get access token
  const getAccessToken = async () => {
    const endpoint =
      "https://entreprise.francetravail.fr/connexion/oauth2/access_token";
    const realm = "/partenaire";
    const clientId =
      "PAR_openwork_a49d3d970583a79501e839028f071d61b3800041039e079dbdee8c9d4ba1f8ee";
    const clientSecret =
      "115ebf7ca4bb4f7ea410eae90cef4d98f074b87064ffe3fce3eeec3474884475";
    const scope = "api_stats-offres-demandes-emploiv1 offresetdemandesemploi";

    const requestBody = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: scope,
    });

    const response = await fetch(
      `${endpoint}?realm=${encodeURIComponent(realm)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: requestBody,
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error_description);
    }

    const data = await response.json();
    return data.access_token;
  };

  // Fetch data using access token
  const accessToken = await getAccessToken();
  console.log(accessToken);
  const url =
    "https://api.pole-emploi.io/partenaire/stats-offres-demandes-emploi/v1/indicateur/stat-demandeurs";

  const requestData = {
    codeTypeTerritoire: "REG",
    codeTerritoire: "75",
    codeTypeActivite: "ROME",
    codeActivite: "A1203",
    codeTypePeriode: "TRIMESTRE",
    codeTypeNomenclature: "CATCAND",
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!response.ok) {
    console.log(response.status);
    return [];
  }

  const data = await response.json();
  return data;
}
