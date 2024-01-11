const axios = require('axios')
async function getHomeData(id: string): Promise<any> {
  try {
    const response = await axios.get(
      `https://gce.onedev.top/api/v1/site/organizations/${id}?include=users%2Cindustries%2Cservices%2Ccountry%2Ccity%2Corganization_users%2Corganization_users_position%2Corganization_users_user_invited%2Corganization_users_iam_group%2Cchildren%2Cchilden_organization_users%2Cchildren_organization_users_position%2Cchildren_organization_users_iam_group%2Ciam_groups%2Cchapters%2Csummary`
    )

    return response.data
  } catch (error) {
    throw error
  }
}

export { getHomeData }
